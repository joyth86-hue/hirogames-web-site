import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GameShowcase from "@/components/GameShowcase";
import StageShowcase from "@/components/StageShowcase";
import CharacterShowcase from "@/components/CharacterShowcase";
import GrowthShowcase from "@/components/GrowthShowcase";
import CallToActionBanner from "@/components/CallToActionBanner";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";

export default function Home() {
  return (
    <div id="top" className="relative flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <GameShowcase />
        <StageShowcase />
        <CharacterShowcase />
        <GrowthShowcase />
        <CallToActionBanner />
        <ComingSoon />
      </main>
      <Footer />
      <MobileStickyCta />
    </div>
  );
}
