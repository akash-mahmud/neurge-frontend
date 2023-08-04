import PageContainer from '@/components/container/PageContainer';
import TaskDetail from '@/components/taskDetail';
import SideSection from '@/components/taskDetail/SideSection';
import ProductDesc from '@/components/taskDetail/ProductDesc';
import ProductRelated from '@/components/taskDetail/ProductRelated';
import ChildCard from '@/components/shared/ChildCard';
import { Grid } from '@mui/material';
import { useTaskQuery } from '@/graphql/generated/schema';
import { useRouter } from 'next/router';
import Breadcrumb from '@/layouts/full/shared/breadcrumb/Breadcrumb';
import { Spin } from 'antd';




const EcommerceDetail = () => {
  const router = useRouter()
  const {data , loading} = useTaskQuery({
    variables:{
      where:{
        id:router.query.slug as string
      }
    }
  })
  const BCrumb = [
    {
      to: '/',
      title: 'Home',
    },
    {
      title: 'Tasks',
      to: '/',
    },
    {
      title: data?.task?.category?.name,
      to: `/?category=${data?.task?.categoryId}`,

    },
  ];
  return (
    <PageContainer >
      <Spin spinning={loading}>

            <Breadcrumb  items={BCrumb} />

      <Grid container spacing={3} >
        <Grid item xs={12} sm={12} lg={12}>
          <ChildCard>
            {/* ------------------------------------------- */}
            {/* Carousel */}
            {/* ------------------------------------------- */}
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} lg={11}>
              <TaskDetail task={data}/>

              </Grid>
              <Grid item xs={12} sm={12} lg={1}>
              <SideSection />

              </Grid>
            </Grid>
          </ChildCard>
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <ProductDesc task={data} />
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <ProductRelated categoryId ={data?.task?.categoryId}/>
        </Grid>
      </Grid>
      </Spin>
    </PageContainer>
  );
};

export default EcommerceDetail;
