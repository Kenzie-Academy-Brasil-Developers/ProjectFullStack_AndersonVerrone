import logo from "../../assets/logoImg.png";
import { StyledHomePage } from "./style";
import { StyledButtonExit } from "../../styles/button";
import { HeaderHome} from "../../components/HeaderHome";
import { ContactContainer } from "../../components/ContactContainer"
import { useContext } from "react";
import { AdminContext } from "../../providers/AdminContext";
import { CreateModal } from "../../components/CreateModal";
import { EditModal } from "../../components/EditModal";
import { DeleteModal } from "../../components/DeleteModal";
import { UserContext } from "../../providers/UserContext";

export const HomePage = () => {
    const { isOpenModalCreate, isOpenModalEdit, isOpenModalDelete } = useContext(AdminContext);
    const { userLogout } = useContext(UserContext);
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
            {isOpenModalEdit&&(<EditModal />)}
            {isOpenModalDelete&&(<DeleteModal />)}
        </StyledHomePage>
    )
}