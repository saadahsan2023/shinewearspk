import { ShoppingBag, Search, Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../public/Logo.png"
import { Link } from "react-router-dom";
const Navbar = () => {

 const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
    return (
    <>
        <header className="px-6 md:px-8 py-5 bg-black ">
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <img src={Logo} className="h-16 p-0 m-0 w-16"/>
          <h1 className="text-2xl font-bold text-[#D0AF65] tracking-widest">
            Shine<span className="text-[#D0AF65]">wears</span>
          </h1>
                </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-sm font-medium relative">

           
            <a  href="#"></a>
           <Link to="/" className="text-[#D0AF65]">Home</Link>
            <div className="relative group">
              <Link to="/categories" type="button" className="text-[#D0AF65] flex items-center gap-1">
                Categories
              </Link>
              <div className="absolute left-0 top-full w-44 bg-white border-[#68563A] z-10  rounded-xl shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                <Link className="block px-4 py-2 hover:text-[#D0AF65]" to="/ringcategories">Rings</Link>
                <Link className="block px-4 py-2 hover:text-[#D0AF65]" to="/necklacescategories">Necklaces</Link>
                <Link className="block px-4 py-2 hover:text-[#D0AF65]" to="/earringcategories">Earrings</Link>
                <Link className="block px-4 py-2 hover:text-[#D0AF65]" to="/braceletcategories">Bracelets</Link>
              </div>
            </div>

            <Link className="text-[#D0AF65]" to="/aboutus">About Us</Link>
            <Link className="text-[#D0AF65]" to="/contactus">Contact Us</Link>
          </nav>

          {/* Icons + Hamburger */}
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 hidden md:block cursor-pointer text-[#D0AF65]" />
            <Heart className="w-5 h-5 hidden md:block cursor-pointer text-[#D0AF65]" />
            <ShoppingBag className="w-5 h-5 hidden md:block cursor-pointer text-[#D0AF65]" />

            <button
              type="button"
              className="md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#D0AF65] " />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden mt-6 bg-white border rounded-2xl shadow-lg p-6 flex flex-col gap-4 text-sm font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[#D0AF65]">Home</Link>

            {/* Mobile Categories */}
            <Link
              to="/categories"
              type="button"
              onClick={() => setCatOpen((v) => !v)}
              className="flex justify-between items-center hover:text-[#D0AF65]"
            >
              Categories
              <span>{catOpen ? "−" : "+"}</span>
            </Link>

            {catOpen && (
              <div className="ml-4 flex flex-col gap-2 text-sm text-white">
                <Link to="/ringcategories" onClick={() => setMenuOpen(false)}>Rings</Link>
                <Link to="/necklacescategories" onClick={() => setMenuOpen(false)}>Necklaces</Link>
                <Link to="/earringcategories" onClick={() => setMenuOpen(false)}>Earrings</Link>
                <Link to="/braceletcategories" onClick={() => setMenuOpen(false)}>Bracelets</Link>
              </div>
            )}

            <Link to="/aboutus" onClick={() => setMenuOpen(false)} className="hover:text-[#D0AF65]">About Us</Link>
            <Link to="/contactus" onClick={() => setMenuOpen(false)} className="hover:text-[#D0AF65]">Contact</Link>
          </div>
        )}
      </header>

    </>
  )
}

export default Navbar
