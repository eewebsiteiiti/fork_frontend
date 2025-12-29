'use client';

import { useState } from 'react';
import { Box, Typography, Grid, ButtonBase, Chip, Link as MuiLink } from '@mui/material';

interface Lab {
  id: number;
  name: string;
  description?: string;
  keywords?: string;
  image?: string;
  equipments?: string;
  experiments?: string;
  location?: string;
  person?: string;
  link?: string;
}

interface LabsViewProps {
  labs: Lab[];
  type: 'ug' | 'pg' | 'research';
}

export default function LabsView({ labs, type }: LabsViewProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (labs.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h6" color="text.secondary">
          No labs found
        </Typography>
      </Box>
    );
  }

  const activeLab = labs[activeIndex];

  // Parse equipments JSON
  const parseEquipments = (equipments?: string): string[] => {
    if (!equipments) return [];
    try {
      const parsed = JSON.parse(equipments);
      return parsed.equipments || [];
    } catch {
      return equipments.split(',').map(e => e.trim());
    }
  };

  // Parse experiments JSON
  const parseExperiments = (experiments?: string): string[] => {
    if (!experiments) return [];
    try {
      const parsed = JSON.parse(experiments);
      return parsed.experiments || [];
    } catch {
      return experiments.split(',').map(e => e.trim());
    }
  };

  // Get image path
  const getImagePath = (image?: string): string => {
    if (!image) return '/images/logos/profile-placeholder.jpg';
    if (image.startsWith('/')) return image;
    // Images stored as "images/filename.jpg" - extract filename and use /images/labs/
    if (image.startsWith('images/')) {
      const filename = image.replace('images/', '');
      return `/images/labs/${filename}`;
    }
    return `/images/labs/${image}`;
  };

  const equipmentList = parseEquipments(activeLab.equipments);
  const experimentList = parseExperiments(activeLab.experiments);

  return (
    <Grid container spacing={3}>
      {/* Sidebar */}
      <Grid size={{ xs: 12, md: 3 }}>
        <Box
          sx={{
            bgcolor: 'secondary.main',
            borderRadius: 1,
            overflow: 'hidden',
          }}
        >
          {labs.map((lab, index) => (
            <ButtonBase
              key={lab.id}
              onClick={() => setActiveIndex(index)}
              sx={{
                width: '100%',
                display: 'block',
                textAlign: 'left',
                p: 2,
                borderBottom: index < labs.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                bgcolor: activeIndex === index ? 'rgba(255,255,255,0.1)' : 'transparent',
                transition: 'background-color 0.2s',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.15)',
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'white',
                  fontWeight: activeIndex === index ? 600 : 400,
                }}
              >
                {lab.name}
              </Typography>
            </ButtonBase>
          ))}
        </Box>
      </Grid>

      {/* Content */}
      <Grid size={{ xs: 12, md: 9 }}>
        <Box>
          {/* Lab Name */}
          <Typography
            variant="h4"
            sx={{
              color: 'secondary.main',
              fontFamily: 'Caudex, serif',
              fontWeight: 600,
              textAlign: 'center',
              mb: 3,
            }}
          >
            {activeLab.name}
          </Typography>

          {/* For PG Labs: Prof In-Charge and Keywords */}
          {type === 'pg' && activeLab.person && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" color="secondary.main" fontWeight={600}>
                Prof. In-Charge:
              </Typography>
              {activeLab.link ? (
                <MuiLink href={activeLab.link} target="_blank" rel="noopener" sx={{ fontSize: '1.1rem' }}>
                  {activeLab.person}
                </MuiLink>
              ) : (
                <Typography variant="h6">{activeLab.person}</Typography>
              )}
            </Box>
          )}

          {type === 'pg' && activeLab.keywords && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" color="secondary.main" fontWeight={600}>
                Research Keywords:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                {activeLab.keywords.split(',').map((keyword, i) => (
                  <Chip key={i} label={keyword.trim()} size="small" variant="outlined" />
                ))}
              </Box>
            </Box>
          )}

          {/* Image */}
          <Box
            component="img"
            src={getImagePath(activeLab.image)}
            alt={activeLab.name}
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.src = '/images/logos/profile-placeholder.jpg';
            }}
            sx={{
              width: '100%',
              maxHeight: 400,
              objectFit: 'contain',
              borderRadius: 1,
              mb: 3,
            }}
          />

          {/* Description (for PG labs) */}
          {type === 'pg' && activeLab.description && (
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  color: 'secondary.main',
                  fontFamily: 'Caudex, serif',
                  fontWeight: 600,
                  textAlign: 'center',
                  mb: 2,
                }}
              >
                About
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.8 }}>
                {activeLab.description}
              </Typography>
            </Box>
          )}

          {/* Location */}
          {activeLab.location && activeLab.location !== 'null' && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" color="secondary.main" fontWeight={600}>
                Location:
              </Typography>
              <Typography variant="body1">{activeLab.location}</Typography>
            </Box>
          )}

          {/* Experiments (for UG labs) */}
          {experimentList.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  color: 'secondary.main',
                  fontFamily: 'Caudex, serif',
                  fontWeight: 600,
                  textAlign: 'center',
                  mb: 2,
                }}
              >
                Experiments
              </Typography>
              <Box component="ul" sx={{ pl: 3 }}>
                {experimentList.map((exp, i) => (
                  <Typography component="li" key={i} variant="body1" sx={{ mb: 1 }}>
                    {exp}
                  </Typography>
                ))}
              </Box>
            </Box>
          )}

          {/* Equipment */}
          {equipmentList.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  color: 'secondary.main',
                  fontFamily: 'Caudex, serif',
                  fontWeight: 600,
                  textAlign: 'center',
                  mb: 2,
                }}
              >
                Equipment
              </Typography>
              <Box component="ul" sx={{ pl: 3 }}>
                {equipmentList.map((eq, i) => (
                  <Typography component="li" key={i} variant="body1" sx={{ mb: 0.5 }}>
                    {eq}
                  </Typography>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
