import GameCard from "./GameCard";

const GameGrid = () => {
  const games = [
    {
      title: "Neon Warriors",
      genre: "Action RPG",
      price: "₽1,999",
      rating: 4.8,
      players: "До 4 игроков",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      isNew: true,
    },
    {
      title: "Space Odyssey",
      genre: "Стратегия",
      price: "₽2,499",
      rating: 4.6,
      players: "Мультиплеер",
      image:
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
    },
    {
      title: "Battle Royale X",
      genre: "Battle Royale",
      price: "Бесплатно",
      rating: 4.9,
      players: "До 100 игроков",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
      isNew: true,
    },
    {
      title: "Mystery Island",
      genre: "Приключения",
      price: "₽1,499",
      rating: 4.5,
      players: "Одиночная игра",
      image:
        "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=300&fit=crop",
    },
    {
      title: "Racing Evolution",
      genre: "Гонки",
      price: "₽1,799",
      rating: 4.7,
      players: "До 8 игроков",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    },
    {
      title: "Cyber Legends",
      genre: "MMORPG",
      price: "Бесплатно",
      rating: 4.4,
      players: "Массовый мультиплеер",
      image:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
            Популярные{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              Игры
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Откройте для себя лучшие игры этого месяца
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameGrid;
