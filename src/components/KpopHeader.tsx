import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const KpopHeader = () => {
  return (
    <header className="bg-gradient-to-r from-pink-300/90 via-purple-300/90 to-blue-300/90 backdrop-blur-sm border-b border-pink-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="text-pink-600" size={32} />
              <span className="text-2xl font-bold text-purple-800 font-montserrat">
                STELLAR7 ✨
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-purple-700 hover:text-pink-600 transition-colors font-medium"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-purple-700 hover:text-pink-600 transition-colors font-medium"
              >
                Магазин
              </a>
              <a
                href="#"
                className="text-purple-700 hover:text-pink-600 transition-colors font-medium"
              >
                Участники
              </a>
              <a
                href="#"
                className="text-purple-700 hover:text-pink-600 transition-colors font-medium"
              >
                События
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white/60 px-4 py-2 rounded-full">
              <Icon name="Coins" className="text-yellow-500" size={18} />
              <span className="font-bold text-purple-800">1,250 ZETO</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-purple-700 hover:text-pink-600"
            >
              <Icon name="Search" size={18} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-purple-700 hover:text-pink-600"
            >
              <Icon name="Heart" size={18} />
            </Button>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white">
              Мой аватар
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default KpopHeader;
