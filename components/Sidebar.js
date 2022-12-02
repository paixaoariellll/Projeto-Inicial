import styled from 'styled-components';
import { Avatar, IconButton } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import VerticalItens from './DropdownHeader';
import SearchIcon from '@mui/icons-material/Search';
import chat from '../data/chats.json';
import Chat from './Chat';
import { auth, database } from '../firebase';
import * as EmailValidator from 'email-validator';
import { useAuthState } from 'react-firebase-hooks/auth';

const Sidebar = () => {
    const user = useAuthState(auth);
    const createChat = () => {
        const input = prompt('Por favor, digite o nome do cliente que deseja conversar');
        if (!input) return null;
        if (EmailValidator.validate(input)) {
            database.collection('chats').add({
                users: [user.email, input],
            })
        }
    };
    return (
        <Container className='sidebar'>
            <Header>
                <UserAvatar onClick={() => auth.signOut()} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <IconsGroup>
                    <IconButton>
                        <MessageIcon onClick={createChat} />
                    </IconButton>
                    <VerticalItens />
                </IconsGroup>
            </Header>
            <SearchChat >
                <SearchBar>
                    <SearchIcon />
                    <SearchInput />
                </SearchBar>
            </SearchChat>
            {chat.map(chat => (
                <Chat
                    latestMessage={chat.latestMessage}
                    name={chat.name}
                    timestamp={chat.timestamp}
                    photoURL={chat.photoURL}
                />
            ))}
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    backgroud: #ffffff;
    min-width: 320px;
    max-width: 450px;
    height: 100%;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    postition: sticky;
    top: 0;
    left: 0;
    width: 100%;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid whitesmoke;
    padding: 15px;
    height: 80px;
`;

const UserAvatar = styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity:0.8;    
    }
`;

const IconsGroup = styled.div`
`;

const SearchChat = styled.div`
    background-color: #f6f6f6;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding: 20px;
`;

const SearchBar = styled.div`
    display: flex;
    padding: 5px;
    border-radius: 10px;
    border-bottom: 1px solid #ededed;
    color: #000;
    background-color: #fff;
`;

const SearchInput = styled.div`
    width: 100%;
    border: none;
`;

const CreateChat = styled.div`

`;