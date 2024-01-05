import { StyledEditModal } from "./style";
import { MdClose } from "react-icons/md";
import { StyledTypography } from "../../styles/typography";
import { Input } from "../Input";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editModalSchema } from "./editModalSchema";
import { AdminContext } from "../../providers/AdminContext";
import { StyledButtonMain } from "../../styles/button";

export const EditModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { closeEditModal, target, editContact } = useContext(AdminContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editModalSchema),
  });

  const submit = (formData) => {
    const updateData = {
      full_name: formData.full_name ? formData.full_name : target.full_name,
      email: formData.email ? formData.email : target.email,
      phone_number: formData.phone_number
        ? formData.phone_number
        : target.phone_number,
    };
    editContact(updateData, setIsLoading);
  };
  return (
    <StyledEditModal role="dialog">
      <div>
        <header>
          <div>
            <StyledTypography typographyStyle="title3">
              Editar Contato
            </StyledTypography>
            <MdClose
              size={20}
              color="#868E96"
              onClick={() => closeEditModal()}
            />
          </div>
        </header>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            label="Nome"
            id="name"
            placeholder={target.full_name}
            type="text"
            helper={errors.full_name?.message}
            {...register("full_name")}
          />
          <Input
            label="E-mail"
            id="email"
            placeholder={target.email}
            type="text"
            helper={errors.email?.message}
            {...register("email")}
          />
          <Input
            label="Telefone"
            id="phone"
            placeholder={target.phone_number}
            type="text"
            helper={errors.phone_number?.message}
            {...register("phone_number")}
          />
          <StyledButtonMain type="submit" disabled={isLoading}>
            {isLoading ? "Atualizando Contato..." : "Atualizar Contato"}
          </StyledButtonMain>
        </form>
      </div>
    </StyledEditModal>
  );
};
