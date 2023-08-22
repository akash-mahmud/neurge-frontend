import { Grid } from '@mui/material';
import ProductsCard from '@/components/product/ProductsCard';
import PageContainer from '@/components/container/PageContainer';
import ProductsCardNotPurchased from '@/components/product/ProductsCardNotPurchased';





const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Cards',
  },
];

export default function index() {
  return (
    <PageContainer>
   
    <Grid container spacing={3}>
      
  
      {/* <Grid item xs={12}> */}
        <ProductsCard />
     <ProductsCardNotPurchased/>
      {/* </Grid> */}

    </Grid>
    </PageContainer>
  )
}
