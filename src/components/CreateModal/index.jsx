import { StyledCreateModal } from "./style";
import { MdClose } from "react-icons/md";
import { StyledTypography } from "../../styles/Typography";
import { useContext, useState } from "react";
import { StyledButtonMain } from "../../styles/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createModalSchema } from "./createModalSchema";
import { AdminContext } from "../../providers/AdminContext";
import { Input } from "../Input";

export const CreateModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createModalSchema),
  });
  const { setIsOpenModalCreate, createContact } = useContext(AdminContext);

  const submit = (formData) => {
    const updatedData = {
        full_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone_number: formData.phone_number,
    }

    createContact(updatedData,setIsLoading);
  }

  return (
    <StyledCreateModal role="dialog">
      <div>
        <header>
          <div>
            <StyledTypography typographystyle="title3">
              Cadastrar Contato
            </StyledTypography>
            <MdClose
              size={20}
              color="#868E96"
              onClick={() => {
                setIsOpenModalCreate(false);
              }}
            />
          </div>
        </header>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            label="Nome"
            id="firstName"
            placeholder="Digite o nome do contato."
            type="text"
            helper={errors.firstName?.message}
            {...register("firstName")}
          />
          <Input
            label="Sobrenome"
            id="lastName"
            placeholder="Digite o sobrenome do contato."
            type="text"
            helper={errors.lastName?.message}
            {...register("lastName")}
          />
          <Input
            label="E-mail"
            id="email"
            placeholder="Digite o email do contato."
            type="text"
            helper={errors.email?.message}
            {...register("email")}
          />
          <Input
            label="Telefone"
            id="phone"
            placeholder="Digite o telefone do contato."
            type="text"
            helper={errors.phone_number?.message}
            {...register("phone_number")}
          />
          <StyledButtonMain type="submit" disabled={isLoading}>
            {isLoading ? "Cadastrando Contato..." : "Cadastrar Contato"}
          </StyledButtonMain>
        </form>
      </div>
    </StyledCreateModal>
  );
};
