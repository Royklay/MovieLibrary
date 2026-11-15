import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-900">

      <Navbar />

      <Hero/>

      <MovieList />

      <Footer/>

    </div>
  );
}

export default App;