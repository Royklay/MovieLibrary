import { Film } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 px-8 py-8">

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Website name */}
        <div className="flex items-center gap-2">
          <Film className="text-blue-400" size={22} />

          <h2 className="text-white font-bold text-xl">
            MovieLibrary
          </h2>
        </div>

        {/* Copyright information */}
        <p className="text-gray-400 text-sm">
          © 2026 MovieLibrary. All rights reserved.
        </p>

       
      </div>

    </footer>
  );
}

export default Footer;