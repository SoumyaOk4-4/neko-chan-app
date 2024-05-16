import React from 'react';
import HomeIcon from '../assets/pictures/icons/HomeIcon.png';
import ProfileIcon from '../assets/pictures/icons/ProfileIcon.png';

const Navbar = () => {
    return (
        <ul className="navbar" type='none'>
            <li>
                <a href="https://neko-chan-backend-production.up.railway.app/" className="nav-item home-up">
                    <img src={HomeIcon} alt="Home" />
                </a>
            </li>
            <li>
                <a href="https://neko-chan-backend-production.up.railway.app/profile" className="nav-item">
                    <img src={ProfileIcon} alt="Profile" />
                </a>
            </li>
        </ul>
    );
}

export default Navbar;