import React, {useEffect, useState}from "react";
import ProfileSection1 from "./profileSection1.js";
import ProfileSection2 from "./profileSection2.js";
import './profile.css'

const Profile = () => {
    const [user, setUser] = useState()

    useEffect(()=>{
        let userInfo = localStorage.getItem("userInfo");
        setUser(JSON.parse(userInfo));             
    },[])

    return (
        <div className='profile'>
            <div  className='profile-wrapper' >
                <div style={{width : '40%'}}>
                <ProfileSection1 userData = {user}/>
                </div>
                <div className="profile-line-wrapper">

                <div className="profile-line" />
                </div>

                <div style={{width : '60%'}}>

                <ProfileSection2 userData = {user}/>
                </div>
            </div>
            
        </div>
    )
}

export default Profile;