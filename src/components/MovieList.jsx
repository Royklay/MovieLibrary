import MovieItem from "./MovieItem";

import inception from "../assets/inception.jpg";
import interstellar from "../assets/interstellar.jpg";
import batman from "../assets/batman.jpg";
import avatar from "../assets/avatar.jpg";

function MovieList() {

  // Our movie data
  const movies = [
    {
      id: 1,
      title: "Inception",
      genre: "Sci-Fi",
      year: 2010,
      rating: 8.8,
      description: "A thief enters people's dreams to steal secrets.",
      poster: inception
    },
    {
      id: 2,
      title: "Interstellar",
      genre: "Adventure",
      year: 2014,
      rating: 8.7,
      description: "A team travels through space searching for a new home.",
      poster: interstellar
    },
    {
      id: 3,
      title: "The Dark Knight",
      genre: "Action",
      year: 2008,
      rating: 9.0,
      description: "Batman faces one of his greatest enemies, the Joker.",
      poster: batman
    },
    {
      id: 4,
      title: "Avatar",
      genre: "Fantasy",
      year: 2009,
      rating: 7.9,
      description: "A soldier discovers a beautiful alien world.",
      poster: avatar
    }
  ];

  return (
    <div className="p-8">

      <h2 className="text-3xl font-bold text-white mb-8">
        Popular Movies
      </h2>

      {/* Display all movies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            title={movie.title}
            genre={movie.genre}
            year={movie.year}
            rating={movie.rating}
            description={movie.description}
            poster={movie.poster}
          />
        ))}

      </div>

    </div>
  );
}

export default MovieList;