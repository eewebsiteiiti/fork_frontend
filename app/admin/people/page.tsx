'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
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
import { Edit, Delete, Add, Search } from '@mui/icons-material';

const PEOPLE_TYPES = [
  { value: 'faculty', label: 'Faculty' },
  { value: 'staff', label: 'Staff' },
  { value: 'btech', label: 'B.Tech' },
  { value: 'mtech', label: 'M.Tech' },
  { value: 'phd', label: 'Ph.D' },
  { value: 'ms', label: 'M.S.' },
  { value: 'alumni', label: 'Alumni' },
];

const FACULTY_FIELDS = [
  { key: 'name', label: 'Name', required: true },
  { key: 'title', label: 'Title' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'details', label: 'Research Areas', multiline: true },
  { key: 'address', label: 'Office Address' },
  { key: 'link', label: 'Website URL' },
  { key: 'place', label: 'Alma Mater' },
  { key: 'subtitle', label: 'Position/Role' },
  { key: 'image', label: 'Image Path' },
];

const STUDENT_FIELDS = [
  { key: 'name', label: 'Name', required: true },
  { key: 'roll_no', label: 'Roll Number' },
  { key: 'year', label: 'Year', type: 'number' },
  { key: 'image', label: 'Image Path' },
];

const ALUMNI_FIELDS = [
  ...STUDENT_FIELDS,
  { key: 'program', label: 'Program' },
  { key: 'date', label: 'Graduation Date' },
];

interface Person {
  id: number;
  name: string;
  [key: string]: unknown;
}

export default function PeopleAdminPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialType = searchParams.get('type') || 'faculty';

  const [activeTab, setActiveTab] = useState(PEOPLE_TYPES.findIndex(t => t.value === initialType) || 0);
  const [data, setData] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Person | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);

  // Delete dialog
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletingItem, setDeletingItem] = useState<Person | null>(null);

  const currentType = PEOPLE_TYPES[activeTab].value;

  const getFields = () => {
    if (currentType === 'faculty' || currentType === 'staff') return FACULTY_FIELDS;
    if (currentType === 'alumni') return ALUMNI_FIELDS;
    return STUDENT_FIELDS;
  };

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/people/${currentType}`);
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
  }, [currentType]);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    router.push(`/admin/people?type=${PEOPLE_TYPES[newValue].value}`);
  };

  const handleAdd = () => {
    setEditingItem(null);
    setFormData({});
    setDialogOpen(true);
  };

  const handleEdit = (item: Person) => {
    setEditingItem(item);
    const fields = getFields();
    const data: Record<string, string> = {};
    fields.forEach(f => {
      data[f.key] = String(item[f.key] || '');
    });
    setFormData(data);
    setDialogOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const url = editingItem
        ? `/api/people/${currentType}/${editingItem.id}`
        : `/api/people/${currentType}`;

      const res = await fetch(url, {
        method: editingItem ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
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
      const res = await fetch(`/api/people/${currentType}/${deletingItem.id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete');

      setDeleteDialogOpen(false);
      setDeletingItem(null);
      fetchData();
    } catch {
      setError('Failed to delete');
    }
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" fontWeight="bold">
          People Management
        </Typography>
        <Button variant="contained" startIcon={<Add />} onClick={handleAdd}>
          Add {PEOPLE_TYPES[activeTab].label}
        </Button>
      </Box>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <Paper sx={{ mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange} variant="scrollable">
          {PEOPLE_TYPES.map((type) => (
            <Tab key={type.value} label={type.label} />
          ))}
        </Tabs>
      </Paper>

      <Paper sx={{ p: 2, mb: 2 }}>
        <TextField
          fullWidth
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: <Search sx={{ mr: 1, color: 'grey.500' }} />,
          }}
          size="small"
        />
      </Paper>

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
                <TableCell>Name</TableCell>
                {currentType === 'faculty' && <TableCell>Title</TableCell>}
                {currentType === 'faculty' && <TableCell>Email</TableCell>}
                {['btech', 'mtech', 'phd', 'ms', 'alumni'].includes(currentType) && (
                  <TableCell>Year</TableCell>
                )}
                {['btech', 'mtech', 'phd', 'ms', 'alumni'].includes(currentType) && (
                  <TableCell>Roll No</TableCell>
                )}
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  {currentType === 'faculty' && <TableCell>{item.title as string}</TableCell>}
                  {currentType === 'faculty' && <TableCell>{item.email as string}</TableCell>}
                  {['btech', 'mtech', 'phd', 'ms', 'alumni'].includes(currentType) && (
                    <TableCell>
                      <Chip label={item.year as number} size="small" />
                    </TableCell>
                  )}
                  {['btech', 'mtech', 'phd', 'ms', 'alumni'].includes(currentType) && (
                    <TableCell>{item.roll_no as string}</TableCell>
                  )}
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
              {filteredData.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No records found
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
          {editingItem ? 'Edit' : 'Add'} {PEOPLE_TYPES[activeTab].label}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {getFields().map((field) => (
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

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete &quot;{deletingItem?.name}&quot;? This action cannot be undone.
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
