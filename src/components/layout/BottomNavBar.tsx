import Link from "next/link";
import React from "react";
import { MdHome, MdMedicalServices, MdEvent, MdPerson } from "react-icons/md";

export function BottomNavBar() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-2 bg-surface-container-lowest shadow-[0px_-4px_20px_rgba(0,0,0,0.04)] z-50 rounded-t-xl pb-6">
      <Link href="#" className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1">
        <MdHome className="text-[24px]" />
        <span className="text-[length:var(--text-label-sm)] font-medium mt-1">Home</span>
      </Link>
      <Link href="#" className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1">
        <MdMedicalServices className="text-[24px]" />
        <span className="text-[length:var(--text-label-sm)] font-medium mt-1">Specialties</span>
      </Link>
      <Link href="#" className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1">
        <MdEvent className="text-[24px]" />
        <span className="text-[length:var(--text-label-sm)] font-medium mt-1">Appointments</span>
      </Link>
      <Link href="#" className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1">
        <MdPerson className="text-[24px]" />
        <span className="text-[length:var(--text-label-sm)] font-medium mt-1">Profile</span>
      </Link>
    </nav>
  );
}
