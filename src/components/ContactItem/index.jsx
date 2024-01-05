import { StyledContactItem } from "./style";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { StyledTypography } from "../../styles/typography";
import { useContext } from "react";
import { AdminContext } from "../../providers/AdminContext";

export const ContactItem = ({ contact }) => {
  const { openEditModal, openDeleteModal } = useContext(AdminContext);

  return (
    <StyledContactItem>
      <div className="nameContainer">
        <div>
          <StyledTypography typographyStyle={"headline"} className="name">
            {contact.full_name}
          </StyledTypography>
        </div>
        <div>
          <StyledTypography typographyStyle={"headline"} className="email">
            {contact.email}
          </StyledTypography>
        </div>
        <div>
          <StyledTypography typographyStyle={"headline"}>
            {contact.phone_number}
          </StyledTypography>
        </div>
      </div>
      <div className="iconContainer">
        <FaPencilAlt onClick={() => openEditModal(contact)} />
        <FaTrashAlt onClick={() => openDeleteModal(contact)} />
      </div>
    </StyledContactItem>
  );
};
