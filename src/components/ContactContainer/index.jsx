import { StyledContactContainer } from "./style";
import { StyledTypography } from "../../styles/Typography";
import { FaPlusCircle } from "react-icons/fa";
import { ContactList } from "../ContactList";
import { useContext } from "react";
import { AdminContext } from "../../providers/AdminContext";

export const ContactContainer = () => {
  const { setIsOpenModalCreate } = useContext(AdminContext)
  return (
    <StyledContactContainer>
      <div>
        <StyledTypography typographystyle="headlineBold">
          Contatos
        </StyledTypography>
        <FaPlusCircle onClick={()=>{setIsOpenModalCreate(true)}}/>
      </div>
      <ContactList/>
    </StyledContactContainer>
  );
};
