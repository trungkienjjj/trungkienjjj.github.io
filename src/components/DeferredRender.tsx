import { useEffect, useRef, useState, type ReactNode } from "react";

export function DeferredRender({
  children,
  fallback
}: {
  children: ReactNode;
  fallback: ReactNode;
}) {
  const markerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!markerRef.current || ready) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "700px 0px" }
    );
    observer.observe(markerRef.current);
    return () => observer.disconnect();
  }, [ready]);

  return <div ref={markerRef}>{ready ? children : fallback}</div>;
}
