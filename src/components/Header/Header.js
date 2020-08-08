import React from 'react';
import MaterialIcon from 'material-icons-react';
import './Header.scss'

import me from '../../assets/me.jpg'
import img1 from '../../assets/1.jpg'

const Header = () => (
    <header>
        <div className="leftHeader">
            <div className="userImage">
                <img src={me} alt="Abel Kevin Ngaleu" />
            </div>
            <div className="iconsList">
                <MaterialIcon icon="donut_large" size={23} color="#919191" />
                <MaterialIcon icon="message" size={23} color="#919191" />
                <MaterialIcon icon="more_vert" size={23} color="#919191" />
                {/* <MaterialIcon icon="attach_file" color="#919191" /> */}
            </div>
        </div>

        <div className="rightHeader">
            <div className="userInfos">
                <img src={img1} alt="" />
                <div className="infos">
                    <h5>Hermann</h5>
                    <p>Last seen today at 10.11 PM</p>
                </div>
            </div>
            <div className="iconsList">
                <MaterialIcon icon="search" size={23} color="#919191" />
                <MaterialIcon icon="attach_file" size={23} color="#919191" />
                <MaterialIcon icon="more_vert" size={23} color="#919191" />
            </div>
        </div>
    </header>
)

export default Header;