import { SpecialtyGrid } from "@/components/specialties/SpecialtyGrid";
import { TopAppBar } from "@/components/layout/TopAppBar";
import { BottomNavBar } from "@/components/layout/BottomNavBar";
import { FaStethoscope, FaHeartbeat, FaBone, FaBabyCarriage, FaVenusMars, FaBriefcaseMedical } from "react-icons/fa";
import { FaEarListen } from "react-icons/fa6";
import { GiStomach } from "react-icons/gi";

export default function Home() {
  const specialties = [
    {
      title: "General Physician",
      description: "Everyday care",
      icon: FaStethoscope,
      iconColor: "#6B21A8",
      bgColor: "#F3E8FF",
      href: "https://web.mantracare.com/plans/general-physician",
    },
    {
      title: "Cardiologist",
      description: "Heart health",
      icon: FaHeartbeat,
      iconColor: "#E11D48",
      bgColor: "#FFE4E6",
      href: "https://web.mantracare.com/plans/cardiologist",
    },
    {
      title: "Orthopaedician",
      description: "Bone & joint care",
      icon: FaBone,
      iconColor: "#16A34A",
      bgColor: "#DCFCE7",
      href: "https://web.mantracare.com/plans/orthopaedician",
    },
    {
      title: "ENT Specialist",
      description: "Ear, nose & throat",
      icon: FaEarListen,
      iconColor: "#DC2626",
      bgColor: "#FEE2E2",
      href: "https://web.mantracare.com/plans/ent-specialist",
    },
    {
      title: "Gastroenterologist",
      description: "Gut health",
      icon: GiStomach,
      iconColor: "#16A34A",
      bgColor: "#DCFCE7",
      href: "https://web.mantracare.com/plans/gastroenterologist",
    },
    {
      title: "Paediatrician",
      description: "Child care",
      icon: FaBabyCarriage,
      iconColor: "#2563EB",
      bgColor: "#DBEAFE",
      href: "https://web.mantracare.com/plans/paediatrician",
    },
    {
      title: "Sexologist",
      description: "Sexual wellness",
      icon: FaVenusMars,
      iconColor: "#16A34A",
      bgColor: "#DCFCE7",
      href: "https://web.mantracare.com/plans/sexologist",
    },
    {
      title: "Dermatologist",
      description: "Skin health",
      icon: FaBriefcaseMedical,
      iconColor: "#2563EB",
      bgColor: "#DBEAFE",
      href: "https://web.mantracare.com/plans/dermatologist",
    },
  ];

  return (
    <>
      <main className="flex-grow py-[var(--spacing-xl)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] bg-[#F5F7FA] pb-32 md:pb-[var(--spacing-xl)]">
        <div className="max-w-[1280px] w-full lg:w-[70%] mx-auto">
          <SpecialtyGrid specialties={specialties} />
        </div>
      </main>
      <BottomNavBar />
    </>
  );
}
