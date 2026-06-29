"use client";

import { useMemo } from "react";

export default function Waveform({ count = 80 }: { count?: number }) {
  const bars = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        dur: (0.6 + Math.random() * 1.6).toFixed(2),
        delay: (Math.random() * 1.5).toFixed(2),
      })),
    [count],
  );

  return (
    <div className="waveform" aria-hidden="true">
      {bars.map((b, i) => (
        <span
          key={i}
          className="bar"
          style={
            {
              "--dur": `${b.dur}s`,
              animationDelay: `${b.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
