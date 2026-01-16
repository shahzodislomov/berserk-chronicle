interface BrandOfSacrificeProps {
  className?: string;
  size?: number;
}

export default function BrandOfSacrifice({ className = "", size = 40 }: BrandOfSacrificeProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
    >
      {/* Brand of Sacrifice - Simplified iconic shape */}
      <path
        d="M50 5
           L60 25 L80 20 L70 40 L95 50 L70 60 L80 80 L60 75 L50 95
           L40 75 L20 80 L30 60 L5 50 L30 40 L20 20 L40 25 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
      />
      {/* Center eye */}
      <circle cx="50" cy="50" r="8" fill="hsl(var(--background))" />
      <circle cx="50" cy="50" r="4" fill="currentColor" />
    </svg>
  );
}
