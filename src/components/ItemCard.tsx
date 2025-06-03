import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ItemCardProps {
  title: string;
  category: string;
  price: number;
  rarity: string;
  image: string;
  isNew?: boolean;
  member?: string;
}

const ItemCard = ({
  title,
  category,
  price,
  rarity,
  image,
  isNew,
  member,
}: ItemCardProps) => {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Легендарный":
        return "from-yellow-400 to-orange-400";
      case "Редкий":
        return "from-purple-400 to-pink-400";
      case "Обычный":
        return "from-blue-400 to-cyan-400";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  return (
    <div className="group bg-white/70 backdrop-blur-sm border border-pink-200 rounded-xl overflow-hidden hover:border-purple-300 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {isNew && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            NEW ✨
          </div>
        )}
        <div
          className={`absolute top-3 right-3 bg-gradient-to-r ${getRarityColor(rarity)} text-white px-2 py-1 rounded-full text-xs font-bold`}
        >
          {rarity}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-purple-600 text-sm font-medium">
              {category}
            </span>
            {member && (
              <span className="text-pink-500 text-sm">💜 {member}</span>
            )}
          </div>
          <h3 className="text-xl font-bold text-purple-800 group-hover:text-pink-600 transition-colors font-montserrat">
            {title}
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Icon name="Coins" className="text-yellow-500" size={20} />
            <span className="text-xl font-bold text-purple-800">{price}</span>
          </div>
          <Button
            size="sm"
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
          >
            <Icon name="ShoppingCart" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
