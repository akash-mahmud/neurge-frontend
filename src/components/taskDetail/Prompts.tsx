import React from 'react';
import { CardContent, Typography, Grid, IconButton, Divider, Avatar, Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Stack } from '@mui/system';
import ReactMarkdown from 'react-markdown' 
import copy from 'copy-to-clipboard';

import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
} from '@tabler/icons-react';
import { CopyAll } from '@mui/icons-material';
import { Prompt } from '@/graphql/generated/schema';
import BlankCard from '../shared/BlankCard';
import { notification } from 'antd';

const SocialIcons = [
  {
    name: 'Facebook',
    icon: <IconBrandFacebook size="18" color="#1877F2" />,
  },
  {
    name: 'Instagram',
    icon: <IconBrandInstagram size="18" color="#D7336D" />,
  },
  {
    name: 'Github',
    icon: <IconBrandGithub size="18" color="#006097" />,
  },
  {
    name: 'Twitter',
    icon: <IconBrandTwitter size="18" color="#1C9CEA" />,
  },
];

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

const Prompts = ({prompts}:{
  prompts:{ __typename?: "Prompt" | undefined; description: string; id: string; name: string; }[]| undefined|null
}) => {
  const theme = useTheme();
  const formatStringWithBrackets = (text:string) => {
    // Use regex to find sentences starting with square brackets []
    const regex = /\[.*?\]/g;
    const matches = text.match(regex);
    const parts = text.split(regex);

    // If no matches found, return the original text
    if (!matches) {
      return text;
    }
  
    // Replace square brackets with <span> tags
  //   const formattedText = text.replace(regex, (match) => `<span style=color:'#6CE9A6'
  //   >${match}</span>`);
  // console.log(formattedText);
  return (
    <span>
      {parts.map((part:any, index:any) => (
        <React.Fragment key={index}>
          {index > 0 && <span  className="green-bigger" style={{
            color:'#6CE9A6',
          }}>{matches[index - 1]}</span>}
          {part}
        </React.Fragment>
      ))}
    </span>
  );
    // return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };
  return (
    <Grid container spacing={3} alignItems={'center'}>
      {prompts?.map((prompt, index) => (
        <Grid item xs={12} sm={12} key={index}>
          <BlankCard>
          <Box
              p={2}
              py={1}
              textAlign={'center'}
              sx={{
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.05)' : '#1d2939',
                borderEndStartRadius:0,
                borderEndEndRadius:0
              }}
            >
             <Grid container flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} alignContent={'center'}>
<Grid item >
<Typography variant="h5" color={"#fff"}>{prompt.name}</Typography>

</Grid>
<Grid item><Button onClick={()=> { 
  copy(prompt.description);
  notification.success({
    message:'Prompt copied to clipboard',
    placement:'top'
  })


}}><CopyAll/> Copy</Button></Grid>
             </Grid>
            </Box>

            <CardContent sx={{
              backgroundColor:'#111828'
            }}>
              <Stack direction={'column'} gap={2} >
                <Box  color={'#fff'}>
                  <div style={{
                                fontSize:'1rem',
                                color:'#d0d5dd'

                  }}>
                  {formatStringWithBrackets(prompt.description)}

                  </div>
                {/* <ReactMarkdown>{formatStringWithBrackets(prompt.description)}</ReactMarkdown> */}
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

export default Prompts;