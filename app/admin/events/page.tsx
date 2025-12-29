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
  Avatar,
} from '@mui/material';
import { Edit, Delete, Add, CloudUpload } from '@mui/icons-material';

interface EventItem {
  id: number;
  title: string;
  description: string;
  date: number;
  month: string;
  day: string;
  time: string;
  link: string;
}

const EVENT_PLACEHOLDER = '/images/logos/event-placeholder.jpg';

export default function EventsAdminPage() {
  const [data, setData] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<EventItem | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    month: '',
    day: '',
    time: '',
    link: '',
  });
  const [saving, setSaving] = useState(false);

  // Image upload state
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [uploading, setUploading] = useState(false);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletingItem, setDeletingItem] = useState<EventItem | null>(null);

  const getEventImagePath = (id: number) => `/images/events/event-${id}.jpg`;

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
    setFormData({
      title: '',
      description: '',
      date: '',
      month: '',
      day: '',
      time: '',
      link: '',
    });
    setImageFile(null);
    setImagePreview('');
    setDialogOpen(true);
  };

  const handleEdit = (item: EventItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title || '',
      description: item.description || '',
      date: String(item.date || ''),
      month: item.month || '',
      day: item.day || '',
      time: item.time || '',
      link: item.link || '',
    });
    setImageFile(null);
    setImagePreview(getEventImagePath(item.id));
    setDialogOpen(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const uploadImage = async (eventId: number) => {
    if (!imageFile) return;

    setUploading(true);
    try {
      const uploadData = new FormData();
      uploadData.append('file', imageFile);
      uploadData.append('folder', 'events');
      uploadData.append('filename', `event-${eventId}.jpg`);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: uploadData,
      });

      if (!res.ok) throw new Error('Upload failed');
    } catch (err) {
      console.error('Image upload error:', err);
      setError('Event saved but image upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!formData.title?.trim()) {
      setError('Title is required');
      return;
    }

    setSaving(true);
    setError('');

    try {
      const url = editingItem
        ? `/api/events/${editingItem.id}`
        : '/api/events';

      const payload: Record<string, unknown> = { ...formData };
      if (payload.date) payload.date = parseInt(payload.date as string) || 1;

      const res = await fetch(url, {
        method: editingItem ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to save');

      const result = await res.json();
      const eventId = editingItem?.id || result.id;

      // Upload image if one was selected
      if (imageFile && eventId) {
        await uploadImage(eventId);
      }

      setDialogOpen(false);
      setSuccess(editingItem ? 'Event updated!' : 'Event created!');
      fetchData();
      setTimeout(() => setSuccess(''), 3000);
    } catch {
      setError('Failed to save event');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deletingItem) return;

    try {
      const res = await fetch(`/api/events/${deletingItem.id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete');

      setDeleteDialogOpen(false);
      setDeletingItem(null);
      setSuccess('Event deleted!');
      fetchData();
      setTimeout(() => setSuccess(''), 3000);
    } catch {
      setError('Failed to delete event');
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
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      <Alert severity="info" sx={{ mb: 2 }}>
        Event images are stored at <code>/images/events/event-[id].jpg</code>. Upload an image when creating or editing an event.
      </Alert>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'grey.100' }}>
                <TableCell>ID</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>
                    <Avatar
                      src={getEventImagePath(item.id)}
                      variant="rounded"
                      sx={{ width: 60, height: 40 }}
                      imgProps={{
                        onError: (e) => {
                          (e.target as HTMLImageElement).src = EVENT_PLACEHOLDER;
                        },
                      }}
                    />
                  </TableCell>
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
                  <TableCell colSpan={6} align="center">
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
            {/* Image Upload */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
              <Box
                component="img"
                src={imagePreview || EVENT_PLACEHOLDER}
                alt="Event preview"
                sx={{
                  width: '100%',
                  maxWidth: 300,
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: 1,
                  border: '1px solid',
                  borderColor: 'grey.300',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = EVENT_PLACEHOLDER;
                }}
              />
              <Button
                component="label"
                variant="outlined"
                startIcon={uploading ? <CircularProgress size={16} /> : <CloudUpload />}
                disabled={uploading}
              >
                {uploading ? 'Uploading...' : 'Upload Image'}
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageChange}
                />
              </Button>
              {editingItem && (
                <Typography variant="caption" color="text.secondary">
                  Image will be saved as: event-{editingItem.id}.jpg
                </Typography>
              )}
              {!editingItem && (
                <Typography variant="caption" color="text.secondary">
                  Image will be uploaded after creating the event
                </Typography>
              )}
            </Box>

            <TextField
              label="Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              fullWidth
            />
            <TextField
              label="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              multiline
              rows={3}
              fullWidth
            />
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="Date (day of month)"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                type="number"
                sx={{ flex: 1 }}
              />
              <TextField
                label="Month"
                value={formData.month}
                onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                placeholder="e.g., January"
                sx={{ flex: 1 }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="Day of week"
                value={formData.day}
                onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                placeholder="e.g., Monday"
                sx={{ flex: 1 }}
              />
              <TextField
                label="Time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                placeholder="e.g., 10:00 AM"
                sx={{ flex: 1 }}
              />
            </Box>
            <TextField
              label="Link URL (optional)"
              value={formData.link}
              onChange={(e) => setFormData({ ...formData, link: e.target.value })}
              placeholder="https://..."
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" disabled={saving || uploading}>
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
