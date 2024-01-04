import logo from "../../assets/logoImg.png";
import { StyledHomePage } from "./style";
import { StyledButtonExit } from "../../styles/button";
import { HeaderHome} from "../../components/HeaderHome";
import { ContactContainer } from "../../components/ContactContainer"
import { useContext } from "react";
import { AdminContext } from "../../providers/AdminContext";
import { CreateModal } from "../../components/CreateModal";

export const HomePage = () => {
    const { isOpenModalCreate } = useContext(AdminContext);
    return (
        <StyledHomePage>
            <header>
                <div>
                    <img src={logo} alt="Logo MyContact" />
                    <StyledButtonExit onClick={() => {userLogout()}}>
                        Sair
                    </StyledButtonExit>
                </div>
            </header>
            <div className="bannerContainer">
                <HeaderHome />
            </div>
            <main>
                <ContactContainer/>
            </main>
            {isOpenModalCreate&&(<CreateModal />)}
        </StyledHomePage>
    )
}