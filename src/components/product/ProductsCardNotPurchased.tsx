import { CardContent, Typography, Grid, Button, Box,  Chip, Divider } from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';
import {  MenuBook,  Task } from '@mui/icons-material';
import { IconCurrencyDollar } from '@tabler/icons-react';
import { useGetUserNotPurchasedProductsQuery, useGetUserProductsQuery } from '@/graphql/generated/schema';
import { useRouter } from 'next/router';
import BlankCard from '../shared/BlankCard';
import { getImage } from '@/utils/getimage';
import { Spin } from 'antd';
import NoProductCard from '../common/NoProductCard';
import ProductSkeleton from './ProductSkeleton';



const ProductsCardNotPurchased = () => {
  const {data , loading} = useGetUserNotPurchasedProductsQuery()
  const router = useRouter()
  return (
    
    <>
     {
      loading?  <>
      {[...Array(20)].map((_, index) => (
        <ProductSkeleton key={index} />
      ))}

    </>:<>

             {data?.getUserNotPurchasedProducts?.map((product, index) => (
               <Grid item xs={12} sm={6} lg={3} key={product.id} minHeight={302}>
                 <BlankCard style={{
                   height:'100%'
                 }}>
                   <CardContent style={{
                     height:'100%'
                   }}>
                     {/* <Avatar src={card.avatar} sx={{ height: 80, width: 80 }}></Avatar> */}
                   <Box display={'flex'} position={'relative'} >
       
                     <Typography component={Link} href={`/?category=${product.category?.id}`}>
                     <img src={getImage(product.image)} alt="img" width="100%" />
                   </Typography>
                   {/* <Box position={'absolute'} right={6} top={6}>
       
                   <Typography component={Link} href={`/?category=${product.category?.id}`}>
                     <Chip style={{
                       backgroundColor:'rgb(18, 183, 106)', 
                       color:'white'
                     }} variant='filled'  label="Purchased"/>
                   </Typography>
                   </Box> */}
                   </Box>
                     <Stack direction="row" spacing={2} mt={3}>
                       <Box>
                       <Chip style={{
                                     backgroundColor: product?.category?.colour,
                                     color:"#fff"
                                   }}   label={product.category?.name} />
       
                         <Typography variant="h6" mb={1} mt={1}>
                           {product.name}
                         </Typography>
                         <Typography variant="body1" mb={1} mt={1}>
                           {product.description}
                         
                         </Typography>
                        
                       </Box>
                     </Stack>
                     <Stack spacing={2} mt={3} mb={3}>
                       <Button  size="large" variant="text" color='info'onClick={() => window.open('https://neurge.com', '_blank')} >
                         Buy Prompts Pack
                       </Button>
                      
                     </Stack>
                     <Divider />
                     <Stack spacing={2} mt={3} mb={3}  direction="column">
                     <Typography variant="body1" mb={1} mt={1}>
                       <Box display={'flex'} alignItems={'center'}>
       
                       <MenuBook style={{
                           marginRight:'5px',
                           color:'#12b76a'
                         }}/>
                           {product.topTierPromptCount+'+'} top-tier prompts
                       </Box>
                         
                         </Typography>
                         
                         <Typography variant="body1" mb={1} mt={1}>
                         <Box display={'flex'}>
       
                         <Task style={{
                           marginRight:'5px',
                           color:'#12b76a'
                         }}/>                    {product.taskAutomateCount+'+'} tasks to automate
       
                         </Box>
                         </Typography>
                         <Typography variant="body1" mb={1} mt={1}>
                         <Box display={'flex'}>
       
                         <IconCurrencyDollar style={{
                           marginRight:'5px',
                           color:'#12b76a'
                         }}/>                    {product.moneyBackGuarantee+'+'} days money-back guarantee
       
                         </Box>
                         </Typography>
                     </Stack>
                   </CardContent>
                 </BlankCard>
               </Grid>
             ))}
         
         </>
    }      
   
    </>
  );
};

export default ProductsCardNotPurchased;
