import styled from 'styled-components';
import { Avatar, IconButton } from '@mui/material';

const Sidebar = () => {
    return (
        <Container className='sidebar'>
            <Header>
                <UserAvatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <IconsGroup>
                    <IconButton>
                        <img src="/story.svg"></img>
                    </IconButton>
                </IconsGroup>
            </Header>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    backgroud: #fff;
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