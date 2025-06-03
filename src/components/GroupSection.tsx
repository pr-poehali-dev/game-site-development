import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const GroupSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 to-purple-300/20 animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-pink-400/30 px-4 py-2 rounded-full">
                <Icon name="Star" className="text-yellow-500" size={16} />
                <span className="text-purple-700 text-sm font-medium">
                  Новый альбом 💫
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-purple-800 font-montserrat leading-tight">
                STELLAR
                <span className="text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">
                  7
                </span>
              </h1>

              <p className="text-xl text-purple-600 leading-relaxed">
                Встречайте самую яркую K-pop группу в ZEPETO! Покупайте
                эксклюзивные виртуальные товары и поддержите своих любимых
                участников ✨
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Icon
                      key={i}
                      name="Heart"
                      className="text-pink-500"
                      size={20}
                    />
                  ))}
                </div>
                <span className="text-purple-800 font-semibold">4.9</span>
                <span className="text-purple-600">(15k поклонников)</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-8 text-white"
              >
                <Icon name="ShoppingBag" className="mr-2" size={20} />В магазин
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-600 hover:bg-purple-400 hover:text-white"
              >
                <Icon name="Music" className="mr-2" size={20} />
                Послушать
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-2xl p-1">
              <div className="w-full h-full bg-white/50 rounded-xl flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop"
                  alt="STELLAR7 группа"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full font-bold">
              HOT! 🔥
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupSection;
