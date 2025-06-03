import KpopHeader from "@/components/KpopHeader";
import GroupSection from "@/components/GroupSection";
import ShopGrid from "@/components/ShopGrid";
import UserWallet from "@/components/UserWallet";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      <KpopHeader />
      <GroupSection />
      <ShopGrid />
      <UserWallet />
    </div>
  );
};

export default Index;
