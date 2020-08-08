import React from 'react';


const ContactItem = ({contact}) => (
    <div className="contactItem">
        <img src={contact.img} alt="" />
        <div className="contactDetails">
            <div className="title_date">
                <h4>{contact.name}</h4>
                <p>{contact.date}</p>
            </div>
            <div className="snipMsg">
                <h6>{contact.ercept}</h6>
                <p>{contact.unread}</p>
            </div>
        </div>
    </div>
)

export default ContactItem;