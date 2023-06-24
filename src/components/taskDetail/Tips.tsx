import React from 'react';
import { CardContent, Typography, Grid, IconButton, Divider, Avatar, Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Stack } from '@mui/system';
import ReactMarkdown from 'react-markdown' 

import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
} from '@tabler/icons-react';
import { CopyAll, Info } from '@mui/icons-material';
import BlankCard from '../shared/BlankCard';



const profileCard = [
  {
    name: 'Andrew Grant',
    role: 'Technology Director',
    avatar: "/images/profile/user-1.jpg",
  },
  {
    name: 'Leo Pratt',
    role: 'Telecom Analyst',
    avatar: "/images/profile/user-2.jpg",
  },
  {
    name: 'Charles Nunez',
    role: 'Environmental Specialist',
    avatar: "/images/profile/user-3.jpg",
  },
];

const Tips = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      {profileCard.map((card, index) => (
        <Grid item xs={12} sm={12} key={index}>
          <BlankCard>
         

            <CardContent >
              <Stack direction={'column'} gap={2} >
                <Box display={'flex'} alignItems={'center'} flexDirection={'row'}>
                <Info style={{
                    marginRight:10
                }}/>
                    <Typography>
                     {card.name}
                    </Typography>
             
                </Box>
              </Stack>
            </CardContent>
            <Divider />
         
          </BlankCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default Tips;
