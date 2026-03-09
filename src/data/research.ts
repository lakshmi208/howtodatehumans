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
    id: 'divorced-men-research',
    title: 'Divorced Men & Relationships',
    tagline: 'The debrief nobody offers',
    description:
      'Women get the book club, the group chat, the therapist referral. Men get "you\'ll be fine" and a dating app download. Divorced men are sitting on some of the most honest, hard-won insights about relationships. Nobody\'s asking.',
    whyItMatters:
      'The men who\'ve been through it know things single men don\'t. That knowledge is going to waste because we don\'t build rooms where they can share it.',
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
  {
    id: 'dating-coaches-research',
    title: 'Dating Coaches & Advice Culture',
    tagline: 'The advice industrial complex',
    description:
      'Everyone blames the apps. Nobody talks about the avalanche of dating advice that flooded our feeds right alongside them. Some of it helped. A lot of it made things worse. We want to know who\'s worth listening to and what deserves deletion as much as the app itself.',
    whyItMatters:
      'Bad advice at scale is a cultural pollutant. Before we can rebuild how people date, we need to understand what they\'ve been told and how much of it they need to unlearn.',
    interestCount: 0,
    talkCount: 0,
  },
];
