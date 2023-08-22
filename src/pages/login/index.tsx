import Link from 'next/link';
import { Grid, Box, Stack, Typography } from '@mui/material';
import Logo from '@/layouts/full/shared/logo/Logo';
import PageContainer from '@/components/container/PageContainer';
import AuthLogin from '@/components/authForms/AuthLogin';


const Login = () => (
  <PageContainer>
    <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
     
           <Grid
        item
        xs={12}
        sm={12}
        lg={4}
        xl={5}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid height={'100%'}>
          {/* ?previous value was 50% */}
        <Grid container padding={'1.25rem'} justifyContent={'center'} height={'88%'}>
          <Grid item md={12} >

        <Box  >
            <Logo />
          </Box>
          </Grid>
          <Grid item>

          <Box position="relative">
       
          <Box p={4}>
          <AuthLogin
            title="Sign In"
            subtitle={
              <Stack direction="row" spacing={1} mt={3}>
                <Typography color="textSecondary" variant="h6" fontWeight="500">
                  New to Modernize?
                </Typography>
                <Typography
                  component={Link}
                  href="/auth/auth1/register"
                  fontWeight="500"
                  sx={{
                    textDecoration: 'none',
                    color: 'primary.main',
                  }}
                >
                  Create an account
                </Typography>
              </Stack>
            }
            subtext={
              <Typography variant="subtitle1" color="textSecondary" mb={1}>
Welcome in Neurge! Please enter your details.              </Typography>
            }
          />
        </Box>
          </Box>
          </Grid>
        </Grid>
</Grid>
     
      </Grid> 
      <Grid
        item
        xs={12}
        sm={12}
        lg={8}
        xl={7}
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: '0.3',
          },
        }}
      >
        <Box position="relative">
      
          <Box
            alignItems="center"
            justifyContent="center"
            height={'calc(100vh - 75px)'}
            sx={{
              display: {
                xs: 'none',
                lg: 'flex',
              },
            }}
          >
            <img
              src={"/images/backgrounds/login.jpg"}
              alt="bg"
              style={{
                width: '100%',
                maxWidth: '600px',
              }}
            />
          </Box>
        </Box>
      </Grid>

    </Grid>
  </PageContainer>
);

Login.layout = "Blank";
Login.guestGard = true;
export default Login;
