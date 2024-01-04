import { StyledContactContainer } from "./style";
import { StyledTypography } from "../../styles/typography";
import { FaPlusCircle } from "react-icons/fa";
import { ContactList } from "../ContactList";
import { useContext } from "react";
import { AdminContext } from "../../providers/AdminContext";

export const ContactContainer = () => {
  const { setIsOpenModalCreate } = useContext(AdminContext)
  return (
    <StyledContactContainer>
      <div>
        <StyledTypography typographyStyle="headlineBold">
          Contatos
        </StyledTypography>
        <FaPlusCircle onClick={()=>{setIsOpenModalCreate(true)}}/>
      </div>
      <ContactList/>
    </StyledContactContainer>
  );
};
