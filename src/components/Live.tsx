import Image from "next/image";
import Reveal from "./Reveal";

const failureReasons = [
  { num: "01", title: "Trading on emotion, not rules" },
  { num: "02", title: "Overtrading when confidence is high" },
  { num: "03", title: "Cutting winners short, holding losers long" },
  { num: "04", title: "Ignoring risk — until it's too late" },
  { num: "05", title: "No system. No edge. No consistency." },
];

export default function Strategy() {
  return (
    <section id="strategy" className="gutter py-24 sm:py-32 bg-void">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <Reveal>
          <span className="mono text-[10px] text-gold tracking-[0.3em] block mb-6">THE PROBLEM</span>
          <h2
            className="display uppercase text-text mb-6"
            style={{ fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.95 }}
          >
            Why Most Traders
            <br />
            <span className="text-gold">Never Make It.</span>
          </h2>
          <p className="text-text-soft text-[15px] mb-10 leading-relaxed max-w-md">
            Over 80% of traders lose money. It&apos;s not intelligence. It&apos;s not market access. 
            It&apos;s the same five mistakes — repeated until the account is gone.
          </p>

          <div className="border-t border-border">
            {failureReasons.map((reason) => (
              <div key={reason.num} className="show-card border-b border-border py-4 flex items-center gap-5">
                <span className="mono text-[11px] text-gold shrink-0">{reason.num}</span>
                <span className="display font-medium text-[16px] text-white">{reason.title}</span>
              </div>
            ))}
          </div>

          <p className="text-text-soft text-[14px] mt-8 leading-relaxed max-w-md">
            Sound familiar? You&apos;re not alone — and it&apos;s not your fault. 
            The game is designed to punish discretion. The only answer is a system.
          </p>
        </Reveal>

        <Reveal index={1}>
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-border mb-8">
            <Image
              src="https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/web-public/Image.png"
              alt="LTG Trading — systematic trading"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-void/40" />
          </div>

          <div className="border border-gold/30 bg-surface p-8">
            <span className="mono text-[10px] text-gold block mb-4">THE LIMITLESS SOLUTION</span>
            <h3
              className="display uppercase text-white mb-4"
              style={{ fontSize: "clamp(22px, 3vw, 38px)", lineHeight: 1 }}
            >
              We removed the human error.
            </h3>
            <p className="text-text-soft text-[13px] mb-6 leading-relaxed">
              Our system executes with zero emotion, zero fatigue, and zero deviation from the rules — 
              24 hours a day, across every market condition.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold shrink-0" />
                <span className="text-text-soft text-[13px]">Rules-based execution — no improvisation, ever</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold shrink-0" />
                <span className="text-text-soft text-[13px]">Algorithms act in milliseconds — emotion removed entirely</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold shrink-0" />
                <span className="text-text-soft text-[13px]">Independent risk controls active on every trade, always</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
