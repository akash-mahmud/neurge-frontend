import Image from "next/image";
import { Box, CardContent, Chip, Grid, Typography } from "@mui/material";

import icon1 from "public/images/svgs/icon-connect.svg";
import icon2 from "public/images/svgs/icon-user-male.svg";
import icon3 from "public/images/svgs/icon-briefcase.svg";
import icon4 from "public/images/svgs/icon-mailbox.svg";
import icon5 from "public/images/svgs/icon-favorites.svg";
import icon6 from "public/images/svgs/icon-speech-bubble.svg";
import Link from "next/link";

export const topcards = [
  {
    icon: icon2,
    imoji: '🙂',
    title: "In this prompt you will learn how to use chatgpt",
    digits: "96",
    bgcolor: "primary",
    tags:['ai', 'marketing', 'chatgpt' ]
  },

  {
    icon: icon2,
    imoji: '🙂',
    title: "In this prompt you will learn how to use chatgpt",
    digits: "96",
    bgcolor: "primary",
    tags:['ai', 'marketing', 'chatgpt' ]
  },
  {
    icon: icon2,
    imoji: '🙂',
    title: "In this prompt you will learn how to use chatgpt",
    digits: "96",
    bgcolor: "primary",
    tags:['ai', 'marketing', 'chatgpt' ]
  },
  {
    icon: icon2,
    imoji: '🙂',
    title: "In this prompt you will learn how to use chatgpt",
    digits: "96",
    bgcolor: "primary",
    tags:['ai', 'marketing', 'chatgpt' ]
  },
];

const Tasks = () => {
  return (
    <Grid container spacing={3} mt={3}>
      {topcards.map((topcard, i) => (
        <Grid item xs={12} sm={4} lg={3} key={i}>
          <Link href='/task/slug'>
          <Box bgcolor={
            topcard.bgcolor + ".light"} 
          
          textAlign="center">
            <CardContent>
              {/* <Image src={topcard.icon} alt={"topcard.icon"} width="50" /> */}
              {/* <Typography
                color={topcard.bgcolor + ".main"}
                mt={1}
                variant="h1"
                fontWeight={600}
              >
                {topcard.imoji}
              </Typography> */}
              <Typography align="left"
                color={topcard.bgcolor + ".main"}
                mt={1}
                variant="subtitle1"
                fontWeight={600}
              >
               {topcard.imoji} {topcard.title}
              </Typography>
              <Grid display={'flex'} style={{
                margin:5
              }} justifyContent={'flex-start'} item xs={12} sm={12} lg={12} key={i}>
              {
                topcard.tags.map((tag)=> (
                    
                  <Chip style={{
                    marginRight:5
                  }}
                  // color={item?.chipColor}
                  variant={ "filled"}
                  size="small"
                  label={tag}
                  />
                  ))
                }
                </Grid>
              
            </CardContent>
          </Box>
          </Link>
          
        </Grid>
      ))}
    </Grid>
  );
};

export default Tasks;
