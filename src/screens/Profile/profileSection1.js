import React from "react";
import './profileSection1.css'
import Avatar from '@mui/material/Avatar';
import { Divider } from "@mui/material";

const ProfileSection1 = (props) => {
    console.log('[props====>1]', props?.userData)
    return (
        <div className="profile-section-1-container">
            <div className="profile-section-1-avatar">
                <Avatar src={props?.userData?.profilepicture} sx={{ height: '300px', width: '300px' }} />
            </div>
            <div className='profile-section-1-name'>
                {props?.userData?.name}
            </div>


        <div className="profile-section-1-details-wrapper">
            <div >
                <table>
                    <td className="profile-section-1-details-heaading">
                        Username
                    </td>
                    <td className="profile-section-1-details-semicolon">
                        :
                    </td>
                    <td className="profile-section-1-details-answer">
                        {props?.userData?.username}
                    </td>
                </table>

                <table>
                    <td className="profile-section-1-details-heaading">
                        e-mail
                    </td>
                    <td className="profile-section-1-details-semicolon">
                        :
                    </td>
                    <td className="profile-section-1-details-answer">
                        {props?.userData?.email}
                    </td>
                </table>

                <table>
                    <td className="profile-section-1-details-heaading">
                        Phone
                    </td>
                    <td className="profile-section-1-details-semicolon">
                        :
                    </td>
                    <td className="profile-section-1-details-answer">
                        {props?.userData?.phone}
                    </td>
                </table>

                <table>
                    <td className="profile-section-1-details-heaading">
                        Website
                    </td>
                    <td className="profile-section-1-details-semicolon">
                        :
                    </td>
                    <td className="profile-section-1-details-answer">
                        {props?.userData?.website}
                    </td>
                </table>
            </div>
            </div>

            <Divider color="#c4c4c4"/>

            <div className="profile-section-1-details-company">
                Company
            </div>

            <div className="profile-section-1-details-wrapper">
            <div>
                <table>
                    <td className="profile-section-1-details-heaading">
                        Name
                    </td>
                    <td className=".profile-section-1-details-semicolon">
                        :
                    </td>
                    <td className="profile-section-1-details-answer">
                        {props?.userData?.company?.name}
                    </td>
                </table>

                <table>
                    <td className="profile-section-1-details-heaading">
                        catchphrase
                    </td>
                    <td className=".profile-section-1-details-semicolon">
                        :
                    </td>
                    <td className="profile-section-1-details-answer">
                        {props?.userData?.company?.catchPhrase}
                    </td>
                </table>

                <table>
                    <td className="profile-section-1-details-heaading">
                        bs
                    </td>
                    <td className=".profile-section-1-details-semicolon">
                        :
                    </td>
                    <td className="profile-section-1-details-answer">
                        {props?.userData?.company?.bs}
                    </td>
                </table>
            </div>
            </div>

        </div>
    )
}

export default ProfileSection1;