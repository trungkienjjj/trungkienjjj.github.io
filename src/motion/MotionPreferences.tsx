import { createContext, type ReactNode, useContext } from "react";
import { useReducedMotion } from "framer-motion";

const MotionPreferencesContext = createContext(false);

export function MotionPreferencesProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <MotionPreferencesContext.Provider value={reducedMotion}>
      {children}
    </MotionPreferencesContext.Provider>
  );
}

export function useMotionPreferences() {
  return useContext(MotionPreferencesContext);
}
