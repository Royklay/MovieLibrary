import MovieItem from "./MovieItem";

import superman from "../assets/superman.jpeg";
import guardians from "../assets/guardians.jpeg";
import avengers from "../assets/avengers.jpeg";
import spiderman from "../assets/spiderman.jpeg";

function MovieList() {

  // Our movie data
  const movies = [
    {
      id: 1,
      title: "Superman",
      genre: "Sci-Fi",
      year: 2010,
      rating: 8.8,
      description: "A man from another planet saves the world.",
      poster: superman
    },
    {
      id: 2,
      title:"guardian",
      genre: "Adventure",
      year: 2014,
      rating: 8.7,
      description: "A team travels through space searching for a new home.",
      poster: guardians
    },
    {
      id: 3,
      title: "Avengers",
      genre: "Action",
      year: 2008,
      rating: 9.0,
      description: "Avengers deafeat thanos.",
      poster: avengers
    },
    {
      id: 4,
      title: "Spiderman",
      genre: "Fantasy",
      year: 2009,
      rating: 7.9,
      description: "A boy gets beaten by a spider.",
      poster: spiderman
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