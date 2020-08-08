import React from 'react';
import styled from 'styled-components';
import MaterialIcon from 'material-icons-react';
import './ChatBox.scss'

const ChatBox = () => (
    <div className="chatboxLayout">
        <MessageBoxWrapper incoming={false} message={"I'm not at home. I will come back at 5PM."} />
        <MessageBoxWrapper incoming={true} message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} />
        <MessageBoxWrapper incoming={false} message={"Dolore eu fugiat nulla pariatur."} />
        <MessageBoxWrapper incoming={true} message={"Laboris nisi ut aliquip ex ea commodo consequat."} />
        <MessageBoxWrapper incoming={false} message={"Duis aute irure."} />
        <MessageBoxWrapper incoming={false} message={"I'm not at home. I will come back at 5PM."} />
        <MessageBoxWrapper incoming={true} message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."} />
        <MessageBoxWrapper incoming={false} message={"Duis aute irure dolor in reprehenderit in voluptate velit."} />
        <MessageBoxWrapper incoming={true} message={"Ut enim ad minim veniam consequat."} />
        <MessageBoxWrapper incoming={false} message={"Duis aute irure dolor in reprehenderit."} />
        <MessageBoxWrapper incoming={false} message={"I'm not at home. I will come back at 5PM."} />
        <MessageBoxWrapper incoming={true} message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"} />
        <MessageBoxWrapper incoming={false} message={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} />
        <MessageBoxWrapper incoming={true} message={"Ut enim ad minim veniam, quis nostrud"} />
        <MessageBoxWrapper incoming={false} message={"Duis aute irure dolor in reprehenderit in voluptate velit esse"} />
    </div>
)

const MessageBox = styled.div`
    position: relative;
    box-shadow: 0 1px .5px rgba(#000,.13);
    background-color: ${props => props.incoming ? "white" : "#DCF8C6"};
    padding: .6rem 1.1rem;
    border-radius: 8px;
    align-self: ${props => props.incoming ? "flex-start" : "flex-end"};

    display: flex;
    justify-content: flex-start;
    max-width: 65%;
    margin-bottom: 1rem;
`;

const MessageBoxWrapper = ({incoming, message}) => (
    <MessageBox incoming={incoming} className="messageBox">
        <p className="message">{message}</p>
        <MaterialIcon icon="expand_more" size={28} />
        <p className="date"><span>7:43 AM</span> {!incoming&&<MaterialIcon icon="done_all" size={17} color="#4fc3f7" />}</p>
    </MessageBox>
)

export default ChatBox;