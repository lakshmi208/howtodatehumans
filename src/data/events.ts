export type EventType = 'talk' | 'workshop' | 'event' | 'focus-group' | 'fireside' | 'coworking' | 'happy-hour' | 'kickoff';

export interface EventConcept {
  id: string;
  title: string;
  type: EventType;
  tagline: string;
  problem: string;
  solution: string;
  description: string;
  timeframe: string;
  month: number; // 1-12 for timeline positioning
  recurring?: boolean;
  dependsOn?: string; // id of prerequisite event
  interestCount: number;
  completed?: boolean;
  date?: string;
}

export const eventTypeLabels: Record<EventType, string> = {
  'talk': 'Talk',
  'workshop': 'Workshop',
  'event': 'Event',
  'focus-group': 'Focus Group',
  'fireside': 'Fireside Chat',
  'coworking': 'Co-Working',
  'happy-hour': 'Happy Hour',
};

export const eventTypeColors: Record<EventType, string> = {
  'talk': 'bg-[hsl(var(--event-talk))]',
  'workshop': 'bg-[hsl(var(--event-workshop))]',
  'event': 'bg-[hsl(var(--event-event))]',
  'focus-group': 'bg-[hsl(var(--event-focus-group))]',
  'fireside': 'bg-[hsl(var(--event-fireside))]',
  'coworking': 'bg-[hsl(var(--event-coworking))]',
  'happy-hour': 'bg-[hsl(var(--event-happy-hour))]',
};

