import PageContainer from '@/components/container/PageContainer';
import TaskDetail from '@/components/taskDetail';
import SideSection from '@/components/taskDetail/SideSection';
import ProductDesc from '@/components/taskDetail/ProductDesc';
import ProductRelated from '@/components/taskDetail/ProductRelated';
import ChildCard from '@/components/shared/ChildCard';
import Breadcrumb from '@/layouts/full/shared/breadcrumb/Breadcrumb';
import { Grid } from '@mui/material';


const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Shop',
    to: '/apps/ecommerce/shop',
  },
  {
    title: 'detail',
  },
];

const EcommerceDetail = () => {
  return (
    <PageContainer>
      <Grid container spacing={3} sx={{ maxWidth: { lg: '1055px', xl: '1200px' } }}>
        <Grid item xs={12} sm={12} lg={12}>
          <ChildCard>
            {/* ------------------------------------------- */}
            {/* Carousel */}
            {/* ------------------------------------------- */}
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} lg={8}>
              <TaskDetail />

              </Grid>
              <Grid item xs={12} sm={12} lg={4}>
              <SideSection />

              </Grid>
            </Grid>
          </ChildCard>
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <ProductDesc />
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <ProductRelated />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default EcommerceDetail;
