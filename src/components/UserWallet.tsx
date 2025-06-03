import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const UserWallet = () => {
  const stats = [
    {
      label: "ZETO коинов",
      value: "1,250",
      icon: "Coins",
      color: "text-yellow-500",
    },
    {
      label: "Товаров куплено",
      value: "23",
      icon: "ShoppingBag",
      color: "text-purple-500",
    },
    {
      label: "Участников поддержано",
      value: "7",
      icon: "Heart",
      color: "text-pink-500",
    },
    {
      label: "Уровень фаната",
      value: "VIP",
      icon: "Crown",
      color: "text-orange-500",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-800 mb-4 font-montserrat">
            Мой{" "}
            <span className="text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">
              Кошелек
            </span>
          </h2>
          <p className="text-xl text-purple-600">
            Следи за своими ZETO коинами и покупками
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/70 backdrop-blur-sm border border-pink-200 rounded-xl p-8 hover:border-purple-300 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4">
                <Icon
                  name={stat.icon as any}
                  className={`mx-auto ${stat.color}`}
                  size={48}
                />
              </div>
              <div className="text-3xl font-bold text-purple-800 mb-2 font-montserrat">
                {stat.value}
              </div>
              <div className="text-purple-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8"
          >
            <Icon name="Plus" className="mr-2" size={20} />
            Получить ZETO коины
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UserWallet;
