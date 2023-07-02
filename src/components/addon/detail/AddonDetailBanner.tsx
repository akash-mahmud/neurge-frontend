import { Card, CardContent, Typography, Button, Box, Grid } from '@mui/material';

const AddonDetailBanner = ({addon}: {
    addon: { __typename?: 'Addon', updatedAt: any, name: string, imoji?: string | null, img: string, id: string, description?: string | null, createdAt: any, addonBlogCategory: Array<{ __typename?: 'AddonBlogCategory', createdAt: any, id: string, name: string, updatedAt: any, _count?: { __typename?: 'AddonBlogCategoryCount', blog: number } | null, blog: Array<{ __typename?: 'Blog', id: string, imoji: string, title: string, createdAt: any, updatedAt: any }> }>, _count?: { __typename?: 'AddonCount', addonBlogCategory: number, blog: number } | null } | undefined
}) => {
  return (
    <Card style={{
        marginBottom:10
    }}
      elevation={0}
      sx={{
        backgroundColor: (theme:any) => theme.palette.secondary.light,
        py: 0,
        overflow: 'hidden',
        position: 'relative',
        
      }}
      
    >
      <CardContent sx={{ p: '30px' }}>
        <Grid container spacing={3} justifyContent="space-between" >
          <Grid item sm={13} display="flex" alignItems="center">
            <Box
              sx={{
                textAlign: {
                  xs: 'center',
                  sm: 'left',
                },
              }}
            >
              <Typography variant="h5">
                {addon?.name}
              </Typography>
              <Typography variant="body1" color="textSecondary" my={2}>
                {addon?.description}
              </Typography>
           
            </Box>
          </Grid>
         
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AddonDetailBanner;
