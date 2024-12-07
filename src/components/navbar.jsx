import React from 'react';
import ProfileIcon from '../assets/pictures/icons/ProfileIcon.png';

const Navbar = () => {
    return (
        <ul className="navbar" type='none'>
            <li> {/* may change in future */}
                <a href="https://neko-chan-backend-production.up.railway.app/profile" className="nav-item">
                    <img src={ProfileIcon} alt="Profile" />
                </a>
            </li>
        </ul>
    );
}

export default Navbar;
