'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Box, Container, Grid, Typography, Divider, IconButton } from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Mail,
  People,
  School,
  MenuBook,
  TrendingUp,
  Public,
  Extension,
  CurrencyRupee,
  FormatQuote,
} from '@mui/icons-material';
import { footerStats } from '@/config/nav-data';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  href: string;
  suffix?: string;
  isVisible: boolean;
}

function CountUp({ end, duration = 2000, isVisible }: { end: number; duration?: number; isVisible: boolean }) {
  const [count, setCount] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset count when not visible
    if (!isVisible) {
      setCount(0);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [end, duration, isVisible]);

  return <>{count.toLocaleString()}</>;
}

function StatItem({ icon, value, label, href, suffix = '+', isVisible }: StatItemProps) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Link href={href} style={{ color: 'inherit' }}>
        <Box sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}>
          {icon}
        </Box>
      </Link>
      <Typography color="white" variant="h6">
        <CountUp end={value} isVisible={isVisible} />{suffix}
      </Typography>
      <Typography color="white" variant="body2">
        {label}
      </Typography>
    </Box>
  );
}

// Special stat item for non-numeric values like "32.6 Cr"
function StatItemText({ icon, value, label, href, isVisible }: { icon: React.ReactNode; value: string; label: string; href: string; isVisible: boolean }) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Link href={href} style={{ color: 'inherit' }}>
        <Box sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}>
          {icon}
        </Box>
      </Link>
      <Typography color="white" variant="h6">
        {isVisible ? value : '0'}
      </Typography>
      <Typography color="white" variant="body2">
        {label}
      </Typography>
    </Box>
  );
}

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box className="footer-bg" sx={{ color: 'white', mt: 'auto' }}>
      <Box className="footer-overlay">
      {/* Stats Section */}
      <Container maxWidth="xl" sx={{ py: 4 }} ref={statsRef}>
        <Typography
          variant="h4"
          color="secondary.main"
          textAlign="center"
          sx={{ mb: 4, fontFamily: 'Caudex, serif' }}
        >
          Department Statistics
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          <Grid size={{ xs: 6, sm: 4, md: 1.5 }}>
            <StatItem
              icon={<People sx={{ fontSize: 40 }} />}
              value={footerStats.faculty}
              label="Faculty"
              href="/people/faculty"
              isVisible={isVisible}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 1.5 }}>
            <StatItem
              icon={<School sx={{ fontSize: 40 }} />}
              value={footerStats.studentsGraduated}
              label="Students Graduated"
              href="/research/stats/students"
              isVisible={isVisible}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 1.5 }}>
            <StatItem
              icon={<MenuBook sx={{ fontSize: 40 }} />}
              value={footerStats.publications}
              label="Publications"
              href="/research/stats/publications"
              isVisible={isVisible}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 1.5 }}>
            <StatItem
              icon={<TrendingUp sx={{ fontSize: 40 }} />}
              value={footerStats.placement}
              label="Placement %"
              href="/research/stats/placements"
              suffix="%+"
              isVisible={isVisible}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 1.5 }}>
            <StatItem
              icon={<Public sx={{ fontSize: 40 }} />}
              value={footerStats.patents}
              label="Patents"
              href="/research/stats/patents"
              isVisible={isVisible}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 1.5 }}>
            <StatItem
              icon={<Extension sx={{ fontSize: 40 }} />}
              value={footerStats.projects}
              label="Projects"
              href="/research/stats/projects"
              isVisible={isVisible}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 1.5 }}>
            <StatItemText
              icon={<CurrencyRupee sx={{ fontSize: 40 }} />}
              value={`${footerStats.projectGrants} Cr+`}
              label="Project Grants"
              href="/research/stats/grants"
              isVisible={isVisible}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 1.5 }}>
            <StatItem
              icon={<FormatQuote sx={{ fontSize: 40 }} />}
              value={footerStats.googleScholarCitations}
              label="Citations"
              href="/research/stats/citations"
              isVisible={isVisible}
            />
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ borderColor: 'grey.800' }} />

      {/* Info Section */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" color="secondary.main" gutterBottom>
              Department of Electrical Engineering
            </Typography>
            <Typography variant="body2" color="grey.400">
              Silicon Building, Pod 1A
              <br />
              Indian Institute of Technology Indore
              <br />
              Khandwa Road, Simrol
              <br />
              Indore, Madhya Pradesh 453552
            </Typography>
            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Mail fontSize="small" />
              <Link href="mailto:hodee@iiti.ac.in" style={{ color: 'white' }}>
                hodee@iiti.ac.in
              </Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" color="secondary.main" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Link href="/about" style={{ color: '#B7B7c7' }}>About</Link>
              <Link href="/people/faculty" style={{ color: '#B7B7c7' }}>Faculty</Link>
              <Link href="/research" style={{ color: '#B7B7c7' }}>Research</Link>
              <Link href="/courses/btech" style={{ color: '#B7B7c7' }}>Courses</Link>
              <Link href="/achievements/books" style={{ color: '#B7B7c7' }}>Achievements</Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" color="secondary.main" gutterBottom>
              Connect With Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                component="a"
                href="https://www.facebook.com/people/IIT-Indore/100064798209779/"
                target="_blank"
                sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                component="a"
                href="https://instagram.com/eesa_iiti"
                target="_blank"
                sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com/IITIOfficial"
                target="_blank"
                sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                component="a"
                href="https://in.linkedin.com/in/department-of-electrical-engineering-iit-indore-00801738b"
                target="_blank"
                sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Copyright */}
      <Box sx={{ bgcolor: 'rgba(13, 13, 26, 0.9)', py: 2, textAlign: 'center' }}>
        <Typography variant="body2" color="grey.500">
          © {new Date().getFullYear()} Department of Electrical Engineering, IIT Indore - All Rights Reserved
        </Typography>
      </Box>
      </Box>
    </Box>
  );
}
