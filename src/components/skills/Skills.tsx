export interface SkillCategory {
  id: string;
  category: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'public-health',
    category: 'Public Health & Promotion',
    icon: '🏥',
    skills: [
      { name: 'Health Promotion Strategies', level: 90 },
      { name: 'Community Health Assessment', level: 88 },
      { name: 'Health Education', level: 85 },
      { name: 'Behavioral Change Communication', level: 82 },
      { name: 'Disease Prevention & Control', level: 80 },
    ],
  },
  {
    id: 'research',
    category: 'Research & Methodology',
    icon: '🔬',
    skills: [
      { name: 'Research Methodology', level: 85 },
      { name: 'Data Collection Techniques', level: 88 },
      { name: 'SPSS / Excel Data Analysis', level: 82 },
      { name: 'Report Writing & Interpretation', level: 84 },
      { name: 'Basic Epidemiology', level: 78 },
    ],
  },
  {
    id: 'fieldwork',
    category: 'Field Work & Organizing',
    icon: '🌍',
    skills: [
      { name: 'Health Campaigns', level: 90 },
      { name: 'Community Engagement', level: 92 },
      { name: 'Field Data Collection', level: 88 },
      { name: 'Workshops Organization', level: 85 },
    ],
  },
  {
    id: 'technical',
    category: 'Technical & Digital',
    icon: '💻',
    skills: [
      { name: 'Microsoft Office', level: 88 },
      { name: 'Google Forms', level: 90 },
      { name: 'Data Visualization', level: 78 },
      { name: 'Social Media for Health', level: 82 },
    ],
  },
];