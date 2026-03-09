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
    tagline: 'The people we trust most, trusting the least',
    description:
      'Everyone talks about the schedules. Nobody talks about what happens when your job trains you to read threat in every room and then you sit across from someone at dinner trying to be open. First responders are trained to protect. That instinct doesn\'t clock out.',
    whyItMatters:
      'The skills that make someone great at their job can be the exact things that make dating harder. We want to understand that tradeoff from the people living it.',
    interestCount: 64,
    talkCount: 12,
  },
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
    tagline: 'Fluent in apps. Starving for context.',
    description:
      'Gen Z can build a profile, curate a persona, and swipe with precision. What they\'ve never had is the thing every previous generation took for granted: watching someone be themselves in a room before deciding if they\'re interested. They skipped the tutorial and went straight to the final exam.',
    whyItMatters:
      'Gen Z didn\'t break dating. They\'re the first generation asked to do it without any of the original infrastructure. That\'s a design problem, not a character flaw.',
    interestCount: 71,
    talkCount: 15,
  },
];
