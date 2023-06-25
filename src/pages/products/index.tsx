import { Grid } from '@mui/material';
import PageContainer from '../../../src/components/container/PageContainer';


import FriendCard from '../../../src/components/widgets/cards/FriendCard';



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
        <FriendCard />
      </Grid>
    
     
    </Grid>
    </PageContainer>
  )
}
