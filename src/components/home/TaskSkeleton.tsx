import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Box, CardContent, Grid, Typography } from "@mui/material";


import { uniqueId } from 'lodash';
const CardSkeleton = () => {
  return (
    <>
    
    <Grid item xs={12} sm={3} lg={4} key={uniqueId()}>
    <Box 
    bgcolor={"#fff"} 
    
    textAlign="center">
      <CardContent>
      
          <Typography align="left" fontSize={'2.2rem'}
          // color={topcard.bgcolor + ".main"}
          mt={1}
          variant="subtitle1"
          fontWeight={600}
        >
        <Skeleton circle={true} height={50} width={50} />
        </Typography>
        <Typography align="left"
        color={'#000'}
        fontSize={'1.25rem'}
          // color={topcard.bgcolor + ".main"}
          mt={1}
          variant="subtitle1"
          fontWeight={600}
        >
        <Skeleton height={20} width={150} />
        </Typography>
        <Typography fontSize={'1rem'}  align="left"
      color={'#475467'}
          // color={topcard.bgcolor + ".main"}
          mt={1}
          variant="body2"
          fontWeight={400}
        >
        {/* {task.description} */}
        <Skeleton count={3} height={15} />

        </Typography>

        <Grid display={'flex'} style={{
          margin:5
        }} justifyContent={'flex-start'} item xs={12} sm={12} lg={12} >
       <Skeleton  height={30} width={150} />
          </Grid>
        
      </CardContent>
    </Box>
    
  </Grid>

    </>
  );
};

export default CardSkeleton;
