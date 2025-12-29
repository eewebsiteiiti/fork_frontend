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
      'Prof. Amod C. Umarikar',
      'Prof. Santosh Kumar Vishvakarma',
    ],
    email: 'dpgcee@iiti.ac.in',
  },
  {
    name: 'DUGC',
    fullName: 'Department Under Graduate Committee',
    function: 'The department has a DUGC to deal with all issues related to UG students, academic programs, UG curriculum and courses, academic performance, academic indiscipline, academic malpractices of UG students. The committee regularly revises the UG curriculum and conducts assessment of the academic programs and suggests appropriate revisions or modifications.',
    members: [
      'Dr. Vijay A S (Convener)',
      'Dr. Swaminathan R',
      'Prof. Srivathsan Vasudevan',
    ],
    email: 'dugcee@iiti.ac.in',
  },
  {
    name: 'DWC',
    fullName: 'Department Website Committee',
    function: 'The Department Website Committee oversees the activities of the Student Team which updates and maintains the Departmental website.',
    members: [
      'Dr. Vijay A S (Convener)',
      'Dr. Saptarshi Ghosh',
      'Dr. Sumit Gautam',
    ],
    email: 'website.ee@iiti.ac.in',
  },
  {
    name: 'DSC',
    fullName: 'Department Space Committee',
    function: 'The committee looks into the space related requirements regarding UG and PG research labs and for individual faculty members and makes suitable recommendations regarding the same.',
    members: [
      'Dr. Swaminathan R. (Convener)',
      'Prof. Srivathsan Vasudevan',
      'Dr. Shubadeep Paladhi',
    ],
    email: '-',
  },
  {
    name: 'DBAC',
    fullName: 'Department Budget Advisory Committee',
    function: 'The department Budget Advisory Committee advices HoD EE in matters related to annual plans for expenditures procurements and appropriate utilisation of the allocated budget.',
    members: [
      'Dr. Saptarshi Ghosh (Convenor)',
      'Prof. Trapti Jain',
      'Dr. Swaminathan R',
    ],
    email: '-',
  },
  {
    name: 'DOC',
    fullName: 'Department Outreach Committee',
    function: 'This committee disseminates information related to activities within the department to all concerned within and outside the institute.',
    members: [
      'Member 1',
      'Member 2',
      'Member 3',
    ],
    email: 'ee_outreach@iiti.ac.in',
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
      <Container maxWidth="lg" sx={{ py: 6 }}>
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
