interface ImagePlaceholderProps {
  label: string;
  sublabel?: string;
  className?: string;
  type?: "image" | "video";
}

export default function ImagePlaceholder({
  label,
  sublabel,
  className = "",
  type = "image",
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
            "radial-gradient(120% 120% at 70% 20%, rgba(212,175,55,0.06), transparent 55%)",
        }}
      />
      <div className="absolute left-4 top-4 right-4 flex items-center justify-between">
        <span className="label">{label}</span>
        <span className="w-2 h-2 bg-gold" />
      </div>
      {sublabel && (
        <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 text-center">
          <p className="mono text-[9px] text-text-dim leading-relaxed">{sublabel}</p>
        </div>
      )}
      <div className="absolute left-4 bottom-4 mono text-[10px] text-text-dim">
        {type === "video" ? "▶ NO SIGNAL / VID" : "NO SIGNAL / IMG"}
      </div>
    </div>
  );
}
