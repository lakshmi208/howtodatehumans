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
    title: 'Divorced Dudes & Relationships',
    tagline: 'The debrief nobody offers',
    description:
      'Women get the book club, the group chat, the therapist referral. Men get "you\'ll be fine" and a dating app download. Divorced dudes are sitting on some of the most honest, hard-won insights about relationships. We can all learn something from this cohort.',
    whyItMatters:
      'There\'s a lot of heat on this cohort — it\'s worth hearing what they have to say.',
    interestCount: 56,
    talkCount: 8,
  },
  {
    id: 'gen-z-research',
    title: 'Gen Z & Dating Culture',
    tagline: 'Understanding the app-native generation',
    description:
      "Gen Z has never known dating without apps, yet reports dating dissatisfaction. We want to understand their unique challenges, hopes, and what authentic connection means to them.",
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
