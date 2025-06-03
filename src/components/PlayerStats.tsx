import Icon from "@/components/ui/icon";

const PlayerStats = () => {
  const stats = [
    {
      label: "Активных игроков",
      value: "2.5М",
      icon: "Users",
      color: "text-blue-400",
    },
    {
      label: "Игр в каталоге",
      value: "1,200+",
      icon: "Gamepad2",
      color: "text-purple-400",
    },
    {
      label: "Турниров в месяц",
      value: "150",
      icon: "Trophy",
      color: "text-yellow-400",
    },
    {
      label: "Призовой фонд",
      value: "$2М",
      icon: "DollarSign",
      color: "text-green-400",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
            Игровая{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              Вселенная
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Присоединяйтесь к миллионам игроков по всему миру
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="mb-4">
                <Icon
                  name={stat.icon as any}
                  className={`mx-auto ${stat.color}`}
                  size={48}
                />
              </div>
              <div className="text-3xl font-bold text-white mb-2 font-montserrat">
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlayerStats;
