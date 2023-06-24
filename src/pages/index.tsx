import React from "react";
import { Box, Grid } from "@mui/material";
import PageContainer from "../components/container/PageContainer";

import TopCards from "../components/home/Tasks";


const Modern = () => {
  return (
    <PageContainer>
      <Box>
        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={12} lg={12}>
            <TopCards />
          </Grid>

        </Grid>

      </Box>
    </PageContainer>
  );
};

export default Modern;
