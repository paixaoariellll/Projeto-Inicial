import styled from "styled-components"

const Message = ({ user, message, timestamp }) => {
    const loginMail = "gabriel@gmail.com"
    const MessageType = user === loginMail ? MyMessage : FrdMessage;
    return (
        <Container>
            <MessageType>
                {message}
            </MessageType>
        </Container>
    )
}

export default Message

const Container = styled.div`
    display: flex;
`;

const MessageBubble = styled.div`
    padding: 15px;
    padding-bottom: 26px;
    text-align: right;
    background-color: #fff;
    margin-bottom: 10px;
    position: relative;
`;

const MyMessage = styled(MessageBubble)`
    margin-left: auto;
    background-color: #01edf1;
    border-radius: 8px 0px 8px 8px;
`;

const FrdMessage = styled(MessageBubble)`
    text-align: left;
    background-color: #fff;
    border-radius: 0px 8px 8px 8px;
`;

const MessageTail = styled.span`
    margin-top: -4px
`;
