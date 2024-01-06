import { StyledDeleteModal } from "./style";
import { StyledTypography } from "../../styles/Typography";
import { MdClose } from "react-icons/md";
import { useContext, useState } from "react";
import { AdminContext } from "../../providers/AdminContext";
import { StyledButtonMain } from "../../styles/Button";

export const DeleteModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { target, closeDeleteModal, deleteContact } = useContext(AdminContext);

  return (
    <StyledDeleteModal role="dialog">
      <div>
        <header>
          <div>
            <StyledTypography typographyStyle="title3">
              Deletar Contato
            </StyledTypography>
            <MdClose
              size={20}
              color="#868E96"
              onClick={() => closeDeleteModal()}
            />
          </div>
        </header>
        <div>
          <StyledTypography typographyStyle="headline">
            Deseja deletar o contato de
          </StyledTypography>
          <StyledTypography typographyStyle="headlineBold">
            " {target.full_name} "
          </StyledTypography>
          <StyledButtonMain disabled={isLoading} onClick={()=>deleteContact(setIsLoading)}>
            {isLoading ? "Deletando Contato..." : "Deletar Contato"}
          </StyledButtonMain>
        </div>
      </div>
    </StyledDeleteModal>
  );
};
