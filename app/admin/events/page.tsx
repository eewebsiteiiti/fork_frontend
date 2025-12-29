'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
  CircularProgress,
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';

interface EventItem {
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

const EVENT_FIELDS = [
  { key: 'title', label: 'Title', required: true },
  { key: 'description', label: 'Description', multiline: true },
  { key: 'date', label: 'Date (day of month)', type: 'number' },
  { key: 'month', label: 'Month (e.g., January)' },
  { key: 'day', label: 'Day of week (e.g., Monday)' },
  { key: 'time', label: 'Time (e.g., 10:00)' },
  { key: 'image', label: 'Image Path' },
  { key: 'link', label: 'Link URL' },
];

export default function EventsAdminPage() {
  const [data, setData] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<EventItem | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletingItem, setDeletingItem] = useState<EventItem | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/events');
      const json = await res.json();
      setData(json);
    } catch {
      setError('Failed to fetch events');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = () => {
    setEditingItem(null);
    setFormData({});
    setDialogOpen(true);
  };

  const handleEdit = (item: EventItem) => {
    setEditingItem(item);
    const data: Record<string, string> = {};
    EVENT_FIELDS.forEach(f => {
      data[f.key] = String(item[f.key as keyof EventItem] || '');
    });
    setFormData(data);
    setDialogOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const url = editingItem ? `/api/events` : '/api/events';
      const method = editingItem ? 'PUT' : 'POST';

      // For updates, we need to include the ID
      const body = editingItem
        ? { ...formData, id: editingItem.id }
        : formData;

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error('Failed to save');

      setDialogOpen(false);
      fetchData();
    } catch {
      setError('Failed to save');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deletingItem) return;

    try {
      // Note: Would need a DELETE endpoint for individual items
      setDeleteDialogOpen(false);
      setDeletingItem(null);
      fetchData();
    } catch {
      setError('Failed to delete');
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" fontWeight="bold">
          Events Management
        </Typography>
        <Button variant="contained" startIcon={<Add />} onClick={handleAdd}>
          Add Event
        </Button>
      </Box>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{`${item.day}, ${item.month} ${item.date}`}</TableCell>
                  <TableCell>{item.time}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleEdit(item)} color="primary">
                      <Edit />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        setDeletingItem(item);
                        setDeleteDialogOpen(true);
                      }}
                      color="error"
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              {data.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No events found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Add/Edit Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{editingItem ? 'Edit' : 'Add'} Event</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {EVENT_FIELDS.map((field) => (
              <TextField
                key={field.key}
                label={field.label}
                value={formData[field.key] || ''}
                onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                required={field.required}
                multiline={field.multiline}
                rows={field.multiline ? 3 : 1}
                type={field.type || 'text'}
                fullWidth
              />
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" disabled={saving}>
            {saving ? <CircularProgress size={20} /> : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete &quot;{deletingItem?.title}&quot;?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
