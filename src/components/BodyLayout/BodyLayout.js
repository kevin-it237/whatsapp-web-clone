import React from 'react';
import LeftSide from '../LeftSide/LeftSide'
import ChatBox from '../ChatBox/ChatBox'
import Keyboard from '../Keyboard/Keyboard'
import './BodyLayout.scss'


const BodyLayout = () => (
    <div className="layoutBody">
        <div className="leftSide">
            <LeftSide />
        </div>
        <div className="rightSide">
            <ChatBox />
            <Keyboard />
        </div>
    </div>
)

export default BodyLayout;