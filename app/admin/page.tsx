import Link from 'next/link';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import {
  People,
  Science,
  School,
  Event,
  Announcement,
  EmojiEvents,
  Article,
} from '@mui/icons-material';
import db from '@/lib/db';
import { initializeDatabase, checkTablesExist } from '@/lib/schema';

// Ensure database is initialized
if (!checkTablesExist()) {
  initializeDatabase();
}

interface StatCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  href: string;
  color: string;
}

function StatCard({ title, count, icon, href, color }: StatCardProps) {
  return (
    <Link href={href} style={{ textDecoration: 'none', display: 'block' }}>
      <Card
        sx={{
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: 4,
          },
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                bgcolor: color,
                color: 'white',
                display: 'flex',
              }}
            >
              {icon}
            </Box>
            <Box>
              <Typography variant="h4" fontWeight="bold">
                {count}
              </Typography>
              <Typography color="text.secondary">{title}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}

function getCount(table: string): number {
  try {
    const result = db.prepare(`SELECT COUNT(*) as count FROM ${table}`).get() as { count: number };
    return result.count;
  } catch {
    return 0;
  }
}

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Faculty',
      count: getCount('faculty'),
      icon: <People />,
      href: '/admin/people?type=faculty',
      color: '#1976d2',
    },
    {
      title: 'Students',
      count: getCount('btech') + getCount('mtech') + getCount('phd') + getCount('ms'),
      icon: <School />,
      href: '/admin/people',
      color: '#388e3c',
    },
    {
      title: 'Research Areas',
      count: getCount('research'),
      icon: <Science />,
      href: '/admin/research',
      color: '#7b1fa2',
    },
    {
      title: 'Projects',
      count: getCount('projects'),
      icon: <Science />,
      href: '/admin/research?tab=projects',
      color: '#c2185b',
    },
    {
      title: 'Courses',
      count: getCount('courses') + getCount('courses_new'),
      icon: <School />,
      href: '/admin/courses',
      color: '#f57c00',
    },
    {
      title: 'Events',
      count: getCount('events'),
      icon: <Event />,
      href: '/admin/events',
      color: '#0288d1',
    },
    {
      title: 'Announcements',
      count: getCount('announcements'),
      icon: <Announcement />,
      href: '/admin/announcements',
      color: '#689f38',
    },
    {
      title: 'Achievements',
      count: getCount('books') + getCount('faculty_awards') + getCount('student_awards') + getCount('patents'),
      icon: <EmojiEvents />,
      href: '/admin/achievements',
      color: '#fbc02d',
    },
    {
      title: 'Articles',
      count: getCount('reads'),
      icon: <Article />,
      href: '/admin/articles',
      color: '#455a64',
    },
  ];

  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Dashboard
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Welcome to the EE Department Admin Panel. Manage all your content from here.
      </Typography>

      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid key={stat.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Quick Actions
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Link href="/admin/people?type=faculty&action=new" style={{ textDecoration: 'none', display: 'block' }}>
              <Card sx={{ p: 2, textAlign: 'center' }}>
                <Typography>+ Add Faculty</Typography>
              </Card>
            </Link>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Link href="/admin/events?action=new" style={{ textDecoration: 'none', display: 'block' }}>
              <Card sx={{ p: 2, textAlign: 'center' }}>
                <Typography>+ Add Event</Typography>
              </Card>
            </Link>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Link href="/admin/announcements?action=new" style={{ textDecoration: 'none', display: 'block' }}>
              <Card sx={{ p: 2, textAlign: 'center' }}>
                <Typography>+ Add Announcement</Typography>
              </Card>
            </Link>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Link href="/admin/courses?action=new" style={{ textDecoration: 'none', display: 'block' }}>
              <Card sx={{ p: 2, textAlign: 'center' }}>
                <Typography>+ Add Course</Typography>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
