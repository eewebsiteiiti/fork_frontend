import { Box, Container, Typography, Paper, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import PageLayout from '@/components/layout/PageLayout';

const floraFaunaImages = [
  { src: '/images/flora/IITI_peacock.JPG', title: 'Peacock' },
  { src: '/images/flora/IITI_Fox.JPG', title: 'Fox' },
  { src: '/images/flora/IITI_Leopard.JPG', title: 'Leopard' },
  { src: '/images/flora/IITI_Leopard-2.JPG', title: 'Leopard' },
  { src: '/images/flora/IITI_Leopard-3.JPG', title: 'Leopard' },
  { src: '/images/flora/IITI_Leopard-4.JPG', title: 'Leopard' },
  { src: '/images/flora/IITI_Leopard_DRB.JPG', title: 'Leopard at DRB' },
  { src: '/images/flora/IITI_Lapwing.JPG', title: 'Lapwing' },
  { src: '/images/flora/IITI_Roller_Kshipra.JPG', title: 'Indian Roller at Kshipra' },
  { src: '/images/flora/IITI_Nightjar_Kshipra.JPG', title: 'Nightjar at Kshipra' },
  { src: '/images/flora/IITI_Owl_Guest_House.JPG', title: 'Owl at Guest House' },
  { src: '/images/flora/IITI_Owl_DRB.JPG', title: 'Owl at DRB' },
  { src: '/images/flora/IITI_Bird_KV.JPG', title: 'Bird at KV' },
  { src: '/images/flora/IITI_Plum_Headed.JPG', title: 'Plum-headed Parakeet' },
  { src: '/images/flora/IITI_Snake.JPG', title: 'Snake' },
  { src: '/images/flora/IITI_spotted.JPG', title: 'Spotted Deer' },
];

export default function FloraFaunaPage() {
  return (
    <PageLayout
      title="Glimpses of Life at IIT Indore"
      subtitle="Flora & Fauna on our beautiful campus"
      backgroundImage="/images/banners/campus.jpg"
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Introduction */}
        <Paper elevation={0} sx={{ p: 4, mb: 6, bgcolor: 'grey.50' }}>
          <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
            The IIT Indore campus is blessed with rich biodiversity and natural beauty.
            Located in the foothills of the Vindhya range, our campus is home to a variety of
            wildlife including leopards, deer, peacocks, and numerous bird species.
            Here are some glimpses of the flora and fauna captured by our community members.
          </Typography>
        </Paper>

        {/* Photo Gallery */}
        <Typography variant="h4" sx={{ mb: 3, fontFamily: 'Caudex, serif', color: 'primary.main' }}>
          Wildlife Gallery
        </Typography>
        <ImageList variant="masonry" cols={3} gap={16}>
          {floraFaunaImages.map((image) => (
            <ImageListItem key={image.src}>
              <Box
                component="img"
                src={image.src}
                alt={image.title}
                loading="lazy"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 1,
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.02)' },
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </PageLayout>
  );
}
