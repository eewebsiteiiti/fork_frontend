'use client';

import { Box, Typography, Paper, Link as MuiLink } from '@mui/material';
import { Email, Phone, Business, Language } from '@mui/icons-material';
import { getFacultyImagePath, PLACEHOLDER_IMAGE } from '@/lib/images';

interface Faculty {
  id: number;
  name: string;
  title: string;
  email: string;
  phone: string;
  details: string;
  address: string;
  link: string;
  subtitle: string;
  place: string;
  image?: string;
}

export default function FacultyCard({ faculty }: { faculty: Faculty }) {
  const imageUrl = getFacultyImagePath(faculty.name, faculty.image);

  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'flex-start' },
        p: 3,
        gap: 3,
        borderBottom: '1px solid',
        borderColor: 'divider',
        '&:hover': {
          bgcolor: 'grey.50',
        },
      }}
    >
      {/* Image */}
      <Box
        sx={{
          flexShrink: 0,
          width: { xs: 120, md: 100 },
          height: { xs: 150, md: 125 },
        }}
      >
        <Box
          component="img"
          src={imageUrl}
          alt={faculty.name}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.src = PLACEHOLDER_IMAGE;
          }}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 1,
          }}
        />
      </Box>

      {/* Main Info */}
      <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
        {faculty.link ? (
          <MuiLink
            href={faculty.link}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{ color: 'primary.main' }}
          >
            <Typography variant="h6" fontWeight={600}>
              {faculty.name}
            </Typography>
          </MuiLink>
        ) : (
          <Typography variant="h6" fontWeight={600}>
            {faculty.name}
          </Typography>
        )}

        {faculty.place && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {faculty.place}
          </Typography>
        )}

        <Typography variant="body2" color="secondary.main" fontStyle="italic">
          {faculty.title}
        </Typography>

        {faculty.subtitle && (
          <Typography variant="body2" color="secondary.main" fontStyle="italic">
            {faculty.subtitle}
          </Typography>
        )}

        {faculty.details && (
          <Box sx={{ mt: 1.5 }}>
            <Typography variant="body2" color="text.secondary">
              <Typography component="span" fontWeight={600} variant="body2">
                Research Focus:{' '}
              </Typography>
              {faculty.details}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Contact Info */}
      <Box
        sx={{
          flexShrink: 0,
          width: { xs: '100%', md: 250 },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        {faculty.phone && faculty.phone !== '1' && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Phone sx={{ fontSize: 18, color: 'text.secondary' }} />
            <Typography variant="body2">
              {faculty.phone}
            </Typography>
          </Box>
        )}

        {faculty.email && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Email sx={{ fontSize: 18, color: 'text.secondary' }} />
            <MuiLink href={`mailto:${faculty.email}`} variant="body2" color="secondary.main">
              {faculty.email}
            </MuiLink>
          </Box>
        )}

        {faculty.address && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Business sx={{ fontSize: 18, color: 'text.secondary' }} />
            <Typography variant="body2">
              {faculty.address}
            </Typography>
          </Box>
        )}

        {faculty.link && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Language sx={{ fontSize: 18, color: 'text.secondary' }} />
            <MuiLink
              href={faculty.link}
              target="_blank"
              rel="noopener noreferrer"
              variant="body2"
              color="secondary.main"
            >
              Website
            </MuiLink>
          </Box>
        )}
      </Box>
    </Paper>
  );
}
