import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-purple-600/20 px-4 py-2 rounded-full">
                <Icon name="Star" className="text-yellow-400" size={16} />
                <span className="text-purple-300 text-sm font-medium">
                  Игра месяца
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white font-montserrat leading-tight">
                Cyber
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                  Strike
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Погрузитесь в мир киберспорта будущего. Соревнуйтесь с игроками
                со всего мира в динамичных PvP-сражениях.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className="text-yellow-400"
                      size={20}
                    />
                  ))}
                </div>
                <span className="text-white font-semibold">4.9</span>
                <span className="text-gray-400">(2.5k отзывов)</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8"
              >
                <Icon name="Play" className="mr-2" size={20} />
                Играть сейчас
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              >
                <Icon name="Download" className="mr-2" size={20} />
                Скачать
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-2xl p-1">
              <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop"
                  alt="CyberStrike gameplay"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold">
              НОВОЕ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
