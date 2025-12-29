'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
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
  Chip,
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';

const ACHIEVEMENT_TYPES = [
  { value: 'books', label: 'Books', apiType: 'books' },
  { value: 'faculty-awards', label: 'Faculty Awards', apiType: 'faculty-awards' },
  { value: 'student-awards', label: 'Student Awards', apiType: 'student-awards' },
  { value: 'patents', label: 'Patents', apiType: 'patents' },
];

interface AchievementItem {
  id: number;
  year?: number;
  name: string;
  author?: string;
  publication?: string;
  award?: string;
  roll_no?: string;
  pi?: string;
  uuid?: string;
  status?: string;
  image?: string;
}

const FIELDS_BY_TYPE: Record<string, { key: string; label: string; multiline?: boolean }[]> = {
  books: [
    { key: 'year', label: 'Year' },
    { key: 'name', label: 'Book Title' },
    { key: 'author', label: 'Author(s)' },
    { key: 'publication', label: 'Publisher' },
  ],
  'faculty-awards': [
    { key: 'year', label: 'Year' },
    { key: 'name', label: 'Faculty Name' },
    { key: 'award', label: 'Award', multiline: true },
  ],
  'student-awards': [
    { key: 'year', label: 'Year' },
    { key: 'name', label: 'Student Name' },
    { key: 'roll_no', label: 'Roll Number' },
    { key: 'award', label: 'Award', multiline: true },
  ],
  patents: [
    { key: 'year', label: 'Year' },
    { key: 'name', label: 'Patent Title', multiline: true },
    { key: 'pi', label: 'PI/Inventors' },
    { key: 'uuid', label: 'Application No.' },
    { key: 'status', label: 'Status' },
  ],
};

export default function AchievementsAdminPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState<AchievementItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<AchievementItem | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);

  // Delete dialog
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletingItem, setDeletingItem] = useState<AchievementItem | null>(null);

  const currentType = ACHIEVEMENT_TYPES[activeTab];
  const fields = FIELDS_BY_TYPE[currentType.value];

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/achievements/${currentType.apiType}`);
      const json = await res.json();
      setData(json);
    } catch {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleAdd = () => {
    setEditingItem(null);
    const emptyForm: Record<string, string> = {};
    fields.forEach(f => { emptyForm[f.key] = ''; });
    setFormData(emptyForm);
    setDialogOpen(true);
  };

  const handleEdit = (item: AchievementItem) => {
    setEditingItem(item);
    const editForm: Record<string, string> = {};
    fields.forEach(f => {
      editForm[f.key] = String(item[f.key as keyof AchievementItem] || '');
    });
    setFormData(editForm);
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!formData.name?.trim()) {
      setError('Name/Title is required');
      return;
    }

    setSaving(true);
    setError('');

    try {
      const payload: Record<string, unknown> = { ...formData };
      if (payload.year) payload.year = parseInt(payload.year as string) || null;

      const url = editingItem
        ? `/api/achievements/${currentType.apiType}/${editingItem.id}`
        : `/api/achievements/${currentType.apiType}`;

      const res = await fetch(url, {
        method: editingItem ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to save');

      setDialogOpen(false);
      setSuccess(editingItem ? 'Updated successfully!' : 'Created successfully!');
      fetchData();
      setTimeout(() => setSuccess(''), 3000);
    } catch {
      setError('Failed to save');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deletingItem) return;

    try {
      const res = await fetch(`/api/achievements/${currentType.apiType}/${deletingItem.id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete');

      setDeleteDialogOpen(false);
      setDeletingItem(null);
      setSuccess('Deleted successfully!');
      fetchData();
      setTimeout(() => setSuccess(''), 3000);
    } catch {
      setError('Failed to delete');
    }
  };

  const getDisplayColumns = () => {
    switch (currentType.value) {
      case 'books':
        return ['Year', 'Title', 'Author', 'Publisher'];
      case 'faculty-awards':
        return ['Year', 'Name', 'Award'];
      case 'student-awards':
        return ['Year', 'Name', 'Roll No', 'Award'];
      case 'patents':
        return ['Year', 'Title', 'PI', 'Status'];
      default:
        return ['Year', 'Name'];
    }
  };

  const getCellValue = (item: AchievementItem, colIndex: number) => {
    switch (currentType.value) {
      case 'books':
        return [item.year, item.name, item.author, item.publication][colIndex];
      case 'faculty-awards':
        return [item.year, item.name, item.award][colIndex];
      case 'student-awards':
        return [item.year, item.name, item.roll_no, item.award][colIndex];
      case 'patents':
        return [item.year, item.name, item.pi, item.status][colIndex];
      default:
        return '';
    }
  };

  const columns = getDisplayColumns();

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" fontWeight="bold">
          Achievements
        </Typography>
        <Button variant="contained" startIcon={<Add />} onClick={handleAdd}>
          Add {currentType.label.replace(/s$/, '')}
        </Button>
      </Box>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      <Paper sx={{ mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange} variant="scrollable">
          {ACHIEVEMENT_TYPES.map((type) => (
            <Tab key={type.value} label={type.label} />
          ))}
        </Tabs>
      </Paper>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow sx={{ bgcolor: 'grey.100' }}>
                <TableCell>ID</TableCell>
                {columns.map((col) => (
                  <TableCell key={col}>{col}</TableCell>
                ))}
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell>{item.id}</TableCell>
                  {columns.map((_, colIndex) => (
                    <TableCell key={colIndex}>
                      {colIndex === 0 && getCellValue(item, colIndex) ? (
                        <Chip label={getCellValue(item, colIndex)} size="small" />
                      ) : (
                        <Typography
                          variant="body2"
                          sx={{
                            maxWidth: 200,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {getCellValue(item, colIndex) || '-'}
                        </Typography>
                      )}
                    </TableCell>
                  ))}
                  <TableCell align="right">
                    <IconButton onClick={() => handleEdit(item)} color="primary" size="small">
                      <Edit fontSize="small" />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        setDeletingItem(item);
                        setDeleteDialogOpen(true);
                      }}
                      color="error"
                      size="small"
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              {data.length === 0 && (
                <TableRow>
                  <TableCell colSpan={columns.length + 2} align="center" sx={{ py: 4 }}>
                    <Typography color="text.secondary">No records found</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Add/Edit Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingItem ? 'Edit' : 'Add'} {currentType.label.replace(/s$/, '')}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {fields.map((field) => (
              <TextField
                key={field.key}
                label={field.label}
                value={formData[field.key] || ''}
                onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                multiline={field.multiline}
                rows={field.multiline ? 3 : 1}
                type={field.key === 'year' ? 'number' : 'text'}
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

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete &quot;{deletingItem?.name}&quot;?
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
