import { StyledHeaderHome } from "./style";
import { StyledTypography } from "../../styles/Typography";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const HeaderHome = () => {

    const { user } = useContext(UserContext);

    return (
        <StyledHeaderHome>
            <StyledTypography typographyStyle="title1" className="name">
                Olá, {user.full_name}
            </StyledTypography>
            <StyledTypography typographyStyle="headlineBold" color="#868E96">
                {user.email}
            </StyledTypography>
        </StyledHeaderHome>
    )
}
