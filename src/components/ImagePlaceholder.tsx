interface ImagePlaceholderProps {
  label: string;
  className?: string;
}

export default function ImagePlaceholder({
  label,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative bg-surface border border-border overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 noise-overlay opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(120% 120% at 70% 20%, rgba(170,255,0,0.06), transparent 55%)",
        }}
      />
      <div className="absolute left-4 top-4 right-4 flex items-center justify-between">
        <span className="label">{label}</span>
        <span className="w-2 h-2 bg-acid" />
      </div>
      <div className="absolute left-4 bottom-4 mono text-[10px] text-text-dim">
        NO SIGNAL / IMG
      </div>
    </div>
  );
}
