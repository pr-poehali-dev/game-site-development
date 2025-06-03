import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" className="text-purple-400" size={32} />
              <span className="text-2xl font-bold text-white font-montserrat">
                GameZone
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
              >
                Игры
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
              >
                Новости
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
              >
                Турниры
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white"
            >
              <Icon name="Search" size={18} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white"
            >
              <Icon name="Bell" size={18} />
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Войти
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
