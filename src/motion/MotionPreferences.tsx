import { createContext, type ReactNode, useContext, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

const MotionPreferencesContext = createContext(false);

export function MotionPreferencesProvider({ children }: { children: ReactNode }) {
  const systemReducedMotion = useReducedMotion() ?? false;
  const reducedMotion =
    systemReducedMotion ||
    new URLSearchParams(window.location.search).get("motion") === "reduce";

  useEffect(() => {
    document.documentElement.dataset.motion = reducedMotion ? "reduce" : "full";
  }, [reducedMotion]);

  return (
    <MotionPreferencesContext.Provider value={reducedMotion}>
      {children}
    </MotionPreferencesContext.Provider>
  );
}

export function useMotionPreferences() {
  return useContext(MotionPreferencesContext);
}
