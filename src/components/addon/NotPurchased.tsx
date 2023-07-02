import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography,  Box, Button, Chip, CardContent,  Grid } from '@mui/material';

import BlankCard from '@/components/shared/BlankCard';
import {  useGetUserNotPurchasedAddonsQuery } from '@/graphql/generated/schema';
import Image from 'next/image'


const NotPurchased = () => {
  // chart color
  const theme = useTheme();


  const { data: notpurchased } = useGetUserNotPurchasedAddonsQuery()

  return (
<>{notpurchased?.getUserNotPurchasedAddons?.map((addon, index) => (
        <Grid item xs={12} sm={6} lg={3} key={addon.id} minHeight={302}>
          <BlankCard style={{
            height: '100%'
          }}>
            <CardContent style={{
              height: '100%'
            }}>
              {/* <Avatar src={card.avatar} sx={{ height: 80, width: 80 }}></Avatar> */}
              <Box display={'flex'} position={'relative'} >

                <Typography >
                  <Image src={addon.img}  alt="img" width={252} height={276}/>
                </Typography>
                <Box position={'absolute'} right={6} top={6}>

                
                </Box>
              </Box>
              <Stack direction="row" spacing={2} mt={3}>
                <Box>
                  <Chip label="Addon" />

                  <Typography variant="h6" mb={1} mt={1}>
                    {addon.name}
                  </Typography>


                </Box>
              </Stack>
              <Stack spacing={2} mt={3} mb={3}>
                <Button size="large" variant="text" color='info' onClick={()=>    window.open(addon.purchaseUrl as string, '_blank')}>

                Buy on            </Button>

              </Stack>

            </CardContent>
          </BlankCard>
        </Grid>
      ))}</>      
  );
};

export default NotPurchased;

