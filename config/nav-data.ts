export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
  external?: boolean;
}

export const navData: NavItem[] = [
  {
    label: 'About',
    children: [
      { label: 'The Department', href: '/about' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  {
    label: 'People',
    children: [
      { label: 'Faculty', href: '/people/faculty' },
      { label: 'Staff', href: '/people/staff' },
      { label: 'Department Committees', href: '/people/committees' },
      {
        label: 'Ph.D. Students',
        children: [
          { label: '2024', href: '/people/phd/2024' },
          { label: '2023', href: '/people/phd/2023' },
          { label: '2022', href: '/people/phd/2022' },
          { label: '2021', href: '/people/phd/2021' },
          { label: '2020', href: '/people/phd/2020' },
          { label: '2019', href: '/people/phd/2019' },
          { label: '2018', href: '/people/phd/2018' },
        ],
      },
      {
        label: 'M.S. Research',
        children: [
          { label: '2024', href: '/people/ms/2024' },
          { label: '2023', href: '/people/ms/2023' },
          { label: '2022', href: '/people/ms/2022' },
        ],
      },
      {
        label: 'M.Tech. Students',
        children: [
          { label: '2025', href: '/people/mtech/2025' },
          { label: '2024', href: '/people/mtech/2024' },
          { label: '2023', href: '/people/mtech/2023' },
        ],
      },
      {
        label: 'B.Tech. Students',
        children: [
          { label: '2024', href: '/people/btech/2024' },
          { label: '2023', href: '/people/btech/2023' },
          { label: '2022', href: '/people/btech/2022' },
        ],
      },
      {
        label: 'Alumni',
        children: [
          { label: '2021', href: '/people/alumni/2021' },
          { label: '2020', href: '/people/alumni/2020' },
          { label: '2019', href: '/people/alumni/2019' },
          { label: '2018', href: '/people/alumni/2018' },
          { label: '2017', href: '/people/alumni/2017' },
          { label: '2016', href: '/people/alumni/2016' },
          { label: '2015', href: '/people/alumni/2015' },
          { label: '2014', href: '/people/alumni/2014' },
        ],
      },
    ],
  },
  {
    label: 'Research',
    children: [
      { label: 'Research Areas', href: '/research' },
      { label: 'Projects', href: '/research/projects' },
      {
        label: 'Recent Publications',
        children: [
          { label: '2024', href: 'https://drive.google.com/file/d/1zRiBxQpUkRS0zG37ev_LVGd2oC0k8YDs/view', external: true },
          { label: '2023', href: 'https://drive.google.com/file/d/1A6hnS8lyZG3yE_M9uNd6CsRTGYljM3_a/view', external: true },
          { label: '2022', href: 'https://drive.google.com/file/d/1aTR3rYd3fIdJvB7UR0oG7uuiQ_Z9Ih59/view', external: true },
          { label: '2021', href: 'https://drive.google.com/file/d/1P0OZHrPs0-XzbO8rDsOWS0Nf-iO6UPpd/view', external: true },
          { label: '2020', href: 'https://drive.google.com/file/d/1AdItcw39RjYkTghByPXJagN4d9G5jEg_/view', external: true },
        ],
      },
      {
        label: 'Stats',
        children: [
          { label: 'Degrees', href: '/research/stats/students' },
          { label: 'Publications', href: '/research/stats/publications' },
          { label: 'Projects', href: '/research/stats/projects' },
          { label: 'Patents', href: '/research/stats/patents' },
          { label: 'Placements', href: '/research/stats/placements' },
          { label: 'Grants', href: '/research/stats/grants' },
          { label: 'Citations', href: '/research/stats/citations' },
          { label: 'Funding Agencies', href: '/research/stats/funding' },
        ],
      },
    ],
  },
  {
    label: 'Academics',
    children: [
      {
        label: 'Courses',
        children: [
          { label: 'B.Tech. (after 2023)', href: '/courses/btech/new' },
          { label: 'M.Tech. (CSP)', href: '/courses/mtech-csp' },
          { label: 'M.Tech. (VDN)', href: '/courses/mtech-vdn' },
          { label: 'M.Tech. (PSPE)', href: '/courses/mtech-pspe' },
        ],
      },
      {
        label: 'Laboratories',
        children: [
          { label: 'Research', href: '/labs/pg' },
          { label: 'UG', href: '/labs/ug' },
        ],
      },
      {
        label: 'Timetable',
        children: [
          { label: 'B.Tech. (4th yr) & PG-Ph.D.', href: 'https://drive.google.com/file/d/1hdJBYR3bS31bJzRlZ9dNlcuKXnuzAXif/view', external: true },
          { label: 'B.Tech. (2nd & 3rd yr)', href: 'https://drive.google.com/file/d/1hbacL_gul_YK2FSiU1ecnPDATSaTUJqX/view', external: true },
          { label: 'Course Slots', href: 'https://drive.google.com/file/d/1hiyQKYPU5iQFeiYhX5P1S__JQomjB9aU/view', external: true },
        ],
      },
    ],
  },
  {
    label: 'Achievements',
    children: [
      { label: 'Books Published', href: '/achievements/books' },
      { label: 'Faculty Recognitions', href: '/achievements/faculty' },
      { label: 'Student Achievements', href: '/achievements/students' },
      { label: 'Patents', href: '/achievements/patents' },
    ],
  },
  {
    label: 'Activities',
    children: [
      { label: 'EESA', href: '/activities/eesa' },
      { label: 'Interesting Reads', href: '/activities/reads' },
      { label: 'Upcoming Seminars', href: '/activities/seminars' },
      { label: 'Upcoming Activities', href: '/activities/upcoming' },
      { label: 'Flora & Fauna', href: '/activities/flora' },
    ],
  },
];

export const footerStats = {
  faculty: 24,
  studentsGraduated: 1050,
  publications: 1750,
  placement: 94,
  patents: 35,
  projects: 110,
  projectGrants: 32.6,
  googleScholarCitations: 60000,
};
