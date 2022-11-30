import React from 'react'
import styled from 'styled-components'
import { Avatar, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import VerticalItens from './DropdownHeader';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
/* import Image from 'next/image';
import fish from '../public/fish.png'; */
import Messages from '../data/messages.json';
import Message from './Message';

const ChatContent = () => {
    return (
        <Container>
            <Header className='w-full'>
                <Avatar />
                <HeaderInfo>
                    <h3 className='text-gray-700'>Gabriel</h3>
                    <div>Vizualizado: 3 horas atrás</div>
                </HeaderInfo>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton>
                    <VerticalItens />
                </IconButton>
            </Header>
            <MessagesContainer className='w-full text-gray-700'>
                {Messages.map(message =>
                    <Message
                        key={message.id}
                        user={message.user}
                        message={message.message}
                        timestamp={message.timestamp}
                    />
                )}
            </MessagesContainer>
            <InputContainer className='w-full'>
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <Input placeholder="Digite uma mensagem" className='bg-white text-black' />
                <IconButton>
                    <MicIcon />
                </IconButton>
            </InputContainer>
        </Container>
    )
}

export default ChatContent

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    height: 100%;
`;

const Header = styled.div`
    position: sticky;
    background-color:white;
    z-index: 100;
    top: 0;
    display: flex;
    padding: 11px;
    height: 80px;
    align-items: center;
    border-bottom: 1px solid whitesmoke;
`;

const HeaderInfo = styled.div`
    margin-left 15px;
    flex: 1;
    >h3{
        margin-bottom: 3px;
    }
    >div{
        font-size: 14px;
        color: gray;
    }
`;

const InputContainer = styled.form`
    display: flex;
    align-items: center;
    padding: 10px;
    position: sticky;
    bottom: 0;
    background-color: #f0f0f0;
    z-index: 100;
`;

const Input = styled.input`
    border:none;
    flex: 1;
    outline: 0;
    border-radius: 30px;
    padding: 20px;
    margin-left: 15px;
    margin-right: 15px;
`;

const MessagesContainer = styled.div`
    padding: 20px;
    background-color: #e5ded8;
    flex: 1;
`;