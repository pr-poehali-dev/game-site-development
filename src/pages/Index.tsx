import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GameGrid from "@/components/GameGrid";
import PlayerStats from "@/components/PlayerStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection />
      <GameGrid />
      <PlayerStats />
    </div>
  );
};

export default Index;
