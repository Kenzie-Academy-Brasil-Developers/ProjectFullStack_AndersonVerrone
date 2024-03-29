import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [contacts, setContacts] = useState([]);
  const { reset } = useForm();
  const navigate = useNavigate();

  const loadUser = async (token, id) => {
    try {
      setLoading(true);
      const { data } = await api.get(`/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(data);
      setContacts(data.contacts);
    } catch (error) {
      toastyError("Ops! Aconteceu algum erro!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem("@USERID");
    const token = localStorage.getItem("@TOKEN");
    console.log("beta");
    if (userId && token) {
      loadUser(token, userId);
      console.log("alfa")
    }
  }, []);

  const toastySuccess = (text) => {
    toast.success(text, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const toastyError = (text) => {
    toast.error(text, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const userRegister = async (FormData, setIsLoading) => {
    try {
      setIsLoading(true);
      await api.post("/user", FormData);
      reset();
      toastySuccess("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      toastyError("Ops! Ocorreu um erro ao cadastrar!");
    } finally {
      setIsLoading(false);
    }
  };

  const userLogin = async (FormData, setIsLoading) => {
    try {
      setIsLoading(true);
      const { data } = await api.post("/login", FormData);
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.userId);
      loadUser(data.token,data.userId);
      if (user.contacts && user.contacts.length > 0) {
        toastySuccess("Login realizado com sucesso!");
        reset();
        navigate("/home");
      } else {
        toastyError("Usuário ou contatos não encontrados.");
      }
    } catch (err) {
      toastyError("Ops! Ocorreu um erro ao logar!");
    } finally {
      setIsLoading(false);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        userRegister,
        userLogout,
        contacts,
        loadUser,
        loading,
        toastySuccess,
        toastyError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
