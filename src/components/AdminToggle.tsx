import { Switch } from '@/components/ui/switch';
import { Eye, EyeOff } from 'lucide-react';

interface AdminToggleProps {
  showInterest: boolean;
  onToggle: (value: boolean) => void;
}

const AdminToggle = ({ showInterest, onToggle }: AdminToggleProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-card border border-border rounded-full px-4 py-2.5 shadow-lg">
      {showInterest ? (
        <Eye className="w-4 h-4 text-[hsl(var(--primary))]" />
      ) : (
        <EyeOff className="w-4 h-4 text-muted-foreground" />
      )}
      <span className="text-xs font-medium">
        {showInterest ? 'Interest visible' : 'Interest hidden'}
      </span>
      <Switch checked={showInterest} onCheckedChange={onToggle} />
    </div>
  );
};

export default AdminToggle;
