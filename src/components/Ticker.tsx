import { trustMetrics } from "../data";

const items = [...trustMetrics, ...trustMetrics];

export default function Ticker() {
  return (
    <div className="border-y border-border overflow-hidden bg-void-2 py-3">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={i} className="mono text-[10px] text-text-soft flex items-center gap-4">
            <span className="text-gold text-[8px]">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
