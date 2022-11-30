import styled from "styled-components";
import Image from "next/image"
import fish from "../public/fish.png";
import { Button } from "@mui/material";
import { GoogleIcon } from "@mui/icons-material/Google";

function login() {
    return (
        <Container className="water">
            <Login>
                <Image src={fish}
                    width={100}
                    height={100}
                    unoptimized />
                <Button style={{ color: 'gray' }} statIcon={<GoogleIcon />}>
                    Login com o Google
                </Button>
            </Login>
        </Container>
    )
}

export default login

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;
`;

const Login = styled.div`
    padding: 30px;
    display: flex;
    gap: 20px;
    background-color: white;
    border-radius: 15px;
`;
