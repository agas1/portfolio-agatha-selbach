import { motion } from 'motion/react';
import { User, Code2 } from 'lucide-react';
import { useDecisionMode } from '@/app/contexts/DecisionModeContext';

export function DecisionToggle() {
  const { mode, setMode } = useDecisionMode();

  return (
    <div className="flex items-center gap-1 p-1 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-800">
      <motion.button
        onClick={() => setMode('user')}
        whileTap={{ scale: 0.95 }}
        className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
          mode === 'user'
            ? 'text-white'
            : 'text-gray-500 hover:text-gray-300'
        }`}
      >
        {mode === 'user' && (
          <motion.div
            layoutId="toggleBg"
            className="absolute inset-0 bg-gray-800 rounded-md"
            transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
          />
        )}
        <User className="w-3.5 h-3.5 relative z-10" />
        <span className="relative z-10 hidden sm:inline">User</span>
      </motion.button>

      <motion.button
        onClick={() => setMode('dev')}
        whileTap={{ scale: 0.95 }}
        className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
          mode === 'dev'
            ? 'text-purple-400'
            : 'text-gray-500 hover:text-gray-300'
        }`}
      >
        {mode === 'dev' && (
          <motion.div
            layoutId="toggleBg"
            className="absolute inset-0 bg-purple-500/20 border border-purple-500/30 rounded-md"
            transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
          />
        )}
        <Code2 className="w-3.5 h-3.5 relative z-10" />
        <span className="relative z-10 hidden sm:inline">Dev</span>
      </motion.button>
    </div>
  );
}
