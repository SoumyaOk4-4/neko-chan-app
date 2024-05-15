import React from 'react';
import HomeIcon from '../assets/pictures/icons/HomeIcon.png';
import ProfileIcon from '../assets/pictures/icons/ProfileIcon.png';
import AddContent from '../assets/pictures/icons/AddContent.png';

const Navbar = () => {
    return (
        <ul className="navbar" type='none'>
            <li>
                <a href="https://neko-chan-senpai.netlify.app/" className="nav-item">
                    <img src={HomeIcon} alt="Home" />
                </a>
            </li>
            <li className='addcontent'>
                <a href="https://neko-chan-senpai.netlify.app/" className="nav-item">
                    <img src={AddContent} alt="Add Post" />
                </a>
            </li>
            <li>
                <a href="https://neko-chan-senpai.netlify.app/" className="nav-item">
                    <img src={ProfileIcon} alt="Profile" />
                </a>
            </li>
        </ul>
    );
}

export default Navbar;