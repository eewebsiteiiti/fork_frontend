'use client';

import React from 'react';
import { Avatar, Box, Card, CardContent, Typography, Chip } from '@mui/material';
import { Email, Phone, Language, LocationOn } from '@mui/icons-material';
import Link from 'next/link';
import { getStudentImagePath, getFacultyImagePath, getStaffImagePath } from '@/lib/images';

// Get initials from name (up to 2 characters)
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Generate a consistent color based on name
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

// Image with avatar fallback - uses state to track load status
function ImageWithFallback({ src, alt, height }: { src: string; alt: string; height: number }) {
  const [status, setStatus] = React.useState<'loading' | 'loaded' | 'error'>('loading');

  React.useEffect(() => {
    if (!src) {
      setStatus('error');
      return;
    }

    const img = new Image();
    img.onload = () => setStatus('loaded');
    img.onerror = () => setStatus('error');
    img.src = src;
  }, [src]);

  // Show avatar if no src, loading, or error
  if (status !== 'loaded') {
    return (
      <Box
        sx={{
          height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'grey.100',
        }}
      >
        <Avatar
          sx={{
            width: height * 0.6,
            height: height * 0.6,
            bgcolor: stringToColor(alt),
            fontSize: height * 0.2,
            fontWeight: 600,
          }}
        >
          {getInitials(alt)}
        </Avatar>
      </Box>
    );
  }

  // Show image only after it's confirmed loaded
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        height,
        width: '100%',
        objectFit: 'cover',
      }}
    />
  );
}

interface PersonCardProps {
  name: string;
  title?: string;
  email?: string;
  phone?: string;
  details?: string;
  address?: string;
  link?: string;
  place?: string;
  subtitle?: string;
  roll_no?: string;
  year?: number;
  program?: string; // btech, mtech, phd, ms, alumni
  image?: string; // Image path from database
  type: 'faculty' | 'staff' | 'student' | 'alumni';
}

export default function PersonCard({
  name,
  title,
  email,
  phone,
  details,
  address,
  link,
  place,
  subtitle,
  roll_no,
  year,
  program,
  image,
  type,
}: PersonCardProps) {
  // Get image URL - database image takes precedence over derived paths
  const getImageUrl = () => {
    if (type === 'student' && roll_no && program) {
      return getStudentImagePath(program, roll_no, image);
    }
    if (type === 'faculty') {
      return getFacultyImagePath(name, image);
    }
    if (type === 'staff') {
      return getStaffImagePath(name, image);
    }
    return image || '';
  };

  const imageUrl = getImageUrl();

  // Alumni - card with avatar (no photos for alumni)
  if (type === 'alumni') {
    return (
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <ImageWithFallback src="" alt={name} height={200} />
        <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            {name}
          </Typography>
          {roll_no && (
            <Typography variant="body2" color="text.secondary">
              {roll_no}
            </Typography>
          )}
        </CardContent>
      </Card>
    );
  }

  if (type === 'student') {
    return (
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <ImageWithFallback src={imageUrl} alt={name} height={250} />
        <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            {name}
          </Typography>
          {roll_no && (
            <Typography variant="body2" color="text.secondary">
              {roll_no}
            </Typography>
          )}
          {year && (
            <Chip label={`Batch ${year}`} size="small" sx={{ mt: 1 }} color="primary" variant="outlined" />
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <ImageWithFallback src={imageUrl} alt={name} height={450} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {name}
        </Typography>
        {title && (
          <Typography variant="body2" color="primary.main" fontWeight={500} gutterBottom>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {subtitle}
          </Typography>
        )}
        {place && (
          <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 1 }}>
            {place}
          </Typography>
        )}
        {details && (
          <Typography variant="body2" sx={{ mb: 2, fontSize: '0.85rem' }}>
            <strong>Research:</strong> {details}
          </Typography>
        )}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          {email && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Email fontSize="small" color="action" />
              <Typography variant="body2" component="a" href={`mailto:${email}`} sx={{ color: 'inherit' }}>
                {email}
              </Typography>
            </Box>
          )}
          {phone && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Phone fontSize="small" color="action" />
              <Typography variant="body2">{phone}</Typography>
            </Box>
          )}
          {address && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOn fontSize="small" color="action" />
              <Typography variant="body2">{address}</Typography>
            </Box>
          )}
          {link && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Language fontSize="small" color="action" />
              <Link href={link} target="_blank" style={{ color: '#1976d2', fontSize: '0.875rem' }}>
                Website
              </Link>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
