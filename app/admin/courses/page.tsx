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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';

interface Course {
  id: number;
  code?: string;
  course_code?: string;
  name: string;
  credit: number;
  ltp: string;
  program: string;
  semester?: number;
  elective?: number;
}

const PROGRAMS = ['BTech', 'MTech', 'PhD'];

export default function CoursesAdminPage() {
  const [activeTab, setActiveTab] = useState(0); // 0 = old, 1 = new
  const [data, setData] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Filters
  const [filterProgram, setFilterProgram] = useState('');
  const [filterSemester, setFilterSemester] = useState('');

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Course | null>(null);
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    credit: '',
    ltp: '',
    program: 'BTech',
    semester: '',
    elective: '0',
  });
  const [saving, setSaving] = useState(false);

  // Delete dialog
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletingItem, setDeletingItem] = useState<Course | null>(null);

  const format = activeTab === 0 ? 'old' : 'new';

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      let url = `/api/courses?format=${format}`;
      if (filterProgram) url += `&program=${filterProgram}`;
      if (filterSemester && format === 'new') url += `&semester=${filterSemester}`;

      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    } catch {
      setError('Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activeTab, filterProgram, filterSemester]);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    setFilterProgram('');
    setFilterSemester('');
  };

  const handleAdd = () => {
    setEditingItem(null);
    setFormData({
      code: '',
      name: '',
      credit: '',
      ltp: '',
      program: 'BTech',
      semester: '',
      elective: '0',
    });
    setDialogOpen(true);
  };

  const handleEdit = (item: Course) => {
    setEditingItem(item);
    setFormData({
      code: item.code || item.course_code || '',
      name: item.name || '',
      credit: String(item.credit || ''),
      ltp: item.ltp || '',
      program: item.program || 'BTech',
      semester: String(item.semester || ''),
      elective: String(item.elective || '0'),
    });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!formData.name.trim()) {
      setError('Course name is required');
      return;
    }

    setSaving(true);
    setError('');

    try {
      const payload: Record<string, unknown> = {
        format,
        name: formData.name,
        credit: parseFloat(formData.credit) || 0,
        ltp: formData.ltp,
        program: formData.program,
      };

      if (format === 'old') {
        payload.course_code = formData.code;
      } else {
        payload.code = formData.code;
        payload.semester = parseInt(formData.semester) || 1;
        payload.elective = parseInt(formData.elective) || 0;
      }

      const url = editingItem
        ? `/api/courses/${editingItem.id}`
        : '/api/courses';

      const res = await fetch(url, {
        method: editingItem ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to save');

      setDialogOpen(false);
      setSuccess(editingItem ? 'Course updated!' : 'Course created!');
      fetchData();
      setTimeout(() => setSuccess(''), 3000);
    } catch {
      setError('Failed to save course');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deletingItem) return;

    try {
      const res = await fetch(`/api/courses/${deletingItem.id}?format=${format}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete');

      setDeleteDialogOpen(false);
      setDeletingItem(null);
      setSuccess('Course deleted!');
      fetchData();
      setTimeout(() => setSuccess(''), 3000);
    } catch {
      setError('Failed to delete course');
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" fontWeight="bold">
          Courses
        </Typography>
        <Button variant="contained" startIcon={<Add />} onClick={handleAdd}>
          Add Course
        </Button>
      </Box>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      <Paper sx={{ mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Old Curriculum (before 2023)" />
          <Tab label="New Curriculum (after 2023)" />
        </Tabs>
      </Paper>

      {/* Filters */}
      <Paper sx={{ p: 2, mb: 2, display: 'flex', gap: 2 }}>
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Program</InputLabel>
          <Select
            value={filterProgram}
            label="Program"
            onChange={(e) => setFilterProgram(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            {PROGRAMS.map((p) => (
              <MenuItem key={p} value={p}>{p}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {format === 'new' && (
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel>Semester</InputLabel>
            <Select
              value={filterSemester}
              label="Semester"
              onChange={(e) => setFilterSemester(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                <MenuItem key={s} value={s}>Semester {s}</MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
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
                <TableCell>Code</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Credits</TableCell>
                <TableCell>L-T-P</TableCell>
                <TableCell>Program</TableCell>
                {format === 'new' && <TableCell>Semester</TableCell>}
                {format === 'new' && <TableCell>Elective</TableCell>}
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell>
                    <Chip label={item.code || item.course_code || '-'} size="small" />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.credit}</TableCell>
                  <TableCell>{item.ltp || '-'}</TableCell>
                  <TableCell>{item.program}</TableCell>
                  {format === 'new' && <TableCell>{item.semester}</TableCell>}
                  {format === 'new' && (
                    <TableCell>
                      {item.elective ? (
                        <Chip label="Yes" size="small" color="secondary" />
                      ) : (
                        <Chip label="No" size="small" variant="outlined" />
                      )}
                    </TableCell>
                  )}
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
                  <TableCell colSpan={format === 'new' ? 8 : 6} align="center" sx={{ py: 4 }}>
                    <Typography color="text.secondary">No courses found</Typography>
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
          {editingItem ? 'Edit Course' : 'Add Course'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Course Code"
              value={formData.code}
              onChange={(e) => setFormData({ ...formData, code: e.target.value })}
              fullWidth
            />
            <TextField
              label="Course Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              fullWidth
            />
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="Credits"
                value={formData.credit}
                onChange={(e) => setFormData({ ...formData, credit: e.target.value })}
                type="number"
                sx={{ flex: 1 }}
              />
              <TextField
                label="L-T-P"
                value={formData.ltp}
                onChange={(e) => setFormData({ ...formData, ltp: e.target.value })}
                placeholder="3-1-0"
                sx={{ flex: 1 }}
              />
            </Box>
            <FormControl fullWidth>
              <InputLabel>Program</InputLabel>
              <Select
                value={formData.program}
                label="Program"
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
              >
                {PROGRAMS.map((p) => (
                  <MenuItem key={p} value={p}>{p}</MenuItem>
                ))}
              </Select>
            </FormControl>
            {format === 'new' && (
              <>
                <FormControl fullWidth>
                  <InputLabel>Semester</InputLabel>
                  <Select
                    value={formData.semester}
                    label="Semester"
                    onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                      <MenuItem key={s} value={s}>Semester {s}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>Elective</InputLabel>
                  <Select
                    value={formData.elective}
                    label="Elective"
                    onChange={(e) => setFormData({ ...formData, elective: e.target.value })}
                  >
                    <MenuItem value="0">No</MenuItem>
                    <MenuItem value="1">Yes</MenuItem>
                  </Select>
                </FormControl>
              </>
            )}
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
