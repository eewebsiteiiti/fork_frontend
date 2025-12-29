'use client';

import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink } from '@mui/material';

interface HeaderProps {
  title: string;
  description?: string;
  image?: string;
  link?: string;
  linkText?: string;
}

export default function Header({ title, description, image, link, linkText }: HeaderProps) {
  return (
    <Box sx={{ bgcolor: 'primary.main', minHeight: 200 }}>
      <Grid container>
        <Grid size={{ xs: 12, md: image ? 6 : 12 }}>
          <Container sx={{ py: 6, px: { xs: 3, md: 8 } }}>
            <Typography
              variant="h3"
              color="white"
              sx={{ fontFamily: 'Caudex, serif', fontWeight: 700, mb: 2 }}
            >
              {title}
            </Typography>
            {description && (
              <Typography variant="body1" color="white" sx={{ opacity: 0.9 }}>
                {description}
                {link && (
                  <>
                    {' '}
                    <MuiLink
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: 'white', textDecoration: 'underline', fontWeight: 'bold' }}
                    >
                      {linkText || 'Learn more'}
                    </MuiLink>
                  </>
                )}
              </Typography>
            )}
          </Container>
        </Grid>
        {image && (
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: { xs: 'none', md: 'block' },
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: 200,
            }}
          />
        )}
      </Grid>
    </Box>
  );
}
