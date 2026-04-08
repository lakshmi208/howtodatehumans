export type EventType = 'talk' | 'workshop' | 'event' | 'focus-group' | 'fireside' | 'happy-hour' | 'kickoff';

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
  singlesOnly?: boolean;
  comingSoon?: boolean;
}

export const eventTypeLabels: Record<EventType, string> = {
  'talk': 'Talk',
  'workshop': 'Workshop',
  'event': 'Event',
  'focus-group': 'Research',
  'fireside': 'Fireside Chat',
  'happy-hour': 'Happy Hour',
  'kickoff': 'Kickoff',
};

export const eventTypeColors: Record<EventType, string> = {
  'talk': 'bg-[hsl(var(--event-talk))]',
  'workshop': 'bg-[hsl(var(--event-workshop))]',
  'event': 'bg-[hsl(var(--event-event))]',
  'focus-group': 'bg-[hsl(var(--event-focus-group))]',
  'fireside': 'bg-[hsl(var(--event-fireside))]',
  'happy-hour': 'bg-[hsl(var(--event-happy-hour))]',
  'kickoff': 'bg-[hsl(var(--event-kickoff))]',
};

export const events: EventConcept[] = [
  {
    id: 'kickoff-presentation',
    title: 'The Kickoff: How to Date Humans',
    type: 'kickoff',
    tagline: 'Where it all began',
    problem: 'Dating culture in Chicago — and everywhere — is broken, but nobody is doing anything about it.',
    solution: 'A presentation that laid out the vision, the research, and the year-long plan to change dating culture in Chicago.',
    description: 'On February 19th, 2026, the How to Date Humans project officially launched with a presentation that asked one question: what if we stopped accepting that dating has to feel this bad? This kickoff outlined the full year of labs, workshops, talks, and events ahead.',
    timeframe: 'Feb 19, 2026',
    month: 2,
    date: 'February 19, 2026',
    completed: true,
    interestCount: 0,
  },
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
    problem: 'In order to reset a system you need to understand it first. Instead of complaining, we\'re here to connect the dots.',
    solution: 'A compelling talk tracing the history of modern dating — from personal ads to algorithms — revealing what we\'ve lost and how to reclaim it.',
    description: 'This talk is designed to be a wake-up call. We trace the arc from newspaper personals to Tinder, examining each era\'s impact on how we form connections. Attendees leave with a new lens on their own dating behaviors and actionable steps to "detox."',
    timeframe: 'March 24 · 6–8pm',
    month: 2,
    date: 'March 24 / 6-8pm · Passages Wine + Books · 1911 W. Chicago Ave.',
    completed: true,
    interestCount: 89,
  },
  {
    id: 'dating-in-collapse',
    title: 'Dating in Collapse: The Point of Dating When It Feels Like There\'s No Point',
    type: 'talk',
    tagline: 'Finding connection when the world feels like it\'s falling apart',
    problem: 'Climate anxiety, political chaos, economic instability — when the future feels uncertain, investing in relationships can feel meaningless. Many people have quietly stopped trying.',
    solution: 'A talk that confronts the nihilism head-on and makes the case that human connection isn\'t just worth pursuing in uncertain times — it\'s the whole point.',
    description: 'Everything feels like it\'s falling apart. So why bother dating? This talk tackles the elephant in every room: the creeping sense that building a life with someone is pointless when the world seems to be ending. We\'ll explore how collapse anxiety reshapes our relationship patterns, why avoidance masquerades as pragmatism, and how the people who find love in hard times aren\'t naive — they\'re brave. This isn\'t toxic positivity. It\'s a real conversation about what it means to choose connection when giving up feels easier.',
    timeframe: 'Spring',
    month: 4,
    interestCount: 0,
  },
  {
    id: 'first-responder-workshop',
    title: 'First Responder Workshop: Dating & Storytelling',
    type: 'workshop',
    tagline: 'Tell your story better. Connect more authentically.',
    problem: 'First responders know how to answer the call, but connecting in the realm of dating is challenging. They struggle to tell their stories and be understood by potential partners.',
    solution: 'A hands-on workshop where first responders learn to communicate their experiences authentically and navigate the unique dynamics of dating while in public service.',
    description: 'Nobody loves their first responders more than Chicago. But connecting in the realm of dating can be challenging. This conversation and workshop will focus on how first responders can best tell their stories and the ins and outs of dating a person who answers the call.',
    timeframe: 'Late Spring',
    month: 5,
    interestCount: 112,
  },
  {
    id: 'first-responder-stories',
    title: 'First Responder Stories Night',
    type: 'event',
    tagline: 'Real stories from real heroes',
    problem: 'The public rarely hears the human side of first responders\' lives, creating distance and misunderstanding in relationships.',
    solution: '10 first responders share their personal stories of love, loss, and connection on stage — creating empathy and breaking stereotypes.',
    description: 'Following the workshop, 10 selected first responders take the stage to tell their stories. This is raw, honest, and powerful storytelling about what it means to love and be loved when your job puts you on the front lines every day.',
    timeframe: 'Early Summer',
    month: 6,
    dependsOn: 'first-responder-workshop',
    interestCount: 145,
  },
  {
    id: 'couples-wingman-workshop',
    title: 'The Wingman Workshop: How Couples Can Set Up Their Single Friends',
    type: 'workshop',
    tagline: 'Put your couples privilege to good use',
    problem: 'Couples often want to help their single friends but feel awkward, unsure, or don\'t know how to set people up without it being weird.',
    solution: 'A talk + mini workshop to teach partnered people how to engage in the art of the set-up without accidentally stepping into the role of annoying matchmaker. Also included: what your single friends would like you to know about how to support them.',
    description: 'Your married and coupled-up friends want to help. They just don\'t know how. This workshop gives couples the framework and confidence to be intentional about setting up their single friends. Because the best dating app might be your best friend.',
    timeframe: 'Spring',
    month: 4,
    interestCount: 93,
  },
  {
    id: 'singles-coworking',
    title: 'Side-by-Side: A Co-Working Session for Singles',
    type: 'event',
    tagline: 'Finish a project. Meet a human.',
    problem: 'Singles often feel they need to "put themselves out there" in high-pressure social settings. Meanwhile, they have projects they never finish.',
    solution: 'A 4-hour co-working session where singles work on personal projects side-by-side, with built-in breaks for organic conversation.',
    description: 'Bring your laptop, your sketchbook, your business plan, your novel — whatever you\'ve been putting off. Work for focused 45-minute sprints with short social breaks. No forced icebreakers. Just humans being productive in the same room, with natural connection as a side effect.',
    timeframe: 'Summer',
    month: 7,
    interestCount: 78,
    singlesOnly: true,
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
    id: 'gen-z-fireside',
    title: 'Gen Z Dating: A Fireside Chat',
    type: 'fireside',
    tagline: 'Hearing from the generation that grew up swiping',
    problem: 'Cross-generational misunderstanding about dating norms creates judgment instead of empathy.',
    solution: 'An intimate fireside chat where Gen Z voices share their dating realities with a mixed-age audience, building bridges of understanding.',
    description: 'Following our research, selected Gen Z participants share their stories and insights in a fireside chat format. This is about listening, not lecturing. Older generations will hear truths that challenge their assumptions.',
    timeframe: 'Fall',
    month: 9,
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
    timeframe: 'Early Summer',
    month: 6,
    comingSoon: true,
    interestCount: 98,
  },
];
