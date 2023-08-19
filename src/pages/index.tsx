import React from "react";
import { Box, Chip, Grid } from "@mui/material";
import PageContainer from "../components/container/PageContainer";

import TopCards from "../components/home/Tasks";
import { useCategoriesQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import { Spin } from "antd";


const Modern = () => {
  const {data:categories , error, loading} = useCategoriesQuery()
  const router = useRouter()
  return (


    <PageContainer >
      <Box >
        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={12} lg={12} mb={1}>
          <Spin spinning={loading}>
{
  categories?.getUserCategories.length &&  categories?.getUserCategories.length > 0? <Chip style={{
    margin:5,
    cursor:'pointer'
  }}
  color={!router?.query?.category  ? 'primary':'default'}

  onClick={()=> {
    router.push({
      query: {}
    })
  }}
  variant={ "filled"}
  // size="small"
  label={'All'}
  />: null
}
         
                  
                    
                    {
              categories?.getUserCategories?.map((category) => (
                <Chip onClick={()=> {
                  router.push({
                    query: {
                      category:category.id
                    }
                  })
                }} key={category.id} style={{
                  margin:5,
                  cursor:'pointer'
                }}
                color={router?.query?.category === category?.id ? 'primary':'default'}
                variant={ "filled"}
                // size="small"
                label={category.name}
                />
                
                  
              ))
            }  
          </Spin>
          </Grid>
          <Grid paddingRight={'24px'} paddingBottom={'24px'} item xs={12} lg={12} xl={12} style={{
            backgroundColor:"#F9FAFB",
            
          }}>
            <TopCards categories={categories}/>
          </Grid>

        </Grid>

      </Box>
    </PageContainer>
  );
};

export default Modern;
