import { Box, Container, Typography, Grid } from '@mui/material';
import PageLayout from '@/components/layout/PageLayout';

const articles = [
  {
    title: 'EESA',
    author: 'Rakshit Jangid (2022 B. Tech..)',
    pdf: '/pdf/EESA.pdf',
  },
  {
    title: 'Bouncing',
    author: 'Tejas Chaudhari (2022 B. Tech..)',
    pdf: '/pdf/Bouncing.pdf',
  },
  {
    title: 'From Flat Sheets to Curved Skins',
    author: 'Akhila Gouda (PhD)',
    pdf: '/pdf/FlatSheetsToCurvedSkins.pdf',
  },
];

export default function ReadsPage() {
  return (
    <PageLayout
      title="Interesting Reads"
      subtitle="Some articles by our students"
      backgroundImage="/images/banners/research.jpg"
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4} justifyContent="center">
          {articles.map((article) => (
            <Grid key={article.title} size={{ xs: 12, md: 6 }}>
              <Box sx={{ textAlign: 'center' }}>
                {article.author && (
                  <Typography fontWeight={600} color="primary" sx={{ mb: 2 }}>
                    By {article.author}
                  </Typography>
                )}
                <Box
                  component="embed"
                  src={article.pdf}
                  sx={{
                    width: '100%',
                    height: 500,
                    border: '1px solid #ddd',
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </PageLayout>
  );
}
