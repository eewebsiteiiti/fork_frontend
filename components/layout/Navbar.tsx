'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Paper,
  Container,
} from '@mui/material';
import { Menu as MenuIcon, ExpandLess, ExpandMore, KeyboardArrowRight, Close } from '@mui/icons-material';
import { navData, NavItem } from '@/config/nav-data';

function NavMenuItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Box
        component={Link}
        href={item.href || '#'}
        sx={{
          color: 'white',
          textDecoration: 'none',
          px: 3,
          py: 1.5,
          fontSize: '0.95rem',
          fontWeight: 500,
          transition: 'all 0.2s',
          '&:hover': {
            bgcolor: 'rgba(255,255,255,0.15)',
          },
        }}
      >
        {item.label}
      </Box>
    );
  }

  return (
    <Box
      sx={{ position: 'relative' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Box
        sx={{
          color: 'white',
          px: 3,
          py: 1.5,
          fontSize: '0.95rem',
          fontWeight: 500,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          transition: 'all 0.2s',
          '&:hover': {
            bgcolor: 'rgba(255,255,255,0.15)',
          },
        }}
      >
        {item.label}
        <ExpandMore sx={{ fontSize: 18, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }} />
      </Box>

      {open && (
        <Paper
          elevation={8}
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            minWidth: 220,
            bgcolor: 'rgba(0, 2, 73, 0.95)',
            borderRadius: 0,
            zIndex: 1000,
            backdropFilter: 'blur(10px)',
          }}
        >
          {item.children.map((child, idx) => (
            <NavSubMenuItem key={idx} item={child} />
          ))}
        </Paper>
      )}
    </Box>
  );
}

function NavSubMenuItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Box
        component={item.external ? 'a' : Link}
        href={item.href || '#'}
        target={item.external ? '_blank' : undefined}
        sx={{
          display: 'block',
          color: 'white',
          textDecoration: 'none',
          px: 2.5,
          py: 1.2,
          fontSize: '0.9rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          transition: 'all 0.2s',
          '&:hover': {
            bgcolor: 'rgba(255,255,255,0.15)',
            pl: 3,
          },
        }}
      >
        {item.label}
      </Box>
    );
  }

  return (
    <Box
      sx={{ position: 'relative' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'white',
          px: 2.5,
          py: 1.2,
          fontSize: '0.9rem',
          cursor: 'pointer',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          transition: 'all 0.2s',
          '&:hover': {
            bgcolor: 'rgba(255,255,255,0.15)',
          },
        }}
      >
        {item.label}
        <KeyboardArrowRight sx={{ fontSize: 18 }} />
      </Box>

      {open && (
        <Paper
          elevation={8}
          sx={{
            position: 'absolute',
            top: 0,
            left: '100%',
            minWidth: 200,
            bgcolor: 'rgba(0, 2, 73, 0.95)',
            borderRadius: 0,
            zIndex: 1001,
            backdropFilter: 'blur(10px)',
          }}
        >
          {item.children.map((child, idx) => (
            <Box
              key={idx}
              component={child.external ? 'a' : Link}
              href={child.href || '#'}
              target={child.external ? '_blank' : undefined}
              sx={{
                display: 'block',
                color: 'white',
                textDecoration: 'none',
                px: 2.5,
                py: 1.2,
                fontSize: '0.9rem',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.15)',
                  pl: 3,
                },
              }}
            >
              {child.label}
            </Box>
          ))}
        </Paper>
      )}
    </Box>
  );
}

function MobileNavItem({ item, depth = 0, onClose }: { item: NavItem; depth?: number; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <ListItem disablePadding>
        <ListItemButton
          component={item.external ? 'a' : Link}
          href={item.href || '#'}
          target={item.external ? '_blank' : undefined}
          sx={{ pl: 2 + depth * 2 }}
          onClick={onClose}
        >
          <ListItemText primary={item.label} />
        </ListItemButton>
      </ListItem>
    );
  }

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={() => setOpen(!open)} sx={{ pl: 2 + depth * 2 }}>
          <ListItemText primary={item.label} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.children.map((child, idx) => (
            <MobileNavItem key={idx} item={child} depth={depth + 1} onClose={onClose} />
          ))}
        </List>
      </Collapse>
    </>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Main Navbar - Transparent overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          bgcolor: 'rgba(0, 2, 73, 0.3)',
          backdropFilter: 'blur(5px)',
        }}
      >
        {/* Top Row - Logo and Institute Name */}
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: 1.5,
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {/* Left - IITI Logo and Name */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Link href="https://www.iiti.ac.in/" target="_blank">
                <Box
                  component="img"
                  src="/images/logos/iiti-logo.png"
                  alt="IIT Indore"
                  sx={{ height: { xs: 50, md: 70 } }}
                />
              </Link>
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <Typography
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      fontSize: { xs: '0.9rem', md: '1.1rem' },
                      letterSpacing: '0.5px',
                    }}
                  >
                    INDIAN INSTITUTE OF TECHNOLOGY INDORE
                  </Typography>
                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      fontSize: { xs: '0.75rem', md: '0.9rem' },
                      letterSpacing: '0.3px',
                    }}
                  >
                    DEPARTMENT OF ELECTRICAL ENGINEERING
                  </Typography>
                </Box>
              </Link>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{ display: { lg: 'none' }, color: 'white' }}
            >
              <MenuIcon sx={{ fontSize: 30 }} />
            </IconButton>

            {/* Right - EE Logo */}
            <Box
              component="img"
              src="/images/logos/ee-logo.jpg"
              alt="EE Dept"
              sx={{
                height: { xs: 50, md: 100 },
                display: { xs: 'none', md: 'block' },
                borderRadius: 1,
                border: '2px solid rgba(255,255,255,0.3)',
              }}
            />
          </Box>
        </Container>

        {/* Bottom Row - Navigation Links */}
        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
          <Container maxWidth="xl">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box
                component={Link}
                href="/"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  px: 3,
                  py: 1.5,
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  transition: 'all 0.2s',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.15)',
                  },
                }}
              >
                Home
              </Box>
              {navData.map((item, idx) => (
                <NavMenuItem key={idx} item={item} />
              ))}
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: { width: 300 },
        }}
      >
        <Box sx={{ bgcolor: 'primary.main', p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h6" color="white" fontWeight={600}>
              EE Department
            </Typography>
            <Typography variant="body2" color="rgba(255,255,255,0.8)">
              IIT Indore
            </Typography>
          </Box>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: 'white' }}>
            <Close />
          </IconButton>
        </Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/" onClick={() => setMobileOpen(false)}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          {navData.map((item, idx) => (
            <MobileNavItem key={idx} item={item} onClose={() => setMobileOpen(false)} />
          ))}
        </List>
      </Drawer>
    </>
  );
}
