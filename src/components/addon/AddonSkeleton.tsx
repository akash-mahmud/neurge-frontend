import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Box,  CardContent,  Divider, Grid, Stack, Typography } from "@mui/material";


import { uniqueId } from 'lodash';

import BlankCard from '../shared/BlankCard';
const AddonSkeleton = () => {
  return (
    <Grid item xs={12} sm={6} lg={3} key={uniqueId()} minHeight={302}>
    <BlankCard style={{
      height:'100%'
    }}>
      <CardContent style={{
        height:'100%'
      }}>
        {/* <Avatar src={card.avatar} sx={{ height: 80, width: 80 }}></Avatar> */}
      <Box display={'flex'} position={'relative'} >

        <Typography >
        <Skeleton height={222} width={222} />
      </Typography>
      <Box position={'absolute'} right={6} top={6}>

      <Typography >
      <Skeleton   height={30} width={85} style={{
        borderRadius:30,
       
      }}/>
      </Typography>
      </Box>
      </Box>
        <Stack direction="row" spacing={2} mt={3}>
          <Box>
          <Skeleton  height={30} width={50} />

            <Typography variant="h6" mb={1} mt={1}>
            <Skeleton height={15} width={200} count={3} />
            </Typography>
          
           
          </Box>
        </Stack>
        <Stack spacing={2} mt={3} mb={3}>
        <Skeleton  height={35} width={222} />

         
        </Stack>
      
      </CardContent>
    </BlankCard>
  </Grid>
    
  

   
  );
};

export default AddonSkeleton;
