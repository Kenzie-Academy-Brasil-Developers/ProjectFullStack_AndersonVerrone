import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export const AdminContext = createContext({});

export const AdminProvider = ({ children }) => {
    const [ isOpenModalCreate, setIsOpenModalCreate ] = useState(false);
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");
    const { reset } = useForm();

    const { loadUser } = useContext(UserContext);

    const createContact = async (formData, setIsLoading) => {
        try {
            setIsLoading(true);
            const {data} = await api.post(`/user/${userId}/contact/`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            loadUser(token, userId);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }




    return (
        <AdminContext.Provider value={{
            isOpenModalCreate,
            setIsOpenModalCreate,
            createContact,
        }}>
            {children}
        </AdminContext.Provider>
    )
}