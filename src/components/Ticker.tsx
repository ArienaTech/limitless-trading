import { tickerItems } from "../data";

export default function Ticker() {
  const sequence = [...tickerItems, ...tickerItems];
  return (
    <div className="relative h-14 bg-surface border-y border-border overflow-hidden flex items-center">
      <div className="ticker-track mono text-[12px] text-text">
        {sequence.map((item, i) => (
          <span key={i} className="flex items-center">
            {item}
            <span className="text-acid ml-3">▸</span>
          </span>
        ))}
      </div>
    </div>
  );
}
