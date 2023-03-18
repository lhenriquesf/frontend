import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";


export function Header(){

    const { singOut, user } = useAuth();
    const navigate = useNavigate();

    function handleSingOut(){
        navigate("/")
        singOut();
    }

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return(
        <Container>
            <Profile to='/profile'>
                <img src={avatarURL} alt="Foto do usuário"/>

                <div>
                    <span>Bem vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={handleSingOut} >
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}
