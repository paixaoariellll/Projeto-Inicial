import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <Wrapper>
            <Container>
                <Sidebar />
                {children}
            </Container>
        </Wrapper>
    )
}

export default Layout;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

const Container = styled.div`
    display: flex;
    width: 75vw;
    margin: auto;
    margin-bottom:20px;
    margin-top: 20px;
    box-shadow: 0 0 1rem 0.05rem rgba(0, 0, 0, 0.2);
    height: 100vh;s

    @media only screen and (max-width: 640px) {
        width: 100%;
        height: 100vh;
        margin: 0;
    }
`;  