import Link from "next/link";
import React from "react";

export interface SpecialtyTileProps {
  title: string;
  description?: string;
  icon: React.ElementType;
  iconColor: string;
  bgColor: string;
  href: string;
}

export function SpecialtyTile({ title, description, icon: Icon, iconColor, bgColor, href }: SpecialtyTileProps) {
  return (
    <Link 
      href={href} 
      className="bg-surface-container-lowest rounded-2xl p-6 flex flex-row items-center gap-4 cursor-pointer shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0px_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group"
    >
      <div 
        className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: bgColor }}
      >
        <Icon 
          className="text-2xl"
          style={{ color: iconColor }}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-primary font-bold text-base leading-tight">{title}</span>
        {description && (
          <span className="text-on-surface-variant text-sm mt-1">{description}</span>
        )}
      </div>
    </Link>
  );
}
