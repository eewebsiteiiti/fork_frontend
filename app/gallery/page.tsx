'use client';

import { useState } from 'react';
import { Box, Container, Typography, ImageList, ImageListItem, Tabs, Tab, Dialog, IconButton, Pagination } from '@mui/material';
import { Close, ChevronLeft, ChevronRight } from '@mui/icons-material';
import PageLayout from '@/components/layout/PageLayout';

const IMAGES_PER_PAGE = 12;

const galleryCategories = {
  department: {
    title: 'Department',
    images: [
      '/images/gallery/department/fc1.jpg',
      '/images/gallery/department/fc2.jpg',
      '/images/gallery/department/dugc.jpg',
      '/images/gallery/department/vdn.jpg',
      '/images/gallery/department/ps.jpg',
      '/images/gallery/department/staffcombo.jpg',
      '/images/gallery/department/csp.jpg',
      '/images/gallery/department/makerspace.jpg',
      '/images/gallery/department/img-6805.jpg',
      '/images/gallery/department/img-6892.jpg',
      '/images/gallery/department/img-6902.jpg',
      '/images/gallery/department/img-6913.jpg',
      '/images/gallery/department/img-6920.jpg',
      '/images/gallery/department/img-6925.jpg',
      '/images/gallery/department/img-6928.jpg',
      '/images/gallery/department/9k6a6820.jpg',
      '/images/gallery/department/9k6a6826.jpg',
      '/images/gallery/department/9k6a6827.jpg',
      '/images/gallery/department/9k6a6838.jpg',
      '/images/gallery/department/9k6a6843.jpg',
      '/images/gallery/department/9k6a6853.jpg',
      '/images/gallery/department/9k6a6855.jpg',
      '/images/gallery/department/9k6a6859.jpg',
      '/images/gallery/department/9k6a6861.jpg',
      '/images/gallery/department/9k6a6862.jpg',
    ],
  },
  students: {
    title: 'Students',
    images: [
      '/images/gallery/batches/btech19.jpg',
      '/images/gallery/batches/btech20.jpg',
      '/images/gallery/batches/btech21.jpg',
      '/images/gallery/batches/btech22.jpg',
      '/images/gallery/batches/mtech20.jpg',
      '/images/gallery/batches/phd-23.jpg',
      '/images/gallery/batches/ncp07849.jpg',
      '/images/gallery/batches/ncp07860.jpg',
      '/images/gallery/batches/ncp07919.jpg',
    ],
  },
  events: {
    title: 'Events',
    images: [
      '/images/gallery/events/ncp07849.jpg',
      '/images/gallery/events/ncp07860.jpg',
      '/images/gallery/events/ncp07919.jpg',
      '/images/gallery/trips/trip1.jpg',
      '/images/gallery/trips/trip3.jpg',
      '/images/gallery/trips/trip4.jpg',
      '/images/gallery/trips/trip5.jpg',
      '/images/gallery/events/tesla-coil.jpeg',
    ],
  },
  eesa: {
    title: 'EESA',
    images: [
      '/images/eesa/eesa.jpg',
      '/images/eesa/eesa1.jpg',
      '/images/eesa/eesa2.jpg',
      '/images/eesa/eesa3.jpg',
      '/images/eesa/eesa4.jpg',
      '/images/eesa/eesa5.jpg',
      '/images/eesa/eesa6.jpg',
      '/images/eesa/eesa7.jpg',
      '/images/eesa/eesa8.jpg',
      '/images/eesa/eesa9.jpg',
      '/images/eesa/eesa10.jpg',
      '/images/eesa/eesa11.jpg',
      '/images/eesa/eesa12.jpg',
      '/images/eesa/ncp08410.jpg',
      '/images/eesa/ncp08454.jpg',
      '/images/eesa/ncp08459.jpg',
      '/images/eesa/ncp08473.jpg',
      '/images/eesa/ncp08525.jpg',
    ],
  },
  fauna: {
    title: 'Flora & Fauna',
    images: [
      '/images/fauna/iiti-peacock.jpg',
      '/images/fauna/iiti-fox.jpg',
      '/images/fauna/iiti-leopard.jpg',
      '/images/fauna/iiti-leopard-2.jpg',
      '/images/fauna/iiti-leopard-3.jpg',
      '/images/fauna/iiti-owl-drb.jpg',
      '/images/fauna/iiti-owl-guest-house.jpg',
      '/images/fauna/iiti-bird-kv.jpg',
      '/images/fauna/iiti-lapwing.jpg',
      '/images/fauna/iiti-nightjar-kshipra.jpg',
      '/images/fauna/iiti-plum-headed.jpg',
      '/images/fauna/iiti-roller-kshipra.jpg',
      '/images/fauna/iiti-snake.jpg',
      '/images/fauna/iiti-spotted.jpg',
    ],
  },
};

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('department');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [page, setPage] = useState(1);

  const allImages = galleryCategories[activeTab as keyof typeof galleryCategories].images;
  const totalPages = Math.ceil(allImages.length / IMAGES_PER_PAGE);
  const startIndex = (page - 1) * IMAGES_PER_PAGE;
  const currentImages = allImages.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
    setPage(1); // Reset to first page when changing tabs
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    // Calculate global index for lightbox navigation across all images
    setImageIndex(startIndex + index);
  };

  const handlePrev = () => {
    const newIndex = imageIndex > 0 ? imageIndex - 1 : allImages.length - 1;
    setImageIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  const handleNext = () => {
    const newIndex = imageIndex < allImages.length - 1 ? imageIndex + 1 : 0;
    setImageIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  return (
    <PageLayout
      title="Gallery"
      subtitle="Capturing moments from our department"
      backgroundImage="/images/banners/gallery.jpg"
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Category Tabs */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ mb: 4, borderBottom: 1, borderColor: 'divider' }}
        >
          {Object.entries(galleryCategories).map(([key, category]) => (
            <Tab key={key} label={`${category.title} (${category.images.length})`} value={key} />
          ))}
        </Tabs>

        {/* Image Grid */}
        <ImageList variant="masonry" cols={3} gap={16}>
          {currentImages.map((image, index) => (
            <ImageListItem
              key={image}
              sx={{
                cursor: 'pointer',
                overflow: 'hidden',
                '&:hover img': {
                  transform: 'scale(1.05)',
                },
              }}
              onClick={() => handleImageClick(image, index)}
            >
              <Box
                component="img"
                src={image}
                alt={`Gallery image ${startIndex + index + 1}`}
                loading="lazy"
                sx={{
                  width: '100%',
                  height: 'auto',
                  transition: 'transform 0.3s',
                  borderRadius: 1,
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>

        {/* Pagination */}
        {totalPages > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
              size="large"
              showFirstButton
              showLastButton
            />
          </Box>
        )}

        {/* Lightbox Dialog */}
        <Dialog
          open={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            sx: { bgcolor: 'black', position: 'relative' },
          }}
        >
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'white',
              zIndex: 1,
            }}
          >
            <Close />
          </IconButton>

          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.5)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
            }}
          >
            <ChevronLeft />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.5)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
            }}
          >
            <ChevronRight />
          </IconButton>

          {selectedImage && (
            <Box
              component="img"
              src={selectedImage}
              alt="Gallery preview"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '90vh',
                objectFit: 'contain',
              }}
            />
          )}

          <Typography
            sx={{
              position: 'absolute',
              bottom: 8,
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.5)',
              px: 2,
              py: 0.5,
              borderRadius: 1,
            }}
          >
            {imageIndex + 1} / {allImages.length}
          </Typography>
        </Dialog>
      </Container>
    </PageLayout>
  );
}
