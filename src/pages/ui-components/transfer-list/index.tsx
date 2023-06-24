import { Grid } from '@mui/material';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ParentCard from '../../../components/shared/ParentCard';
import ChildCard from '../../../components/shared/ChildCard';
import BasicTransferList from '../../../components/ui-components/transfer-list/BasicTransferList';
import EnhancedTransferList from '../../../components/ui-components/transfer-list/EnhancedTransferList';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Transfer List',
  },
];

const MuiTransferList = () => (
  <PageContainer>
    {/* breadcrumb */}
    <Breadcrumb title="Transfer List" items={BCrumb} />
    {/* end breadcrumb */}

    <ParentCard title="Transfer List">
      <Grid container spacing={3}>
        <Grid item xs={12} display="flex" alignItems="stretch">
          <ChildCard title="Basic">
            <BasicTransferList />
          </ChildCard>
        </Grid>
        <Grid item xs={12} display="flex" alignItems="stretch">
          <ChildCard title="Enhanced">
            <EnhancedTransferList />
          </ChildCard>
        </Grid>
      </Grid>
    </ParentCard>
  </PageContainer>
);
export default MuiTransferList;
