'use client';

import { Box, Card, CardContent, CardMedia, Typography, Chip } from '@mui/material';
import { Email, Phone, Language, LocationOn } from '@mui/icons-material';
import Link from 'next/link';
import { getStudentImagePath, getFacultyImagePath, getStaffImagePath, PLACEHOLDER_IMAGE } from '@/lib/images';
import { get } from 'http';

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
  type,
}: PersonCardProps) {
  // Derive image path from identifiers - no DB storage needed
  const getImageUrl = () => {
    if (type === 'student' && roll_no && program) {
      return getStudentImagePath(program, roll_no);
    }
    if (type === 'faculty') {
      return getFacultyImagePath(name);
    }
    if (type === 'staff') {
      return getStaffImagePath(name);
    }
    return PLACEHOLDER_IMAGE;
  };

  const imageUrl = getImageUrl();

  // Handle image loading errors by showing placeholder
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = PLACEHOLDER_IMAGE;
  };

  // Alumni - card with placeholder image
  if (type === 'alumni') {
    return (
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          sx={{ height: 200, objectFit: 'cover' }}
          image={PLACEHOLDER_IMAGE}
          alt={name}
        />
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
        <CardMedia
          component="img"
          sx={{ height: 200, objectFit: 'cover' }}
          image={imageUrl}
          alt={name}
          onError={handleImageError}
        />
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
      <CardMedia
        component="img"
        sx={{ height: 250, objectFit: 'cover' }}
        image={imageUrl}
        alt={name}
        onError={handleImageError}
      />
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
