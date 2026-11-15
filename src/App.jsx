import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="min-h-screen bg-gray-900">

      <Navbar />

      <Hero/>

      <MovieList />

    </div>
  );
}

export default App;