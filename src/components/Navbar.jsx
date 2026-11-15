function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-8 py-5 flex justify-between items-center">

      {/* Website logo */}
      <h1 className="text-2xl font-bold text-blue-400">
        MovieLibrary
      </h1>

      {/* Navigation links */}
      <div className="flex gap-6">
        <a href="#" className="hover:text-blue-400">
          Home
        </a>

        <a href="#" className="hover:text-blue-400">
          Movies
        </a>

        <a href="#" className="hover:text-blue-400">
          About
        </a>
      </div>

    </nav>
  );
}

export default Navbar;