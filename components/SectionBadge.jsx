"use client";

export default function SectionBadge({ children, icon: Icon, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {Icon && (
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary">
          <Icon className="text-sm" />
        </span>
      )}

      <span className="uppercase tracking-[0.3em] text-xs font-semibold text-primary">
        {children}
      </span>
    </div>
  );
}
