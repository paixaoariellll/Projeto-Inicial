import styled from "styled-components"
import moment from "moment";

const Message = ({ user, message, timestamp }) => {
    const loginMail = "gabriel@gmail.com"
    const MessageType = user === loginMail ? MyMessage : FrdMessage;
    return (
        <Container>
            {
                (user === loginMail) &&
                <MessageTail>
                </MessageTail>
            }
            <MessageType>
                {message}
                <Timestamp>
                    {moment(timestamp).format('LT')}
                </Timestamp>
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
    margin-top: -8px
`;

const Timestamp = styled.span`
    color: gray;
    padding: 10px;
    font-size: 9px;
    position: absolute;
    right: 0;
    bottom: 0;
    font-weight: bold;
    text-align: right;
`;
