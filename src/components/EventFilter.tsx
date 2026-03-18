import { EventType, eventTypeLabels } from '@/data/events';
import {
  Mic, Wrench, Calendar, Search, Flame, Wine, Rocket
} from 'lucide-react';

interface EventFilterProps {
  activeFilter: EventType | 'all';
  onFilterChange: (filter: EventType | 'all') => void;
}

const typeIcons: Record<EventType, React.ReactNode> = {
  'kickoff': <Rocket className="w-4 h-4" />,
  'talk': <Mic className="w-4 h-4" />,
  'workshop': <Wrench className="w-4 h-4" />,
  'event': <Calendar className="w-4 h-4" />,
  'focus-group': <Search className="w-4 h-4" />,
  'fireside': <Flame className="w-4 h-4" />,
  'happy-hour': <Wine className="w-4 h-4" />
};

const EventFilter = ({ activeFilter, onFilterChange }: EventFilterProps) => {
  const types = Object.keys(typeIcons) as EventType[];

  return (
    <div className="flex flex-nowrap justify-start gap-2 max-w-4xl mx-auto px-4 mb-8 overflow-x-auto scrollbar-thin pb-2">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          activeFilter === 'all'
            ? 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]'
            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
        }`}
      >
        All Events
      </button>
      {types.map((type) => (
        <button
          key={type}
          onClick={() => onFilterChange(type)}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeFilter === type
              ? 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          }`}
        >
          {typeIcons[type]}
          {eventTypeLabels[type]}
        </button>
      ))}
    </div>
  );
};

export default EventFilter;
