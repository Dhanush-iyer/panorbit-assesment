import React, {useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import './userDropdown.css';
import Divider from '@mui/material/Divider';

const UserDropdown = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [user, setUser] = useState()
    const [data, setData] = useState();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };


      //for listing the user
      const fetchInfo = async () => {
        const res = await fetch("https://panorbit.in/api/users.json");
        const val = await res.json();
        return setData(val);
    }

    useEffect(() => {
        fetchInfo();
    }, [])

    //for displaying the user
      useEffect(()=>{
        let userInfo = localStorage.getItem("userInfo");
        setUser(JSON.parse(userInfo));             
    },[])

      
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
    return(
        <>

<div className='nav-avatar-name-wrapper' onClick={handleClick}>
                    <div className='nav-avatar'>
                        <Avatar src = {user?.profilepicture} sx={{ width: 56, height: 56 }}/>

                    </div>
                    <div className='nav-name'>
                        {user?.name}
                        
                    </div>
                </div>
              <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{borderRadius : '50px'}}
      >
        <div className='user-drop-down-avatar-wrapper'>
            <div className='user-drop-down-avatar'>
            <Avatar sx={{ width: 150, height: 150 }} src = {user?.profilepicture}/>
            </div>

            <div className='user-drop-down-name'>
                {user?.name}
            </div>

            <div className='user-drop-down-email'>
                {user?.email}
            </div>

            <div className='user-drop-down-listingUser'>
            {data && data?.users.map((user, index) => {
                                return (
                                    <div key={index}  >
                                        <div className='user-drop-down-displaying-accounts'>
                                            <div className='user-drop-down-displaying-profile-picture'>
                                                <Avatar src={user.profilepicture} />
                                            </div>
                                            <div className='user-drop-down-displaying-profile-name'>
                                                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                                    {user.name}
                                                </Typography>
                                            </div>
                                        </div>
                                        <Divider />
                                    </div>
                                )

                            })}
            </div>


            <div className='user-drop-down-signout-wrapper'>
            <button className='user-drop-down-signout-button' onClick={props.handleLogout}>
                SignOut
            </button>
            </div>

        </div>
      </Popover>
        </>
    )

}

export default UserDropdown;