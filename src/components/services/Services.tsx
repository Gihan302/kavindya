export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  cta: string;
  href: string;
}

export const servicesData: Service[] = [
  {
    id: 'health-campaigns',
    title: 'Health Education & Campaigns',
    description: 'Designing and execution of evidence-based health interventions, workshops, hygiene awareness, and behavioral transformation plans tailored to community needs.',
    icon: '📢',
    cta: 'Book Campaign',
    href: '#contact',
  },
  {
    id: 'community-assessment',
    title: 'Community Assessments',
    description: 'Structuring comprehensive needs assessments, organizing health camps, designing data gathering questionnaires, and conducting focused group interviews for health indicators.',
    icon: '🔍',
    cta: 'Inquire Assessment',
    href: '#contact',
  },
  {
    id: 'data-analysis',
    title: 'Data Entry & SPSS Analysis',
    description: 'Executing statistical data sorting, descriptive statistics analysis via SPSS and Excel, and preparing detailed interpretation reports for public health research.',
    icon: '📊',
    cta: 'Analyze Data',
    href: '#contact',
  },
];