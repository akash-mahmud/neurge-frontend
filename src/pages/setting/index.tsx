import { Grid } from '@mui/material';

import PageContainer from '../../../src/components/container/PageContainer';
import SettingForm from '@/components/setting/SettingForm';



const FormLayouts = () => (
  <PageContainer>
    {/* breadcrumb */}
    {/* end breadcrumb */}
    
    <Grid container spacing={3}>
    
    
      <Grid item lg={12} md={12} xs={12}>
        <SettingForm />
      </Grid>
    </Grid>
  </PageContainer>
);

export default FormLayouts;
