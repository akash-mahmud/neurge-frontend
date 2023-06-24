import { Grid } from '@mui/material';
import PageContainer from '../../../../components/container/PageContainer';
import ProfileBanner from '../../../../components/apps/userprofile/profile/ProfileBanner';
import GalleryCard from '../../../../components/apps/userprofile/gallery/GalleryCard';


const Gallery = () => {
  return (
    <PageContainer>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <ProfileBanner />
        </Grid>
        <Grid item sm={12}>
          <GalleryCard />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Gallery;
