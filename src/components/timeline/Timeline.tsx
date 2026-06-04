export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  type: 'education' | 'experience';
  description: string;
  highlights: string[];
}

export const timelineData: TimelineItem[] = [
  {
    id: 'bsc',
    period: '2023 – Present',
    title: 'BSc in Health Promotion',
    organization: 'Rajarata University of Sri Lanka',
    type: 'education',
    description: 'Focused on health education, community hygiene, data collection, epidemiology, and behavioral modification models.',
    highlights: [
      'Epidemiology & Biostatistics',
      'Behavioral Change Communication',
      'Community Needs Assessment',
      'Health Education Program Design',
    ],
  },
  {
    id: 'al',
    period: '2020 – 2022',
    title: 'G.C.E. Advanced Level',
    organization: 'Bio Stream',
    type: 'education',
    description: 'Completed Advanced Level examinations in the Biology stream, building foundational knowledge in life sciences.',
    highlights: ['Biology', 'Chemistry', 'Physics'],
  },
  {
    id: 'intern',
    period: '2024 – 2026',
    title: 'Public Health Intern',
    organization: 'Rajarata University Internship Program',
    type: 'experience',
    description: 'Comprehensive field practical training including community engagement, needs assessments, and intervention development.',
    highlights: [
      'Assessed regional health indicators',
      'Mapped local community hygiene issues',
      'Organized small group communication programs',
      'Conducted structured surveys & field analysis',
    ],
  },
];