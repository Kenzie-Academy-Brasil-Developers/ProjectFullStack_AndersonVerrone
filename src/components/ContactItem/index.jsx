import { StyledContactItem } from "./style";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { StyledTypography } from "../../styles/typography";

export const ContactItem = ({ contact }) => {
  return (
    <StyledContactItem>
      <div className="nameContainer">
        <div>
          <StyledTypography typographyStyle={"headline"}>
            {contact.full_name}
          </StyledTypography>
        </div>
        <div>
          <StyledTypography typographyStyle={"headline"}>
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
        <FaPencilAlt />
        <FaTrashAlt />
      </div>
    </StyledContactItem>
  );
};
