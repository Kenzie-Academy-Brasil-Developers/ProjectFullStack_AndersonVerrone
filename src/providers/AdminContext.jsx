import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export const AdminContext = createContext({});

export const AdminProvider = ({ children }) => {
    const [ isOpenModalCreate, setIsOpenModalCreate ] = useState(false);
    const [ isOpenModalEdit, setIsOpenModalEdit ] = useState(false);
    const [ isOpenModalDelete, setIsOpenModalDelete ] = useState(false);
    const [ target, setTarget ] = useState({});
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");
    const { reset } = useForm();

    const { loadUser, toastyError, toastySuccess } = useContext(UserContext);

    const openEditModal = (contact) => {
        setIsOpenModalEdit(true);
        setTarget(contact);
    };

    const closeEditModal = () => {
        setIsOpenModalEdit(false);
        setTarget({});
    };

    const openDeleteModal = (contact) => {
        setIsOpenModalDelete(true);
        setTarget(contact);
    }

    const closeDeleteModal = () => {
        setIsOpenModalDelete(false);
        setTarget({});
    }

    const createContact = async (formData, setIsLoading) => {
        try {
            setIsLoading(true);
            const {data} = await api.post(`/user/${userId}/contact/`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            loadUser(token, userId);
            toastySuccess("Contato realizado com sucesso!");
            setIsOpenModalCreate(false);
        } catch (error) {
            toastyError("Ops! Ocorreu um erro ao cadastrar!");
        } finally {
            setIsLoading(false);
        }
    }

    const editContact = async (formData, setIsLoading) => {
        try{
            setIsLoading(true);
            const {data} = await api.patch(`/contacts/${target.id}`,formData,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            loadUser(token, userId);
            toastySuccess("Contato editado com sucesso!");
            setIsOpenModalEdit(false);
        } catch (error) {
            toastyError("Ops! Ocorreu um erro ao atualizar!");
        } finally {
            setIsLoading(false);
        }
    }

    const deleteContact = async (setIsLoading) => {
        try {
            setIsLoading(true);
            const {data} = await api.delete(`/contacts/${target.id}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            loadUser(token, userId);
            toastySuccess("Contato deletado com sucesso!");
            setIsOpenModalDelete(false);
        } catch (error) {
            toastyError("Ops! Ocorreu um erro ao deletar!");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <AdminContext.Provider value={{
            isOpenModalCreate,
            setIsOpenModalCreate,
            createContact,
            openEditModal,
            closeEditModal,
            isOpenModalEdit,
            target,
            editContact,
            isOpenModalDelete,
            openDeleteModal,
            closeDeleteModal,
            deleteContact,
        }}>
            {children}
        </AdminContext.Provider>
    )
}