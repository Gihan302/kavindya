export interface ImpactItem {
  id: string;
  title: string;
  organization: string;
  description: string;
  highlights: string[];
  icon: string;
}

export const impactData: ImpactItem[] = [
  {
    id: 'zero-plastic',
    title: 'Zero Plastic Club Volunteer',
    organization: 'Rajarata University',
    description: 'Actively organizing environmental cleanup, micro-plastics awareness campaigns, and plastic reduction drives across university and surrounding communities.',
    highlights: [
      'Environmental cleanup drives',
      'Micro-plastics awareness campaigns',
      'Plastic reduction initiatives',
    ],
    icon: '♻️',
  },
  {
    id: 'hp-society',
    title: 'Committee Member',
    organization: 'Health Promotion Society, RUSL',
    description: 'Contributing to student health advocacy, organizing awareness campaigns on communicable diseases, and planning department seminars.',
    highlights: [
      'Student health advocacy',
      'Communicable disease awareness campaigns',
      'Department seminar planning',
    ],
    icon: '🏛️',
  },
  {
    id: 'athletics',
    title: 'Athletics Member',
    organization: 'Rajarata University Athletics',
    description: 'Long-distance running & marathon participation — cultivating physical resilience, long-term focus, and target-driven self-discipline directly applicable to field surveys.',
    highlights: [
      'Long-distance running',
      'Marathon participation',
      'Physical & mental resilience',
    ],
    icon: '🏃',
  },
  {
    id: 'hiking',
    title: 'Hiking Club Member',
    organization: 'RUSL Hiking Club',
    description: 'Active member of the university hiking club, building teamwork, nature awareness, and community spirit through organized treks.',
    highlights: [
      'Teamwork & leadership',
      'Nature & environmental awareness',
      'Community building',
    ],
    icon: '⛰️',
  },
];