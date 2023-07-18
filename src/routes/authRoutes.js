import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from "../screens/LandingPage/landingPage.js";
import { useAuth } from "../hooks/useAuth.js";
import Todos from "../screens/Todos/todos.js";
import Posts from "../screens/Posts/posts.js";
import Profile from "../screens/Profile/profile.js";
import Gallery from "../screens/Gallery/gallery.js";
import Navbar from "../components/Navbar/navbar.js";

const AuthRoutes = () => {
    const { isLoggedIn, handleLogin, handleLogout } = useAuth();
    return (
        <>

            <Routes>
            //Public Routes
                {!isLoggedIn && (<>
                    <Route index path='/' element={<LandingPage handleLogin={handleLogin} />} />
                </>)
                }

            //Private Routes
                {isLoggedIn && (<>
                    <Route path = '/app' element={<Navbar handleLogout={handleLogout}/>} >
                    <Route path='/app/profile' element={<Profile />} />
                        <Route path='/app/gallery' element={<Gallery />} />
                        <Route path='/app/todo' element={<Todos />} />
                        <Route path='/app/posts' element={<Posts />} />                                           
                    </Route>
                </>)}


                <Route path="*" element={<Navigate to={isLoggedIn ? '/app/profile' : '/'} />} />
            </Routes>
        </>

    )

}

export default AuthRoutes;
