import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface DependencyArrowProps {
  fromTitle: string;
  toTitle: string;
}

const DependencyArrow = ({ fromTitle, toTitle }: DependencyArrowProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center py-2 my-1"
    >
      <div className="flex flex-col items-center gap-1">
        <div className="w-[2px] h-6 bg-[hsl(var(--primary)/0.4)]" />
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(var(--primary)/0.08)] border border-[hsl(var(--primary)/0.2)]">
          <ArrowDown className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
          <span className="text-xs font-medium text-[hsl(var(--primary))]">
            Leads to
          </span>
        </div>
        <div className="w-[2px] h-6 bg-[hsl(var(--primary)/0.4)]" />
      </div>
    </motion.div>
  );
};

export default DependencyArrow;
