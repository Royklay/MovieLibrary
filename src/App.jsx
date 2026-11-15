import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieList from "./components/MovieList";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="home" className="min-h-screen bg-gray-900">

      <Navbar />

      <Hero />

      <div id="movies">
        <MovieList />
      </div>

      <About />

      <Footer />

    </div>
  );
}

export default App;