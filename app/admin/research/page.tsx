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

interface ResearchArea {
  id: number;
  specialization: string;
  person: string;
  description: string;
  name: string;
  link: string;
}

interface Project {
  id: number;
  title: string;
  worker: string;
  funding: string;
  duration: string;
  project_type: string;
}

const SPECIALIZATIONS = [
  'Communications & Signal Processing',
  'Control Systems',
  'Microelectronics & VLSI',
  'Power Electronics & Power Systems',
  'RF & Microwave Engineering',
];

const PROJECT_TYPES = ['sponsored', 'consultancy'];

export default function ResearchAdminPage() {
  const [activeTab, setActiveTab] = useState(0); // 0 = Research Areas, 1 = Projects
  const [data, setData] = useState<(ResearchArea | Project)[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ResearchArea | Project | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);

  // Delete dialog
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletingItem, setDeletingItem] = useState<ResearchArea | Project | null>(null);

  const isResearchTab = activeTab === 0;

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const url = isResearchTab ? '/api/research/areas' : '/api/research/projects';
      const res = await fetch(url);
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
    if (isResearchTab) {
      setFormData({
        specialization: '',
        person: '',
        description: '',
        name: '',
        link: '',
      });
    } else {
      setFormData({
        title: '',
        worker: '',
        funding: '',
        duration: '',
        project_type: 'sponsored',
      });
    }
    setDialogOpen(true);
  };

  const handleEdit = (item: ResearchArea | Project) => {
    setEditingItem(item);
    if (isResearchTab) {
      const research = item as ResearchArea;
      setFormData({
        specialization: research.specialization || '',
        person: research.person || '',
        description: research.description || '',
        name: research.name || '',
        link: research.link || '',
      });
    } else {
      const project = item as Project;
      setFormData({
        title: project.title || '',
        worker: project.worker || '',
        funding: project.funding || '',
        duration: project.duration || '',
        project_type: project.project_type || 'sponsored',
      });
    }
    setDialogOpen(true);
  };

  const handleSave = async () => {
    const requiredField = isResearchTab ? formData.name : formData.title;
    if (!requiredField?.trim()) {
      setError(isResearchTab ? 'Name is required' : 'Title is required');
      return;
    }

    setSaving(true);
    setError('');

    try {
      const baseUrl = isResearchTab ? '/api/research/areas' : '/api/research/projects';
      const url = editingItem ? `${baseUrl}/${editingItem.id}` : baseUrl;

      const res = await fetch(url, {
        method: editingItem ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
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
      const baseUrl = isResearchTab ? '/api/research/areas' : '/api/research/projects';
      const res = await fetch(`${baseUrl}/${deletingItem.id}`, {
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

  const getItemName = (item: ResearchArea | Project) => {
    return isResearchTab ? (item as ResearchArea).name : (item as Project).title;
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" fontWeight="bold">
          Research
        </Typography>
        <Button variant="contained" startIcon={<Add />} onClick={handleAdd}>
          Add {isResearchTab ? 'Research Area' : 'Project'}
        </Button>
      </Box>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      <Paper sx={{ mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Research Areas" />
          <Tab label="Projects" />
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
                {isResearchTab ? (
                  <>
                    <TableCell>Name</TableCell>
                    <TableCell>Specialization</TableCell>
                    <TableCell>Person</TableCell>
                    <TableCell>Description</TableCell>
                  </>
                ) : (
                  <>
                    <TableCell>Title</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Worker</TableCell>
                    <TableCell>Funding</TableCell>
                    <TableCell>Duration</TableCell>
                  </>
                )}
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell>{item.id}</TableCell>
                  {isResearchTab ? (
                    <>
                      <TableCell>
                        <Typography fontWeight={500}>
                          {(item as ResearchArea).name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={(item as ResearchArea).specialization || '-'}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell>{(item as ResearchArea).person || '-'}</TableCell>
                      <TableCell>
                        <Typography
                          variant="body2"
                          sx={{
                            maxWidth: 200,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {(item as ResearchArea).description || '-'}
                        </Typography>
                      </TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell>
                        <Typography fontWeight={500}>
                          {(item as Project).title}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={(item as Project).project_type || '-'}
                          size="small"
                          color={(item as Project).project_type === 'sponsored' ? 'primary' : 'secondary'}
                        />
                      </TableCell>
                      <TableCell>{(item as Project).worker || '-'}</TableCell>
                      <TableCell>{(item as Project).funding || '-'}</TableCell>
                      <TableCell>{(item as Project).duration || '-'}</TableCell>
                    </>
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
                  <TableCell colSpan={isResearchTab ? 6 : 7} align="center" sx={{ py: 4 }}>
                    <Typography color="text.secondary">
                      No {isResearchTab ? 'research areas' : 'projects'} found
                    </Typography>
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
          {editingItem ? 'Edit' : 'Add'} {isResearchTab ? 'Research Area' : 'Project'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {isResearchTab ? (
              <>
                <TextField
                  label="Name"
                  value={formData.name || ''}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  fullWidth
                />
                <FormControl fullWidth>
                  <InputLabel>Specialization</InputLabel>
                  <Select
                    value={formData.specialization || ''}
                    label="Specialization"
                    onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                  >
                    <MenuItem value="">None</MenuItem>
                    {SPECIALIZATIONS.map((s) => (
                      <MenuItem key={s} value={s}>{s}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  label="Person"
                  value={formData.person || ''}
                  onChange={(e) => setFormData({ ...formData, person: e.target.value })}
                  fullWidth
                />
                <TextField
                  label="Description"
                  value={formData.description || ''}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  multiline
                  rows={3}
                  fullWidth
                />
                <TextField
                  label="Link"
                  value={formData.link || ''}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  placeholder="https://..."
                  fullWidth
                />
              </>
            ) : (
              <>
                <TextField
                  label="Title"
                  value={formData.title || ''}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  fullWidth
                />
                <FormControl fullWidth>
                  <InputLabel>Project Type</InputLabel>
                  <Select
                    value={formData.project_type || 'sponsored'}
                    label="Project Type"
                    onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
                  >
                    {PROJECT_TYPES.map((t) => (
                      <MenuItem key={t} value={t}>
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  label="Worker/PI"
                  value={formData.worker || ''}
                  onChange={(e) => setFormData({ ...formData, worker: e.target.value })}
                  fullWidth
                />
                <TextField
                  label="Funding"
                  value={formData.funding || ''}
                  onChange={(e) => setFormData({ ...formData, funding: e.target.value })}
                  fullWidth
                />
                <TextField
                  label="Duration"
                  value={formData.duration || ''}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  placeholder="e.g., 2023-2025"
                  fullWidth
                />
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
            Are you sure you want to delete &quot;{deletingItem && getItemName(deletingItem)}&quot;?
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
