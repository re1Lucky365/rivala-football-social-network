interface Props {
  className?: string;
  showWordmark?: boolean;
}

export const RivalaLogo = ({ className = "", showWordmark = true }: Props) => (
  <div className={`inline-flex items-center gap-2 ${className}`}>
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-label="Rivala">
      <defs>
        <linearGradient id="rivala-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--primary-glow))" />
        </linearGradient>
      </defs>
      <path
        d="M4 28 L14 4 L18 4 L12 18 L20 18 L14 28 Z M28 28 L18 4 L14 4 L20 18 L12 18 L18 28 Z"
        fill="url(#rivala-mark)"
        opacity="0.95"
      />
    </svg>
    {showWordmark && (
      <span className="font-display font-bold text-lg tracking-[0.15em] text-foreground">
        RIVALA
      </span>
    )}
  </div>
);
