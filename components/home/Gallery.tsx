import { Box, Container, Grid, Typography, ImageList, ImageListItem } from '@mui/material';

const itemData1 = [
  { img: '/images/carousel/1.jpg' },
  { img: '/images/carousel/2.jpg' },
  { img: '/images/gallery/ps.JPG' },
];

const itemData2 = [
  { img: '/images/gallery/staffCombo.JPG' },
  { img: '/images/gallery/btech22.jpg' },
  { img: '/images/gallery/IMG_6892.JPG' },
];

export default function Gallery() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          py: 4,
          fontFamily: 'Caudex, serif',
        }}
      >
        Electrical Engineering is vital in our lives!
      </Typography>

      <ImageList
        sx={{ width: '100%', height: 'auto' }}
        variant="woven"
        cols={3}
        gap={20}
      >
        {itemData1.map((item) => (
          <ImageListItem key={item.img} sx={{ overflow: 'hidden' }}>
            <Box
              component="img"
              src={item.img}
              alt=""
              loading="lazy"
              sx={{ width: '100%', height: 200, objectFit: 'cover' }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ py: 3 }}>
        <Grid size={{ xs: 12, md: 4 }} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box
            component="img"
            src="/images/gallery/FC2.JPG"
            alt=""
            sx={{ height: 245, width: '100%', objectFit: 'cover' }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <iframe
              title="Departmental Video"
              width="350"
              height={240}
              src="https://www.youtube.com/embed/s8f3N_14HeQ"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ border: 0 }}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box
            component="img"
            src="/images/gallery/vdn.JPG"
            alt=""
            sx={{ height: 245, width: '100%', objectFit: 'cover' }}
          />
        </Grid>
      </Grid>

      <ImageList
        sx={{ width: '100%', height: 'auto' }}
        variant="woven"
        cols={3}
        gap={20}
      >
        {itemData2.map((item) => (
          <ImageListItem key={item.img} sx={{ overflow: 'hidden' }}>
            <Box
              component="img"
              src={item.img}
              alt=""
              loading="lazy"
              sx={{ width: '100%', height: 200, objectFit: 'cover' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
