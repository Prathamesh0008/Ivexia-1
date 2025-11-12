import Hero from "../components/Hero";
import IvexiaNumbers from "../components/IvexiaNumbers";
import AboutVideo from "../components/AboutVideo";
import TherapyGroups from "../components/TherapyGroups";
import AccordSection from "../components/AccordSection";

export default function Home() {
  return (
    <div >
      <Hero />
      <IvexiaNumbers />
      <AboutVideo />
      <TherapyGroups />
      <AccordSection/>
    </div>
  );
}
