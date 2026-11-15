function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-8 py-5 flex justify-between items-center">
      {/* Website logo */}
      <h1 className="text-2xl font-bold text-blue-400">MovieLibrary</h1>

      {/* Navigation links */}
      <div className="flex gap-6">
        <a href="#home" className="hover:text-blue-400 transition">
          Home
        </a>

        <a href="#movies" className="hover:text-blue-400 transition">
          Movies
        </a>

        <a href="#about" className="hover:text-blue-400 transition">
          About
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
