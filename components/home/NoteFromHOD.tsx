import { Box, Grid, Typography } from "@mui/material";

export default function NoteFromHOD() {
  return (
    <Box
      sx={{
        backgroundColor: "#b2103f",
        py: 4,
        px: 2,
        ml: { xs: 0, md: "100px" },
      }}
    >
      <Grid container alignItems="center" justifyContent="center">
        <Grid sx={{ m: 5, textAlign: { xs: "center", lg: "left" } }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              borderBottom: "1px solid #fff",
              pb: 1,
              color: "white",
              fontFamily: "Caudex, serif",
            }}
          >
            From the Head&apos;s Desk
          </Typography>
          <Typography
            variant="body1"
            color="white"
            sx={{ mt: 3, lineHeight: 1.8 }}
          >
            Welcome to the Department of Electrical Engineering at the Indian
            Institute of Technology Indore — a vibrant and dynamic academic unit
            committed to excellence in education, research, and innovation. As
            the Head of the Department, it is my pleasure to extend a warm
            welcome to all students, faculty, researchers, industry partners,
            and visitors exploring our department. 
            Electrical Engineering at IIT Indore stands as one of the Institute’s largest and most
            multidisciplinary departments. We offer rigorous and forward-looking
            academic programs including Bachelor of Technology (B.Tech.), Master
            of Technology (M.Tech.), Master of Science (by Research), and Ph.D.
            degrees, designed to prepare students for the challenges of a
            rapidly evolving technological landscape. Our curriculum bridges
            foundational theory with practical applications, fostering
            analytical thinking and creative problem-solving. Our faculty
            comprises internationally reputed scholars engaged in cutting-edge
            research spanning power systems and power electronics, renewable
            energy integration, smart grids, antenna design, communications and
            networking, signal processing, VLSI, nanoelectronics,
            optoelectronics, etc. Through state-of-the-art laboratories and
            collaborative research initiatives, we nurture an environment that
            encourages innovation and knowledge creation at the global
            forefront. The Department maintains strong links with industry,
            research institutions, and academic partners worldwide, promoting
            interdisciplinary collaboration and providing our students with
            impactful exposure to real-world technological challenges. We
            actively support internships, research projects, and industry
            engagements to enhance learning outcomes and professional readiness.
            At IIT Indore, we are deeply committed to cultivating a culture that
            values academic integrity, inclusivity, and societal contribution.
            Our goal is not only to develop skilled engineers and researchers
            but also to shape ethical leaders who will drive technological
            progress and contribute meaningfully to society. I invite you to
            explore the many opportunities within our department — whether you
            are a prospective student, a collaborator, or an enthusiast of
            Electrical Engineering research and education. Together, we will
            continue to empower the next generation of innovators and thought
            leaders.
          </Typography>
          <Typography
            variant="h6"
            color="white"
            fontWeight={600}
            sx={{ mt: 2 }}
          >
            ~ Swaminathan R.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
