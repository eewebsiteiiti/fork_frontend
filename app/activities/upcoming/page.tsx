import { Box, Container, Typography, Paper, Grid, Chip } from '@mui/material';
import { AccessTime, Link as LinkIcon } from '@mui/icons-material';
import PageLayout from '@/components/layout/PageLayout';
import db from '@/lib/db';

interface Event {
  id: number;
  title: string;
  description: string;
  date: number;
  month: string;
  day: string;
  time: string;
  image: string;
  link: string;
}

function getEvents(): Event[] {
  try {
    return db.prepare('SELECT * FROM events ORDER BY id DESC').all() as Event[];
  } catch {
    return [];
  }
}

export default function UpcomingActivitiesPage() {
  const events = getEvents();

  return (
    <PageLayout
      title="Upcoming Activities"
      subtitle="Events and activities in the department"
      backgroundImage="/images/banners/eesa.jpg"
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {events.length === 0 ? (
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary">
              No upcoming activities at the moment.
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={3}>
            {events.map((event) => (
              <Grid key={event.id} size={{ xs: 12, md: 6 }}>
                <Paper
                  elevation={2}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    overflow: 'hidden',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4,
                    }
                  }}
                >
                  {/* Date Box */}
                  <Box
                    sx={{
                      bgcolor: 'primary.main',
                      color: 'white',
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: 100,
                    }}
                  >
                    <Typography variant="h3" fontWeight={700}>
                      {event.date}
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={500}>
                      {event.month}
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                      {event.day}
                    </Typography>
                  </Box>

                  {/* Content */}
                  <Box sx={{ p: 3, flex: 1 }}>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {event.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2, lineHeight: 1.6 }}
                    >
                      {event.description}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
                      {event.time && (
                        <Chip
                          icon={<AccessTime fontSize="small" />}
                          label={event.time}
                          size="small"
                          variant="outlined"
                        />
                      )}
                      {event.link && (
                        <Chip
                          icon={<LinkIcon fontSize="small" />}
                          label="More Info"
                          size="small"
                          color="primary"
                          component="a"
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          clickable
                        />
                      )}
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </PageLayout>
  );
}
