import { Grid } from '@mui/material';
import PageContainer from '../../../src/components/container/PageContainer';

import PaymentGateways from '../../components/addon/Purchased';
import NotPurchased from '@/components/addon/NotPurchased';



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



        <Grid item xs={12}>
          <PaymentGateways />
        </Grid>


      </Grid>
    </PageContainer>)
}
