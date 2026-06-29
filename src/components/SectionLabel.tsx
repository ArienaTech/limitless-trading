interface SectionLabelProps {
  index: string;
  title: string;
  meta?: string;
}

export default function SectionLabel({ index, title, meta }: SectionLabelProps) {
  return (
    <div className="border-b border-border pb-3 flex items-center justify-between">
      <span className="mono text-[10px] text-text-soft">
        {index} / {title}
      </span>
      {meta && <span className="mono text-[10px] text-text-soft">{meta}</span>}
    </div>
  );
}
