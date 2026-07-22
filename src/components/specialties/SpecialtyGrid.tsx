import React from "react";
import { SpecialtyTile, SpecialtyTileProps } from "./SpecialtyTile";

export interface SpecialtyGridProps {
  specialties: SpecialtyTileProps[];
}

export function SpecialtyGrid({ specialties }: SpecialtyGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[var(--spacing-gutter)]">
      {specialties.map((specialty, index) => (
        <SpecialtyTile key={index} {...specialty} />
      ))}
    </div>
  );
}
