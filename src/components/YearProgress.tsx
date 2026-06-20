import { motion } from 'framer-motion';

const months = [
  'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb',
];

const TIMELINE_START = new Date(2026, 1, 1);
const TIMELINE_END = new Date(2027, 1, 28);

const YearProgress = () => {
  const now = new Date();
  const totalMs = TIMELINE_END.getTime() - TIMELINE_START.getTime();
  const elapsedMs = Math.max(
    0,
    Math.min(now.getTime() - TIMELINE_START.getTime(), totalMs)
  );
  const progressPercent = `${Math.round((elapsedMs / totalMs) * 100)}%`;

  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="flex items-center justify-between text-sm md:text-base font-semibold text-muted-foreground mb-4">
          <span>FEB 2026</span>
          <span className="text-[hsl(var(--primary))]">One Year. One Project.</span>
          <span>FEB 2027</span>
        </div>
        <div className="h-4 md:h-5 rounded-full bg-secondary overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: progressPercent }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--orange-glow))]"
          />
        </div>
        <div className="flex justify-between mt-3">
          {months.map((m) => (
            <span key={m} className="text-xs md:text-sm text-muted-foreground">
              {m}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default YearProgress;
