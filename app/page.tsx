import { Box, Container, Typography, Grid, Button } from '@mui/material';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Carousel from '@/components/home/Carousel';
import EventCard from '@/components/home/EventCard';
import DateCard from '@/components/home/DateCard';
import AboutUs from '@/components/home/AboutUs';
import Gallery from '@/components/home/Gallery';
import NoteFromHOD from '@/components/home/NoteFromHOD';
import db from '@/lib/db';
import { initializeDatabase, checkTablesExist } from '@/lib/schema';
import { getEventImagePath } from '@/lib/images';

// Ensure database is initialized
if (!checkTablesExist()) {
  initializeDatabase();
}

interface Event {
  id: number;
  title: string;
  description: string;
  event_date: string;
  time: string;
  image: string;
  link: string;
}

interface Announcement {
  id: number;
  title: string;
  description: string;
  link: string;
}

interface News {
  id: number;
  title: string;
  description: string;
  event_date: string;
  time: string;
  link: string;
}

// Helper function to parse date and derive display values
function parseEventDate(dateStr: string) {
  const date = new Date(dateStr);
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return {
    date: date.getDate(),
    month: months[date.getMonth()],
    day: days[date.getDay()],
    year: date.getFullYear(),
  };
}

function getEvents(): Event[] {
  try {
    return db.prepare('SELECT * FROM events ORDER BY id DESC LIMIT 6').all() as Event[];
  } catch {
    return [];
  }
}

function getAnnouncements(): Announcement[] {
  try {
    return db.prepare('SELECT * FROM announcements ORDER BY id DESC LIMIT 10').all() as Announcement[];
  } catch {
    return [];
  }
}

function getNews(): News[] {
  try {
    return db.prepare('SELECT * FROM news ORDER BY event_date ASC LIMIT 6').all() as News[];
  } catch {
    return [];
  }
}

function getCarouselImages(): string[] {
  try {
    const carouselDir = path.join(process.cwd(), 'public', 'images', 'carousel');
    const files = fs.readdirSync(carouselDir);
    return files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .sort()
      .map(file => `/images/carousel/${file}`);
  } catch {
    return [];
  }
}

export default function HomePage() {
  const events = getEvents();
  const announcements = getAnnouncements();
  const news = getNews();
  const carouselImages = getCarouselImages();

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar overlays the carousel */}
      <Navbar />

      {/* Hero Carousel - Full viewport height with navbar overlay */}
      <Box sx={{ position: 'relative' }}>
        <Carousel images={carouselImages} />
      </Box>

      {/* Events & News Section */}
      <Container sx={{ my: 5 }}>
        {/* Link to old website */}
        <Box sx={{ mb: 3 }}>
          <Link href="https://ee.iiti.ac.in" target="_blank" style={{ textDecoration: 'none' }}>
            <Button variant="outlined">Link to old Website</Button>
          </Link>
        </Box>

        <Grid container spacing={3}>
          {/* Main Content - Events & Important Dates */}
          <Grid size={{ xs: 12, md: 8 }}>
            {/* Events Section */}
            <Typography
              variant="h4"
              sx={{
                borderBottom: '2px solid #BBBBBB',
                pb: 1,
                mb: 3,
                fontFamily: 'Caudex, serif',
              }}
            >
              EVENTS
            </Typography>

            <Grid container spacing={3}>
              {events.length > 0 ? (
                events.map((event) => {
                  const parsedDate = parseEventDate(event.event_date);
                  return (
                    <Grid key={event.id} size={{ xs: 12, sm: 6, md: 4 }}>
                      {event.link ? (
                        <Link href={event.link} target="_blank" style={{ textDecoration: 'none' }}>
                          <EventCard
                            title={event.title}
                            description={event.description}
                            image={getEventImagePath(event.id, event.image)}
                            date={parsedDate.date}
                            month={parsedDate.month}
                            day={parsedDate.day}
                            time={event.time}
                            year={parsedDate.year}
                          />
                        </Link>
                      ) : (
                        <EventCard
                          title={event.title}
                          description={event.description}
                          image={getEventImagePath(event.id, event.image)}
                          date={parsedDate.date}
                          month={parsedDate.month}
                          day={parsedDate.day}
                          time={event.time}
                          year={parsedDate.year}
                        />
                      )}
                    </Grid>
                  );
                })
              ) : (
                <Grid size={12}>
                  <Typography color="text.secondary">No events to display</Typography>
                </Grid>
              )}
            </Grid>

            {/* Important Dates Section */}
            <Typography
              variant="h4"
              sx={{
                borderBottom: '2px solid #BBBBBB',
                pb: 1,
                mb: 3,
                mt: 5,
                fontFamily: 'Caudex, serif',
              }}
            >
              IMPORTANT DATES
            </Typography>

            <Grid container spacing={3} justifyContent="center">
              {news.length > 0 ? (
                news.map((item) => {
                  const parsedDate = parseEventDate(item.event_date);
                  return (
                    <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <DateCard
                          title={item.title}
                          description={item.description}
                          date={parsedDate.date}
                          month={parsedDate.month}
                          day={parsedDate.day}
                          time={item.time}
                        />
                      </Box>
                    </Grid>
                  );
                })
              ) : (
                <Grid size={12}>
                  <Typography color="text.secondary">No important dates to display</Typography>
                </Grid>
              )}
            </Grid>
          </Grid>

          {/* Sidebar - News/Announcements */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                bgcolor: '#EEE',
                borderTop: '4px solid #B2103F',
                p: 2,
              }}
            >
              <Typography
                variant="h4"
                textAlign="center"
                sx={{
                  borderBottom: '2px solid #BBBBBB',
                  pb: 1,
                  fontFamily: 'Caudex, serif',
                }}
              >
                NEWS
              </Typography>

              <Box sx={{ mt: 2 }}>
                {announcements.length > 0 ? (
                  [...announcements].reverse().map((ann) => (
                    <Box
                      key={ann.id}
                      sx={{
                        borderBottom: '2px solid #BBBBBB',
                        py: 1.5,
                      }}
                    >
                      <Typography variant="body2" fontWeight={700} fontSize="0.8rem">
                        {ann.title}
                      </Typography>
                      <Typography variant="body2" fontSize="0.8rem" sx={{ mt: 0.5 }}>
                        {ann.description}
                      </Typography>
                    </Box>
                  ))
                ) : (
                  <Typography color="text.secondary" textAlign="center" sx={{ py: 2 }}>
                    No announcements
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* About Us Section */}
      <AboutUs />

      {/* Gallery Section */}
      <Gallery />

      {/* Note from HOD */}
      <NoteFromHOD />

      {/* Footer */}
      <Footer />
    </Box>
  );
}
