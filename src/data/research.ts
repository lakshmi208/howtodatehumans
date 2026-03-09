export interface ResearchArea {
  id: string;
  title: string;
  tagline: string;
  description: string;
  whyItMatters: string;
  interestCount: number;
  talkCount: number;
}

export const researchAreas: ResearchArea[] = [
  {
    id: 'first-responder-research',
    title: 'First Responders & Dating',
    tagline: 'The dating lives of those who protect us',
    description:
      'First responders face unique relationship challenges — irregular schedules, emotional toll, trust barriers — yet rarely have space to discuss them. We want to understand how the demands of their work shape their romantic lives.',
    whyItMatters:
      'By listening to first responders, we can design events and resources that actually address what they need — not what we assume they need.',
    interestCount: 64,
    talkCount: 12,
  },
  {
    id: 'divorced-men-research',
    title: 'Divorced Men & Relationships',
    tagline: "What men won't say out loud",
    description:
      'Divorced men often suffer in silence, lacking spaces to honestly discuss what went wrong and how to approach relationships differently. We want to understand their experiences — what they wish they\'d known, how they\'ve grown.',
    whyItMatters:
      'Men rarely get asked about their emotional experience of divorce. This research helps us build programming that meets them where they are.',
    interestCount: 56,
    talkCount: 8,
  },
  {
    id: 'gen-z-research',
    title: 'Gen Z & Dating Culture',
    tagline: 'Understanding the app-native generation',
    description:
      "Gen Z has never known dating without apps, yet reports the highest levels of loneliness and dating dissatisfaction. We want to understand their unique challenges, hopes, and what authentic connection means to them.",
    whyItMatters:
      "Gen Z didn't break dating — they inherited a broken system. Understanding their reality helps us build bridges across generations.",
    interestCount: 71,
    talkCount: 15,
  },
];
