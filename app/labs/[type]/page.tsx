import { notFound } from 'next/navigation';
import { Box, Container, Chip } from '@mui/material';
import PageLayout from '@/components/layout/PageLayout';
import LabsView from '@/components/labs/LabsView';
import db from '@/lib/db';

interface Lab {
  id: number;
  name: string;
  description?: string;
  keywords?: string;
  image?: string;
  equipments?: string;
  experiments?: string;
  location?: string;
  person?: string;
  link?: string;
}

// Ensure experiments field is fetched for UG labs

const typeConfig: Record<string, { title: string; subtitle: string; table: string; headerImage: string }> = {
  ug: {
    title: 'UG Laboratories',
    subtitle: 'The Department currently hosts 8 undergraduate laboratories for students pursuing the Bachelor of Technology degree. The Laboratory courses supplement the theoretical courses and provide students with practical applications of the concepts learnt in class. These labs host modern equipment and facilities to familiarise students with industry-level practical skills.',
    table: 'ug_labs',
    headerImage: '/images/banners/ug-lab.png',
  },
  pg: {
    title: 'Research Laboratories',
    subtitle: 'Advanced research facilities for postgraduate students and faculty',
    table: 'pg_labs',
    headerImage: '/images/banners/pg-lab.png',
  },
  research: {
    title: 'Research Laboratories',
    subtitle: 'Advanced research facilities for postgraduate students and faculty',
    table: 'pg_labs',
    headerImage: '/images/banners/pg-lab.png',
  },
  postgraduate: {
    title: 'Postgraduate Laboratories',
    subtitle: 'Teaching laboratories for postgraduate courses',
    table: 'pg_labs',
    headerImage: '/images/banners/pg-lab.png',
  },
};

function getLabs(table: string): Lab[] {
  try {
    return db.prepare(`SELECT * FROM ${table}`).all() as Lab[];
  } catch {
    return [];
  }
}

export default async function LabsPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;

  const config = typeConfig[type];
  if (!config) {
    notFound();
  }

  const labs = getLabs(config.table);

  return (
    <PageLayout
      title={config.title}
      subtitle={config.subtitle}
      backgroundImage={config.headerImage}
    >
      <Container maxWidth="xl" sx={{ py: 6 }}>
        {/* Navigation */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
          <Chip
            label="UG Labs"
            component="a"
            href="/labs/ug"
            clickable
            color={type === 'ug' ? 'primary' : 'default'}
            variant={type === 'ug' ? 'filled' : 'outlined'}
          />
          <Chip
            label="Research Labs"
            component="a"
            href="/labs/pg"
            clickable
            color={type === 'pg' || type === 'research' ? 'primary' : 'default'}
            variant={type === 'pg' || type === 'research' ? 'filled' : 'outlined'}
          />
        </Box>

        <LabsView labs={labs} type={type === 'research' ? 'pg' : type as 'ug' | 'pg'} />
      </Container>
    </PageLayout>
  );
}

export function generateStaticParams() {
  return [{ type: 'ug' }, { type: 'pg' }, { type: 'research' }, { type: 'postgraduate' }];
}
