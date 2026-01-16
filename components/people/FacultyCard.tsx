'use client';

import { useState } from 'react';
import { Avatar, Box, Typography, Paper, Link as MuiLink } from '@mui/material';
import { Email, Phone, Business, Language } from '@mui/icons-material';
import { getFacultyImagePath } from '@/lib/images';

// Get initials from name
function getInitials(name: string): string {
  const parts = name.replace(/^Prof\.\s*/i, '').trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Generate consistent color from name
function stringToColor(string: string): string {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  const colors = [
    '#1976d2', '#388e3c', '#d32f2f', '#7b1fa2', '#c2185b',
    '#0288d1', '#00796b', '#e64a19', '#5d4037', '#455a64'
  ];
  return colors[Math.abs(hash) % colors.length];
}

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
  subtitle_link: string;
  place: string;
  image?: string;
}

export default function FacultyCard({ faculty }: { faculty: Faculty }) {
  const [imageError, setImageError] = useState(false);
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {imageError ? (
          <Avatar
            sx={{
              width: { xs: 100, md: 80 },
              height: { xs: 100, md: 80 },
              bgcolor: stringToColor(faculty.name),
              fontSize: { xs: 36, md: 28 },
              fontWeight: 600,
            }}
          >
            {getInitials(faculty.name)}
          </Avatar>
        ) : (
          <Box
            component="img"
            src={imageUrl}
            alt={faculty.name}
            onError={() => setImageError(true)}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 1,
            }}
          />
        )}
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
          faculty.subtitle_link ? (
            <MuiLink
              href={`mailto:${faculty.subtitle_link}`}
              underline="hover"
              sx={{ color: 'secondary.main', fontStyle: 'italic' }}
            >
              <Typography variant="body2" component="span">
                {faculty.subtitle}
              </Typography>
            </MuiLink>
          ) : (
            <Typography variant="body2" color="secondary.main" fontStyle="italic">
              {faculty.subtitle}
            </Typography>
          )
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
