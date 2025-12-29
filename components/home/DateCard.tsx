import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

interface DateCardProps {
  title: string;
  description: string;
  date: number;
  month: string;
  day: string;
  time: string;
}

export default function DateCard({
  title,
  description,
  date,
  month,
  day,
  time,
}: DateCardProps) {
  return (
    <Card
      sx={{
        width: 240,
        height: 180,
        borderRight: 3,
        borderTop: 3,
        borderRadius: 0,
        borderColor: 'primary.main',
      }}
      elevation={1}
    >
      <CardContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid>
            <Typography
              color="primary.main"
              sx={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '32px',
              }}
            >
              {date}
            </Typography>
          </Grid>
          <Grid>
            <Box>
              <Typography
                sx={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '18px',
                }}
              >
                {month}
              </Typography>
              <Typography
                color="text.secondary"
                sx={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '9px',
                }}
              >
                {day}, {time}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 1 }}>
          <Typography
            color="text.secondary"
            sx={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '9px',
            }}
          >
            {title}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '9px',
              mt: 0.5,
            }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
