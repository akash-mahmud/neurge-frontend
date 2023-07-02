import PageContainer from '../../../../src/components/container/PageContainer';
import { useRouter } from 'next/router';
import { useGetUserPurchasedSingleAddonQuery } from '@/graphql/generated/schema';
import { Box } from '@mui/material';

import AddonDetailBanner from '@/components/addon/detail/AddonDetailBanner';
import BlogTable from '@/components/addon/detail/Blog/BlogTable';

const Blog = () => {
    const router = useRouter()
    const {id} = router.query
    const { data} = useGetUserPurchasedSingleAddonQuery({
     variables: {
        where:{
            id: id as string
        },
       
     }, 
     
    })
  return (
    <PageContainer>
      {/* <Breadcrumb title={data?.getUserPurchasedSingleAddon.name as string} /> */}

      <Box >
                     <AddonDetailBanner  addon = { data?.getUserPurchasedSingleAddon} /> 
      
      </Box>
    <BlogTable   addon = { data?.getUserPurchasedSingleAddon}/>
    </PageContainer>
  );
};

export default Blog;
