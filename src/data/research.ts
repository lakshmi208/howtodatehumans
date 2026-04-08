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
      "Does this generation want to experience romance or something else? How is their journey and experience of what romance is—and what role it serves in the human experience—different from previous generations? Could they be the key to restoring it?",
    whyItMatters:
      "Gen Z didn't break dating — they inherited a broken system. Understanding their reality helps us build bridges across generations.",
    interestCount: 71,
    talkCount: 15,
  },
  {
    id: 'dating-coaches-research',
    title: 'Dating Coaches & Matchmakers',
    tagline: 'Spotlighting the ones who actually help',
    description:
      'Everyone has opinions about dating coaches and matchmakers — and a lot of what\'s out there goes unchecked. Instead of calling out the bad ones, we want to spotlight and promote the coaches and services that are actually trying to improve dating, not simply make money off of dating frustration.',
    whyItMatters:
      'There are people doing real, honest work to help others find connection. They deserve visibility — and daters deserve to know who to trust.',
    interestCount: 0,
    talkCount: 0,
  },
  {
    id: 'ai-dating-research',
    title: 'AI & Dating',
    tagline: 'Will we outsource intimacy or deepen it?',
    description:
      'AI already knows what we need to hear and feel. The question isn\'t whether we\'ll turn to it — we\'re already reaching for it. The real question is whether AI becomes a substitute for human connection or a mirror that teaches us how to be better at it. We need a pause. And then an honest answer.',
    whyItMatters:
      'AI won\'t replace dating — but it could replace the risk that makes dating matter. Before that happens, we need to understand what\'s at stake: connection that costs something, conversations that surprise us, humans who don\'t know exactly what to say.',
    interestCount: 0,
    talkCount: 0,
  },
];
