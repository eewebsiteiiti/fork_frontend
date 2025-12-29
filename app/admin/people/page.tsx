'use client';

import { useState, useEffect, useRef } from 'react';
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
  TablePagination,
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
  Avatar,
} from '@mui/material';
import { Edit, Delete, Add, Search, CloudUpload } from '@mui/icons-material';

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
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Person | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);

  // Image upload state
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [pendingImageFile, setPendingImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      const params = new URLSearchParams({
        page: page.toString(),
        limit: rowsPerPage.toString(),
      });
      if (debouncedSearch) {
        params.set('search', debouncedSearch);
      }

      const res = await fetch(`/api/people/${currentType}?${params}`);
      const json = await res.json();

      setData(json.data);
      setTotalCount(json.total);
    } catch {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(0);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  // Fetch data when dependencies change
  useEffect(() => {
    fetchData();
  }, [currentType, page, rowsPerPage, debouncedSearch]);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    setPage(0);
    setSearch('');
    setDebouncedSearch('');
    router.push(`/admin/people?type=${PEOPLE_TYPES[newValue].value}`);
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAdd = () => {
    setEditingItem(null);
    setFormData({});
    setImagePreview(null);
    setPendingImageFile(null);
    setDialogOpen(true);
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Store file for later upload
    setPendingImageFile(file);

    // Show preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const uploadImage = async (filename: string): Promise<string | null> => {
    if (!pendingImageFile) return null;

    setUploading(true);
    try {
      const uploadData = new FormData();
      uploadData.append('file', pendingImageFile);
      uploadData.append('folder', currentType);
      uploadData.append('filename', filename);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: uploadData,
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Upload failed');
      }

      const { url } = await res.json();
      return url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload image');
      return null;
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (item: Person) => {
    setEditingItem(item);
    const fields = getFields();
    const data: Record<string, string> = {};
    fields.forEach(f => {
      data[f.key] = String(item[f.key] || '');
    });
    setFormData(data);
    setImagePreview(item.image ? String(item.image) : null);
    setPendingImageFile(null);
    setDialogOpen(true);
  };

  const getImageFilename = (): string => {
    const isStudent = ['btech', 'mtech', 'phd', 'ms', 'alumni'].includes(currentType);

    if (isStudent && formData.roll_no) {
      // For students, use roll number as filename
      return `${formData.roll_no}.jpg`;
    } else if (formData.name) {
      // For faculty/staff, use slugified name
      const slug = formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return `${slug}.jpg`;
    }
    // Fallback to timestamp
    return `upload-${Date.now()}.jpg`;
  };

  const handleSave = async () => {
    // Validate required fields
    const isStudent = ['btech', 'mtech', 'phd', 'ms', 'alumni'].includes(currentType);
    if (isStudent && pendingImageFile && !formData.roll_no) {
      setError('Roll number is required when uploading an image for students');
      return;
    }

    setSaving(true);
    setError('');

    try {
      // Upload image first if there's a pending file
      let imageUrl = formData.image;
      if (pendingImageFile) {
        const filename = getImageFilename();
        const uploadedUrl = await uploadImage(filename);
        if (uploadedUrl) {
          imageUrl = uploadedUrl;
        }
      }

      // Save the person data
      const url = editingItem
        ? `/api/people/${currentType}/${editingItem.id}`
        : `/api/people/${currentType}`;

      const payload = { ...formData };
      if (imageUrl) {
        payload.image = imageUrl;
      }

      const res = await fetch(url, {
        method: editingItem ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to save');

      setDialogOpen(false);
      setPendingImageFile(null);
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
              {data.map((item) => (
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
              {data.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No records found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={totalCount}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25, 50]}
          />
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
              field.key === 'image' ? (
                <Box key={field.key}>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    Photo
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      src={imagePreview || formData.image || ''}
                      sx={{ width: 80, height: 80 }}
                    />
                    <Box>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageSelect}
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                      />
                      <Button
                        variant="outlined"
                        startIcon={uploading ? <CircularProgress size={16} /> : <CloudUpload />}
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                      >
                        {uploading ? 'Uploading...' : 'Upload Image'}
                      </Button>
                      {pendingImageFile && (
                        <Typography variant="caption" display="block" sx={{ mt: 0.5, color: 'success.main' }}>
                          Will be saved as: {getImageFilename()}
                        </Typography>
                      )}
                      {!pendingImageFile && formData.image && (
                        <Typography variant="caption" display="block" sx={{ mt: 0.5, color: 'text.secondary' }}>
                          Current: {formData.image}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Box>
              ) : (
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
              )
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" disabled={saving || uploading}>
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
