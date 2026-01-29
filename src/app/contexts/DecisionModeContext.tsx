import { createContext, useContext, useState, ReactNode } from 'react';

type DecisionMode = 'user' | 'dev';

interface DecisionModeContextType {
  mode: DecisionMode;
  setMode: (mode: DecisionMode) => void;
  isDevMode: boolean;
}

const DecisionModeContext = createContext<DecisionModeContextType | undefined>(undefined);

export function DecisionModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<DecisionMode>('user');

  return (
    <DecisionModeContext.Provider value={{ mode, setMode, isDevMode: mode === 'dev' }}>
      {children}
    </DecisionModeContext.Provider>
  );
}

export function useDecisionMode() {
  const context = useContext(DecisionModeContext);
  if (!context) {
    throw new Error('useDecisionMode must be used within a DecisionModeProvider');
  }
  return context;
}
