import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Menu,
  Avatar,
  Typography,
  Divider,
  Button,
  IconButton,
} from '@mui/material';
import * as dropdownData from './data';

import { IconMail } from '@tabler/icons-react';
import { Stack } from '@mui/system';
import { useDispatch, useSelector } from '@/store';
import { useRouter } from 'next/router';
import { logout } from '@/store/slices/auth/authSlice';
import { getImage } from '@/utils/getimage';


const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
const  {user} =useSelector(state => state.auth)
const dispatch = useDispatch()
const router = useRouter()
const logoutUser = () => {
  dispatch(logout())
   router.push('/login')

}
console.log(user);

const handleHelpButtonClick = () => {
  if (typeof window !== 'undefined') {
    // Check if the window object is available (to prevent issues during server-side rendering)
    //@ts-ignore
    if (window.$crisp) {
      handleClose2()
      // If the Crisp API is available
          //@ts-ignore

      window.$crisp.push(['do', 'chat:open']);

      // window.$crisp.push(['do', 'chat:open']); // Trigger the chat window to open
    }
  }
};
  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === 'object' && {
            color: 'primary.main',
          }),
        }}
        onClick={handleClick2}
      >
        <Avatar
          src={user?.avater?getImage(user?.avater):"/images/profile/user-1.jpg"}
          alt={'ProfileImg'}
          sx={{
            width: 50,
            height: 50,
          }}
        />
      </IconButton>
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        sx={{
          '& .MuiMenu-paper': {
            width: '360px',
            p: 4,
          },
        }}
      >
        <Typography variant="h5">User Profile</Typography>
        <Stack direction="row" py={3} spacing={2} alignItems="center">
        <Avatar src={"/images/profile/user-1.jpg"} alt={"ProfileImg"} sx={{ width: 95, height: 95 }} />
          <Box>
            <Typography variant="subtitle2" color="textPrimary" fontWeight={600}>
{user?.name}
            </Typography>
           

          </Box>
        </Stack>
        <Divider />
        {dropdownData.profile.map((profile) => (
          <Box key={profile.title}>
            <Box sx={{ py: 2, px: 0 }} className="hover-text-primary">
              {
                profile.href ==='/get-help'? 
                <Stack style={{
                  cursor:'pointer'
                }} onClick={handleHelpButtonClick}  direction="row" spacing={2}>
                  <Box 
                    width="30px"
                    height="30px"
                    // bgcolor="primary.light"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Avatar
                      src={profile.icon}
                      alt={profile.icon}
                      sx={{
                        // width: 24,
                        // height: 24,
                        borderRadius: 0,
                        background:'unset'
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      fontWeight={600}
                      color="textPrimary"
                      className="text-hover"
                      noWrap
                      sx={{
                        width: '240px',
                      }}
                    >
                      {profile.title}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      sx={{
                        width: '240px',
                      }}
                      noWrap
                    >
                      {profile.subtitle}
                    </Typography>
                  </Box>
                </Stack>
              : <Link href={profile.href}>
                <Stack direction="row" spacing={2}>
                  <Box
                    width="30px"
                    height="30px"
                    // bgcolor="primary.light"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Avatar
                      src={profile.icon}
                      alt={profile.icon}
                      sx={{
                        // width: 24,
                        // height: 24,
                        borderRadius: 0,
                        background:'unset'
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      fontWeight={600}
                      color="textPrimary"
                      className="text-hover"
                      noWrap
                      sx={{
                        width: '240px',
                      }}
                    >
                      {profile.title}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      sx={{
                        width: '240px',
                      }}
                      noWrap
                    >
                      {profile.subtitle}
                    </Typography>
                  </Box>
                </Stack>
              </Link>
              }
            
            </Box>
          </Box>
        ))}
        <Box mt={2}>
          {
            !user?.nurgePlus? <Box bgcolor="primary.light" p={3} mb={3} overflow="hidden" position="relative">
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography variant="h5" mb={2}>
                 Unlock all <br/> Prompts
                </Typography>
                <Button style={{
                  zIndex:999999
                }} onClick={()=> window.open('https://www.neurge.com/products/neurge-plus' , '_blank')}  variant="contained" color="primary">
Get Neurge Plus
                </Button>
              </Box>
              <img src={"/images/backgrounds/setting.png"} alt="unlimited" className="signup-bg"></img>
            </Box>
          </Box>:null
          }
         

          <Button 
          variant="contained"
           color="primary" onClick={logoutUser} fullWidth>
            <Typography fontWeight={'bold'}>

            Logout
            </Typography>
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