export const events: EventConcept[] = [
  {
    id: 'humans-happy-hour',
    title: 'Humans Happy Hour',
    type: 'happy-hour',
    tagline: 'The monthly entry point for everyone',
    problem: 'People don\'t know where to start when it comes to meeting new people authentically.',
    solution: 'A recurring, low-pressure monthly gathering where humans meet other humans — no apps, no pretense.',
    description: 'An ongoing monthly event that serves as the gateway into the How to Date Humans community. Come meet other humans, learn about our mission, and discover upcoming workshops and events. This is where it all begins.',
    timeframe: 'Monthly, ongoing',
    month: 1,
    recurring: true,
    interestCount: 127,
  },
  {
    id: 'dating-detox-talk',
    title: 'Dating Detox: A Brief History of Modern Dating & What Happened to Us',
    type: 'talk',
    tagline: 'Understanding how we got here',
    problem: 'Most people don\'t realize how much modern dating culture has been engineered to keep them swiping, not connecting.',
    solution: 'A compelling talk tracing the history of modern dating — from personal ads to algorithms — revealing what we\'ve lost and how to reclaim it.',
    description: 'This recurring talk is designed to be a wake-up call. We trace the arc from newspaper personals to Tinder, examining each era\'s impact on how we form connections. Attendees leave with a new lens on their own dating behaviors and actionable steps to "detox."',
    timeframe: 'Recurring quarterly',
    month: 2,
    recurring: true,
    interestCount: 89,
  },
  {
    id: 'first-responder-workshop',
    title: 'First Responder Focus Group & Workshop',
    type: 'workshop',
    tagline: 'The dating lives of those who protect us',
    problem: 'First responders face unique relationship challenges — irregular schedules, emotional toll, trust barriers — yet rarely have space to discuss them.',
    solution: 'A dedicated workshop creating a safe space for Chicago-area first responders to explore their dating experiences and relationship patterns.',
    description: 'A workshop and focus group specifically for Chicago-area first responders (police, fire, EMTs, nurses). We\'ll explore how the demands of their work shape their romantic lives and what support structures might help.',
    timeframe: 'Spring',
    month: 3,
    interestCount: 64,
  },
  {
    id: 'first-responder-stories',
    title: 'First Responder Stories Night',
    type: 'event',
    tagline: 'Real stories from real heroes',
    problem: 'The public rarely hears the human side of first responders\' lives, creating distance and misunderstanding in relationships.',
    solution: '10 first responders share their personal stories of love, loss, and connection on stage — creating empathy and breaking stereotypes.',
    description: 'Following our workshop, 10 selected first responders take the stage to tell their stories. This is raw, honest, and powerful storytelling about what it means to love and be loved when your job puts you on the front lines every day.',
    timeframe: 'Late Spring',
    month: 5,
    dependsOn: 'first-responder-workshop',
    interestCount: 112,
  },
  {
    id: 'couples-wingman-workshop',
    title: 'The Wingman Workshop: How Couples Can Set Up Their Single Friends',
    type: 'workshop',
    tagline: 'Put your couples privilege to good use',
    problem: 'Couples often want to help their single friends but feel awkward, unsure, or don\'t know how to set people up without it being weird.',
    solution: 'A hands-on workshop teaching couples the art of thoughtful matchmaking — how to think about compatibility, make introductions, and follow up.',
    description: 'Your married and coupled-up friends want to help. They just don\'t know how. This workshop gives couples the framework and confidence to be intentional about setting up their single friends. Because the best dating app might be your best friend.',
    timeframe: 'Spring',
    month: 4,
    interestCount: 93,
  },
  {
    id: 'singles-coworking',
    title: 'Side-by-Side: A Co-Working Session for Singles',
    type: 'coworking',
    tagline: 'Finish a project. Meet a human.',
    problem: 'Singles often feel they need to "put themselves out there" in high-pressure social settings. Meanwhile, they have projects they never finish.',
    solution: 'A 4-hour co-working session where singles work on personal projects side-by-side, with built-in breaks for organic conversation.',
    description: 'Bring your laptop, your sketchbook, your business plan, your novel — whatever you\'ve been putting off. Work for focused 45-minute sprints with short social breaks. No forced icebreakers. Just humans being productive in the same room, with natural connection as a side effect.',
    timeframe: 'Summer',
    month: 6,
    interestCount: 78,
  },
  {
    id: 'amazing-parent-night',
    title: 'Meet My Amazing Parent Night',
    type: 'event',
    tagline: 'When your kids become your wingman',
    problem: 'Single parents are often invisible in dating culture, yet they have the richest stories of love, resilience, and what truly matters.',
    solution: 'An evening where children (of all ages) share stories about their incredible single parent — celebrating them publicly and opening doors to connection.',
    description: 'This is not a dating event. It\'s a love letter. Adult children and teens take the stage to share why their single parent is extraordinary. The audience falls in love with these humans through their children\'s eyes. What happens next is organic and beautiful.',
    timeframe: 'Late Summer',
    month: 7,
    interestCount: 145,
  },
  {
    id: 'divorced-dudes-focus',
    title: 'Divorced Dudes: A Focus Group',
    type: 'focus-group',
    tagline: 'What men won\'t say out loud',
    problem: 'Divorced men often suffer in silence, lacking spaces to honestly discuss what went wrong and how to approach relationships differently.',
    solution: 'A moderated focus group creating a judgment-free zone for divorced men to share experiences and insights about love after marriage.',
    description: 'This is research, community, and therapy rolled into one. We gather divorced men in a facilitated, confidential setting to understand their experiences — what they wish they\'d known, how they\'ve grown, and what they need from future relationships.',
    timeframe: 'Summer',
    month: 6,
    interestCount: 56,
  },
  {
    id: 'gen-z-focus-group',
    title: 'Gen Z Dating: A Focus Group & Research Session',
    type: 'focus-group',
    tagline: 'Understanding the app-native generation',
    problem: 'Gen Z has never known dating without apps, yet reports the highest levels of loneliness and dating dissatisfaction.',
    solution: 'A structured research focus group to understand Gen Z\'s unique dating challenges, hopes, and what they wish older generations understood.',
    description: 'Gen Z didn\'t break dating — they inherited a broken system. This focus group brings together 18-28 year olds to explore their relationship with dating apps, social media\'s impact on romance, and what authentic connection means to them.',
    timeframe: 'Fall',
    month: 8,
    interestCount: 71,
  },
  {
    id: 'gen-z-fireside',
    title: 'Gen Z Dating: A Fireside Chat',
    type: 'fireside',
    tagline: 'Hearing from the generation that grew up swiping',
    problem: 'Cross-generational misunderstanding about dating norms creates judgment instead of empathy.',
    solution: 'An intimate fireside chat where Gen Z voices share their dating realities with a mixed-age audience, building bridges of understanding.',
    description: 'Following our focus group research, selected Gen Z participants share their stories and insights in a fireside chat format. This is about listening, not lecturing. Older generations will hear truths that challenge their assumptions.',
    timeframe: 'Fall',
    month: 9,
    dependsOn: 'gen-z-focus-group',
    interestCount: 83,
  },
  {
    id: 'genx-for-genz',
    title: 'GenX Insights for Gen Z',
    type: 'talk',
    tagline: 'Hard-won wisdom, freely given',
    problem: 'Gen X navigated dating before and after the internet — their unique perspective is rarely shared with younger daters.',
    solution: 'A talk where Gen X shares relationship wisdom with Gen Z — not as advice, but as stories of what worked, what didn\'t, and what they\'d do differently.',
    description: 'Gen X is the bridge generation. They dated with landlines and they dated with apps. In this talk, Gen X speakers share their hard-won insights with a Gen Z audience. It\'s not "back in my day" — it\'s "here\'s what I learned the hard way so you don\'t have to."',
    timeframe: 'Late Fall',
    month: 10,
    interestCount: 67,
  },
  {
    id: 'midlife-dating-talk',
    title: 'Midlife Dating Insights',
    type: 'talk',
    tagline: 'Research-backed truths about dating after 40',
    problem: 'Midlife daters feel forgotten by dating culture, yet they represent the fastest-growing segment of online dating.',
    solution: 'A research-based talk sharing original insights about what midlife dating actually looks like — the data, the stories, and the hope.',
    description: 'Based on original research, this talk dives into the realities of dating in your 40s, 50s, and beyond. We\'ll cover what the data says, bust myths about "starting over," and share stories that prove the best love stories often begin in the middle chapters.',
    timeframe: 'Late Fall',
    month: 11,
    interestCount: 98,
  },
];
