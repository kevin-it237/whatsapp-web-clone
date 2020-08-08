import React from 'react';
import MaterialIcon from 'material-icons-react';
import './Keyboard.scss'


const Keyboard = () => (
    <div className="keyboardLayout">
        <MaterialIcon icon="mood" size={28} color="#919191" />
        <input type="text" placeholder="Type a message" />
        <MaterialIcon icon="mic" size={28} color="#919191" />
    </div>
)

export default Keyboard;