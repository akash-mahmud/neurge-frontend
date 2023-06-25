import React from "react";
import { Box, Chip, Grid } from "@mui/material";
import PageContainer from "../components/container/PageContainer";

import TopCards from "../components/home/Tasks";
import { useCategoriesQuery } from "@/graphql/generated/schema";


const Modern = () => {
  const {data:categories , error, loading} = useCategoriesQuery()
  return (
    <PageContainer>
      <Box>
        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={12} lg={12}>
          
          <Chip style={{
                    margin:5,
                    cursor:'pointer'
                  }}
                  
                  variant={ "filled"}
                  // size="small"
                  label={'All'}
                  />
                  
                    
                    {
              categories?.categories?.map((category) => (
                <Chip key={category.id} style={{
                  margin:5,
                  cursor:'pointer'
                }}
                
                variant={ "filled"}
                // size="small"
                label={category.name}
                />
                
                  
              ))
            }  
          </Grid>
          <Grid item xs={12} lg={12}>
            <TopCards />
          </Grid>

        </Grid>

      </Box>
    </PageContainer>
  );
};

export default Modern;
