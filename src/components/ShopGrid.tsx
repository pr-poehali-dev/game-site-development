import ItemCard from "./ItemCard";

const ShopGrid = () => {
  const items = [
    {
      title: "Звездное платье Luna",
      category: "Одежда",
      price: 450,
      rarity: "Легендарный",
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop",
      isNew: true,
      member: "Luna",
    },
    {
      title: "Неоновые крылья",
      category: "Аксессуары",
      price: 320,
      rarity: "Редкий",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    },
    {
      title: "Розовый микрофон Mia",
      category: "Реквизит",
      price: 150,
      rarity: "Обычный",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      isNew: true,
      member: "Mia",
    },
    {
      title: "Голографические кроссовки",
      category: "Обувь",
      price: 280,
      rarity: "Редкий",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    },
    {
      title: "Космическая корона Stella",
      category: "Головные уборы",
      price: 600,
      rarity: "Легендарный",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=300&fit=crop",
      member: "Stella",
    },
    {
      title: "Стикер-пак STELLAR7",
      category: "Стикеры",
      price: 80,
      rarity: "Обычный",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-800 mb-4 font-montserrat">
            Виртуальный{" "}
            <span className="text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">
              Магазин
            </span>
          </h2>
          <p className="text-xl text-purple-600">
            Эксклюзивные товары для твоего ZEPETO аватара ✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <ItemCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopGrid;
