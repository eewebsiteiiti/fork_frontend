import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, List, ListItem } from '@mui/material';
import PageLayout from '@/components/layout/PageLayout';

interface Committee {
  name: string;
  fullName: string;
  function: string;
  members: string[];
  email: string;
}

const committees: Committee[] = [
  {
    name: 'DPGC',
    fullName: 'Department Post Graduate Committee',
    function: 'The department has a DPGC to deal with all issues related to PG students, academic programs, PG curriculum and courses, academic performance, academic indiscipline, academic malpractices of PG students. The committee regularly revises the PG curriculum and conducts assessment of the academic programs and suggests appropriate revisions or modifications.',
    members: [
      'Dr. Saptarshi Ghosh (Convener)',
      'Prof. Amod C. Umarikar (Member)',
      'Prof. Santosh Kumar Vishvakarma (Member)',
      'Head of the Department (Ex-Officio)',
      'Student Representative — PG (Nominated by Student Gymkhana)',
    ],
    email: 'dpgcee@iiti.ac.in',
  },
  {
    name: 'DUGC',
    fullName: 'Department Under Graduate Committee',
    function: 'The department has a DUGC to deal with all issues related to UG students, academic programs, UG curriculum and courses, academic performance, academic indiscipline, academic malpractices of UG students. The committee regularly revises the UG curriculum and conducts assessment of the academic programs and suggests appropriate revisions or modifications.',
    members: [
      'Dr. Vijay A.S (Convener)',
      'Dr. Srivathsan Vasudevan (Member)',
      'Dr. Dibbendu Roy (Member)',
      'Head of the Department (Ex-Officio)',
      'Student Representative — UG (Nominated by Student Gymkhana)',
    ],
    email: 'dugcee@iiti.ac.in',
  },
  {
    name: 'DBAC',
    fullName: 'Department Budget Advisory Committee',
    function: 'The committee prepares the final annual procurement plan (FAPP) and distributes the funds in accordance with the guidelines shared by the office of the Dean of Administration.',
    members: [
      'Prof. Vivek Kanhangad (Chairperson & Convener)',
      'Prof. Trapti Jain (Member)',
      'Dr. Saptarshi Ghosh (Member)',
      'Dr. Vijay A.S (Member)',
      'Dr. Dibbendu Roy (Member)',
    ],
    email: '-',
  },
  {
    name: 'DSSC',
    fullName: 'Department Safety and Security Committee',
    function: 'The committee works in coordination with the Institute Safety and Security Committee to implement procedures and policies ensuring the safety and security of the EE Department.',
    members: [
      'Dr. Lokesh Kumar Dewangan (Convener)',
      'Dr. Sumit Gautam (Member)',
      'Dr. Vijay A.S (Member)',
    ],
    email: '-',
  },
  {
    name: 'DOC',
    fullName: 'Department Outreach Committee',
    function: 'The committee works towards enhancing the perception of the institute by organizing and participating in various outreach activities aimed at attracting talented students.',
    members: [
      'Dr. Rinkee Chopra (Convener)',
      'Dr. Prathap Reddy (Member)',
      'Dr. Ayush Tripathi (Member)',
    ],
    email: 'ee_outreach@iiti.ac.in',
  },
  {
    name: 'DWC',
    fullName: 'Department Website Committee',
    function: 'The Department Website Committee oversees the activities of the Student Team which updates and maintains the Departmental website.',
    members: [
      'Dr. Sharad Kumar Singh (Convener)',
      'Dr. Lokesh Kumar Dewangan',
      'Dr. Prathap Reddy',
    ],
    email: 'website.ee@iiti.ac.in',
  },
  {
    name: 'DSC',
    fullName: 'Department Space Committee',
    function: 'The committee looks into the space related requirements regarding UG and PG research labs and for individual faculty members and makes suitable recommendations regarding the same.',
    members: [
      'Dr. Subhadeep Paladhi (Convener)',
      'Dr. Swaminathan R.',
      'Prof. Srivathsan Vasudevan',
    ],
    email: '-',
  },
  {
    name: 'T&P',
    fullName: 'Training & Placement Coordinator',
    function: 'The Training & Placement Coordinator facilitates placement activities and coordinates with the institute placement cell for student career opportunities.',
    members: [
      'Dr. Appina Balasubramanyam (Coordinator)',
    ],
    email: '-',
  },
];

export default function CommitteesPage() {
  return (
    <PageLayout
      title="Department Committees"
      subtitle="The Department has several committees to ensure smooth administration and functioning of various activities"
      backgroundImage="/images/banners/faculty.jpg"
      backgroundPosition="center -350%"
    >
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <TableContainer component={Paper} elevation={2}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'primary.main' }}>
                <TableCell sx={{ color: 'white', fontWeight: 600, minWidth: 200 }}>
                  Committee Name
                </TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 600 }}>
                  Function
                </TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 600, minWidth: 200 }}>
                  Members
                </TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 600, minWidth: 150 }}>
                  Email ID
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {committees.map((committee, index) => (
                <TableRow
                  key={committee.name}
                  sx={{
                    bgcolor: index % 2 === 0 ? 'white' : 'grey.50',
                    '&:hover': { bgcolor: 'action.hover' },
                    verticalAlign: 'top',
                  }}
                >
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {committee.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {committee.fullName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {committee.function}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <List dense disablePadding>
                      {committee.members.map((member) => (
                        <ListItem key={member} disablePadding sx={{ py: 0.25 }}>
                          <Typography variant="body2">• {member}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  </TableCell>
                  <TableCell>
                    {committee.email !== '-' ? (
                      <Typography
                        component="a"
                        href={`mailto:${committee.email}`}
                        variant="body2"
                        color="primary"
                        sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                      >
                        {committee.email}
                      </Typography>
                    ) : (
                      <Typography variant="body2" color="text.secondary">
                        -
                      </Typography>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </PageLayout>
  );
}
