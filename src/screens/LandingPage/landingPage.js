import React, { useEffect, useState } from 'react';
import './landingPage.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { CardHeader } from '@mui/material';
import {useNavigate} from 'react-router-dom';

// import { makeStyles } from "@mui/styles/makeStyles";

// const useStyles = makeStyles((theme) => ({

//     cardcontent: {
//         color : 'red'
//     },
    
// }));

const LandingPage = (props) => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    // const classes = useStyles();
    const fetchInfo = async () => {
        const res = await fetch("https://panorbit.in/api/users.json");
        const val = await res.json();
        return setData(val);
    }

    useEffect(() => {
        fetchInfo();
    }, [])

    function passValue(item) {
        setIsLoading(true)
        // console.log("[item----]", item)
        localStorage.setItem("userInfo", JSON.stringify(item))
        localStorage.setItem("isUserToken", true)

        setTimeout(() => {
            setIsLoading(false)
            props.handleLogin();
        }, 1000);        
    }

    return (
        <div>
            <section className='wave'>

            
            {isLoading ? <div className='loading'>Loading..</div> : 

                <div className='card'>

                    <Card sx={{ width: 700, height: 500, borderRadius : '30px' }}>

                        <CardContent sx = {{backgroundColor : "#f6f6f6"}}>
                            <Typography sx={{ fontSize: 36, fontWeight: 'bold', textAlign: 'center',  }} color="text.secondary" gutterBottom>
                                Select an Account
                            </Typography>
                        </CardContent>


                        <CardContent sx={{ height: '350px', overflowY : 'auto' }}>

                            {data && data?.users.map((user, index) => {
                                return (
                                    <div key={index} onClick={() => { passValue(user) }} >
                                        <div className='displaying-accounts'>
                                            <div className='displaying-profile-picture'>
                                                <Avatar src={user.profilepicture} />
                                            </div>
                                            <div className='displaying-profile-name'>
                                                <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                                                    {user.name}
                                                </Typography>
                                            </div>
                                        </div>
                                        <Divider />
                                    </div>
                                )

                            })}


                           
                        </CardContent>
                    </Card>
                    
                </div> }
            </section>
            
        </div>
    )

}

export default LandingPage