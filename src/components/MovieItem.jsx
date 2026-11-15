import { Star } from "lucide-react";
function MovieItem(props) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      {/* Movie poster */}
      <img
        src={props.poster}
        alt={props.title}
        className="w-full h-64 object-cover"
      />

      {/* Movie information */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{props.title}</h3>

        <p className="text-blue-400 mt-2">
          {props.genre} • {props.year}
        </p>

        <div className="flex items-center gap-2 mt-2 text-yellow-400">
          <Star size={17} fill="currentColor" />

          <span>{props.rating}/10</span>
        </div>
        
        <p className="text-gray-400 text-sm mt-3">{props.description}</p>
      </div>
    </div>
  );
}

export default MovieItem;
