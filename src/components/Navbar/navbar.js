import React, { useState, useEffect } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import './navbar.css';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import UserDropdown from '../UserDropdown';
import { Widget } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import zIndex from '@mui/material/styles/zIndex';

const Navbar = (props) => {
    const navigate = useNavigate();
    const [section, setSection] = useState("Profile")


    const SidebarData = [

        {
            title: 'Profile',
            path: '/app/profile',

        },
        {
            title: 'Posts',
            path: '/app/posts',

        },
        {
            title: 'Gallery',
            path: '/app/gallery',

        },
        {
            title: 'Todo',
            path: '/app/todo',

        },
    ];

    const movePage = (item) => {

        setSection(item.title)
        navigate(item.path)
    }

    const handleNewUserMessage = (newMessage) => {
    };

    const getCustomLauncher = (handleToggle) => (
        <div
            onClick={handleToggle}
            style={{
                backgroundColor: "#3d57c8",
                position: "relative",
                width: "200px",
                top: "20px",
                cursor: 'pointer',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
            }}
        >
            <div
                style={{
                    color: "white",
                    fontSize: '15px',
                    fontWeight: 'normal',
                    textAlign: "initial",
                    padding: '12px',
                    
                }}
            >
                Chats
            </div>
        </div>
    );

    return (
        <>
            <div className='navbar'>
                <div className='nav-section'>
                    {section}
                </div>
                <div>
                    <UserDropdown handleLogout={props.handleLogout} />
                </div>
            </div>
            <nav className='nav-menu '>
                <div className='nav-listing-menu active'>
                    {SidebarData.map((item, index) => {
                        return (
                            <div className={`nav-title ${section === item.title ? 'active' : ''}`} onClick={() => { movePage(item) }}>

                                {item.title}


                                <Divider sx={{ backgroundColor: 'lightgrey' }} />

                            </div>
                        );
                    })}

                </div>
            </nav>
            <div className='nav-outlet'>
                <Outlet />
            </div>
            <div >
                <Widget
                    handleNewUserMessage={handleNewUserMessage}
                    launcher={(handleToggle) =>

                        getCustomLauncher(handleToggle)
                    }
                    title="Chat"
                    subtitle="Chat with us"
                    launcherOpenLabel="Opened"
                    launcherCloseLabel="closed"
                />
            </div>
        </>
    );
}

export default Navbar;