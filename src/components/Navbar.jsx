import { Link } from "react-router-dom";
import { Disc, Calendar, Info } from "lucide-react"; // Lucide icons

const Navbar = () => (
  <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
    {/* Brand / Logo */}
    <div className="flex items-center gap-3">
      <Disc className="text-pink-500 w-6 h-6 animate-spin-slow" />
      <h1 className="text-2xl font-extrabold tracking-[0.2em] text-white glow">
        ECHOROOM
      </h1>
    </div>

    {/* Icon Navigation */}
    <div className="flex gap-8 items-center">
      <Link to="/" className="text-white hover:text-pink-400 transition-all">
        <Disc size={22} />
      </Link>
      <Link to="/events" className="text-white hover:text-pink-400 transition-all">
        <Calendar size={22} />
      </Link>
      <Link to="/about" className="text-white hover:text-pink-400 transition-all">
        <Info size={22} />
      </Link>
    </div>
  </nav>
);

export default Navbar;
