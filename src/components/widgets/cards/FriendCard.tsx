import { CardContent, Typography, Grid, Button, Box, AvatarGroup, Avatar, Chip, Divider, Menu } from '@mui/material';
import { Stack } from '@mui/system';
import BlankCard from '../../shared/BlankCard';
import Link from 'next/link';
import { MeetingRoom, MenuBook, Money, MoneyOffCsredRounded, MoneyOutlined, Task } from '@mui/icons-material';
import { IconCurrencyDollar } from '@tabler/icons-react';
import { useGetUserProductsQuery } from '@/graphql/generated/schema';
import { useRouter } from 'next/router';



const FriendCard = () => {
  const {data , loading} = useGetUserProductsQuery()
  const router = useRouter()
  return (
    <Grid container spacing={3}>
      {data?.getUserProducts?.map((product, index) => (
        <Grid item xs={12} sm={6} lg={3} key={product.id} minHeight={302}>
          <BlankCard style={{
            height:'100%'
          }}>
            <CardContent style={{
              height:'100%'
            }}>
              {/* <Avatar src={card.avatar} sx={{ height: 80, width: 80 }}></Avatar> */}
            <Box display={'flex'} position={'relative'} >

              <Typography component={Link} href={`/?category=${product.category?.id}`}>
              <img src={product.image} alt="img" width="100%" />
            </Typography>
            <Box position={'absolute'} right={6} top={6}>

            <Typography component={Link} href={`/?category=${product.category?.id}`}>
              <Chip color='success' variant='outlined'  label="Purchased"/>
            </Typography>
            </Box>
            </Box>
              <Stack direction="row" spacing={2} mt={3}>
                <Box>
                <Chip    label={product.category?.name} />

                  <Typography variant="h6" mb={1} mt={1}>
                    {product.name}
                  </Typography>
                  <Typography variant="body1" mb={1} mt={1}>
                    {product.description}
                  
                  </Typography>
                 
                </Box>
              </Stack>
              <Stack spacing={2} mt={3} mb={3}>
                <Button  size="large" variant="text" color='info'onClick={() => router.push(`/?category=${product.category?.id}`)} >
                  View Prompts
                </Button>
               
              </Stack>
              <Divider />
              <Stack spacing={2} mt={3} mb={3}  direction="column">
              <Typography variant="body1" mb={1} mt={1}>
                <Box display={'flex'} alignItems={'center'}>

                <MenuBook style={{
                    marginRight:'5px',
                    color:'#12b76a'
                  }}/>
                    {product.topTierPromptCount+'+'} top-tier prompts
                </Box>
                  
                  </Typography>
                  
                  <Typography variant="body1" mb={1} mt={1}>
                  <Box display={'flex'}>

                  <Task style={{
                    marginRight:'5px',
                    color:'#12b76a'
                  }}/>                    {product.taskAutomateCount+'+'} tasks to automate

                  </Box>
                  </Typography>
                  <Typography variant="body1" mb={1} mt={1}>
                  <Box display={'flex'}>

                  <IconCurrencyDollar style={{
                    marginRight:'5px',
                    color:'#12b76a'
                  }}/>                    {product.moneyBackGuarantee+'+'} days money-back guarantee

                  </Box>
                  </Typography>
              </Stack>
            </CardContent>
          </BlankCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default FriendCard;
