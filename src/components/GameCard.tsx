import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface GameCardProps {
  title: string;
  genre: string;
  price: string;
  rating: number;
  players: string;
  image: string;
  isNew?: boolean;
}

const GameCard = ({
  title,
  genre,
  price,
  rating,
  players,
  image,
  isNew,
}: GameCardProps) => {
  return (
    <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {isNew && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            NEW
          </div>
        )}
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
          <Icon name="Star" className="text-yellow-400" size={14} />
          <span className="text-white text-sm font-semibold">{rating}</span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-purple-400 text-sm font-medium">{genre}</span>
            <span className="text-gray-400 text-sm">{players}</span>
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors font-montserrat">
            {title}
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            {price === "Бесплатно" ? (
              <span className="text-green-400">{price}</span>
            ) : (
              <span>{price}</span>
            )}
          </div>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            <Icon name="ShoppingCart" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
