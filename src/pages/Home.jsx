//Ivexia-1\src\pages\Home.jsx
import { useTranslation } from "react-i18next";

import Hero from "../components/Hero";
import IvexiaNumbers from "../components/IvexiaNumbers";
import AboutVideo from "../components/AboutVideo";
import TherapyGroups from "../components/TherapyGroups";
import AccordSection from "../components/AccordSection";
import LeadershipSection from "../components/LeadershipSection";
import ResearchManufacturingSection from "../components/ResearchManufacturingSection";
import LatestFromIvexia from "../components/LatestFromIvexia";

export default function Home() {
  const { t } = useTranslation("common");

  return (
<div className="pt-0">
      
      <Hero />
      <IvexiaNumbers />
      <AboutVideo />
      <TherapyGroups />
      <AccordSection />
      <LeadershipSection />
      <ResearchManufacturingSection />
      <LatestFromIvexia />
    </div>
  );
}
