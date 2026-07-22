import React from "react";

export function TopAppBar() {
  return (
    <header className="bg-[var(--color-surface)] sticky top-0 z-40 w-full border-b border-[var(--color-outline-variant)]/30 h-16 flex items-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
      <div className="font-bold text-primary text-[length:var(--text-headline-md)]">
        Serene Health
      </div>
    </header>
  );
}
