import { Container, Form, Background } from "./styles";

import { Input } from "../../components/Input";
import {FiLogIn, FiLock, FiMail} from "react-icons/fi"
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { useState } from "react";

export function SingIn(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const { singIn } = useAuth();

    function handleSingIn(){
        singIn({email, password});
    }

    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar seus links úteis</p>

                <h2>Faça seu login</h2>
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handleSingIn}/>

                <Link to='register'>Criar conta</Link>

            </Form>

            <Background/>
        </Container>
    )
}