import { Box, Container, Typography, Grid } from '@mui/material';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundPosition?: string;
}

export default function PageHeader({
  title,
  subtitle,
  backgroundImage = '/images/banners/default.jpg',
  backgroundPosition = 'center',
}: PageHeaderProps) {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        minHeight: { xs: 400, md: 500 },
        overflow: 'hidden',
      }}
    >
      <Grid container sx={{ minHeight: { xs: 400, md: 500 } }}>
        {/* Left side - Text content */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            px: { xs: 3, md: 8, lg: 10 },
            pt: { xs: 18, md: 22 },
            pb: { xs: 5, md: 6 },
          }}
        >
          <Container disableGutters>
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 700,
                fontFamily: 'Caudex, serif',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                mb: 2,
              }}
            >
              {title}
            </Typography>
            {subtitle && (
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  lineHeight: 1.7,
                }}
              >
                {subtitle}
              </Typography>
            )}
          </Container>
        </Grid>

        {/* Right side - Background image */}
        <Grid
          size={{ xs: 0, md: 6 }}
          sx={{
            display: { xs: 'none', md: 'block' },
            pt: { md: '150px' },
            minHeight: 500,
            clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: backgroundPosition,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
