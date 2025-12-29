import { Box, Container, Typography, Paper, Divider } from '@mui/material';
import PageLayout from '@/components/layout/PageLayout';
import db from '@/lib/db';

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
}

function getArticles(): Article[] {
  try {
    return db.prepare('SELECT * FROM reads ORDER BY id ASC').all() as Article[];
  } catch {
    return [];
  }
}

export default function ReadsPage() {
  const articles = getArticles();

  return (
    <PageLayout
      title="Interesting Reads"
      subtitle="Some articles by our students"
      backgroundImage="/images/banners/research.jpg"
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {articles.length === 0 ? (
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary">
              No articles available at the moment.
            </Typography>
          </Paper>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {articles.map((article) => (
              <Paper key={article.id} elevation={2} sx={{ overflow: 'hidden' }}>
                <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 3 }}>
                  <Typography variant="h5" fontWeight={600}>
                    {article.title}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mt: 1, opacity: 0.9 }}>
                    By {article.author}
                  </Typography>
                </Box>
                <Box sx={{ p: 4 }}>
                  {article.content.split('\r\n').map((paragraph, index) => {
                    const trimmed = paragraph.trim();
                    if (!trimmed) return null;

                    // Check if it's a heading (short text without periods at end)
                    const isHeading = trimmed.length < 50 && !trimmed.endsWith('.') && !trimmed.endsWith(',');

                    if (isHeading) {
                      return (
                        <Typography
                          key={index}
                          variant="h6"
                          sx={{ mt: index > 0 ? 3 : 0, mb: 1, color: 'primary.main', fontWeight: 600 }}
                        >
                          {trimmed}
                        </Typography>
                      );
                    }

                    return (
                      <Typography
                        key={index}
                        variant="body1"
                        sx={{ mb: 2, lineHeight: 1.8, textAlign: 'justify' }}
                      >
                        {trimmed}
                      </Typography>
                    );
                  })}
                </Box>
              </Paper>
            ))}
          </Box>
        )}
      </Container>
    </PageLayout>
  );
}
