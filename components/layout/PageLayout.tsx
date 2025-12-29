import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import PageHeader from './PageHeader';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundPosition?: string;
}

export default function PageLayout({
  children,
  title,
  subtitle,
  backgroundImage = '/images/banners/default.jpg',
  backgroundPosition,
}: PageLayoutProps) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar overlays the header */}
      <Navbar />

      {/* Page Header with background */}
      <PageHeader title={title} subtitle={subtitle} backgroundImage={backgroundImage} backgroundPosition={backgroundPosition} />

      {/* Main Content */}
      <Box sx={{ flex: 1 }}>
        {children}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
