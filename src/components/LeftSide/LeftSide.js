import React from 'react';
import MaterialIcon from 'material-icons-react';
import ContactItem from './ContactItem'
import {contacts} from '../../data'
import './LeftSide.scss'


const LeftSide = () => (
    <div className="leftSideContent">
        <div className="alertBox">
            <div className="alertLogo">
                <MaterialIcon icon="notifications_off" size={42} color="white" />
            </div>
            <div className="alertText">
                <h6>Get notified of new messages</h6>
                <p>Turn on desktop notifications</p>
            </div>
        </div>
        <div className="searchBox">
            <input type="text" placeholder="Search or start chat" />
            <MaterialIcon icon="search" size={21} color="#919191" />
        </div>
        <div className="contactList">
            {contacts.map(contact => (
                <ContactItem key={contact.id} contact={contact} />
            ))}
        </div>
    </div>
)

export default LeftSide;