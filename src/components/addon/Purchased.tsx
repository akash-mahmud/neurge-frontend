import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography,  Box, Button, Chip, CardContent, Divider, Grid } from '@mui/material';

import BlankCard from '@/components/shared/BlankCard';
import { useGetUserAddonsQuery } from '@/graphql/generated/schema';

import router, { useRouter } from 'next/router';
import NotPurchased from './NotPurchased';
import Image from 'next/image'
import { getImage } from '@/utils/getimage';
import { Spin } from 'antd';
import AddonSkeleton from './AddonSkeleton';


const PaymentGateways = () => {
  // chart color
  const theme = useTheme();


  const { data: purchasedData , loading } = useGetUserAddonsQuery()
const router = useRouter()
  return (
    <Spin spinning={loading}>

    <Grid container spacing={3}>
      {
        loading?  <>
        {[...Array(8)].map((_, index) => (
          <AddonSkeleton key={index} />
        ))}
  
      </>:<>
      {purchasedData?.getUserAddons?.map((addon, index) => (
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
                <Image src={getImage(addon.img) as string}  alt="img" width={252} height={276}/>
                </Typography>
                <Box position={'absolute'} right={6} top={6}>

                  <Typography >
                    <Chip  style={{
                backgroundColor:'rgb(18, 183, 106)', 
                color:'white'
              }} variant='filled' label="Purchased" />
                  </Typography>
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
                <Button size="large" variant="text" color='info' onClick={() => router.push(`/addon/${addon.id}`)} >
                  Browse content                </Button>

              </Stack>

            </CardContent>
          </BlankCard>
        </Grid>
      ))}
      </>
      }
     
                  <NotPurchased/>

    </Grid>
    </Spin>
  );
};

export default PaymentGateways;


