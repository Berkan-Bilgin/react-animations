import React, { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Scroll olayını dinlemek için useEffect kullanalım
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px'i örnek olarak kullandım, istediğiniz bir değeri kullanabilirsiniz
    };

    handleResize();

    // Scroll olayını ekleyelim
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Component kaldırıldığında scroll olayını temizleyelim
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav id="nav"
      className={`
    p-4 sticky top-0 z-10
    transition-colors duration-700
     ${isScrolled || isMobile ? "bg-primary" : "bg-turquoise"}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl"><Link href='/'> LOGO</Link></div>
        <div className="hidden md:flex space-x-4">
          <Link href='/' className=""  >
            Home
          </Link>
          <Link href='/#about' className="">
            About
          </Link>

          <Link href="/#services" className="">
            Services
          </Link>
          <Link href="/#contact" className="">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={handleMobileMenuToggle}
            className=" focus:outline-none"
          >
            <HiMenu className="w-6 h-6" />
          </button>
        </div>
      </div>
      {/* Animasyonlu mobil menü */}
      <div
        className={`${
          isMobileMenuOpen ? "slide-in" : "slide-out"
        } md:hidden bg-gray-500 py-2`}
      >
        <a href="#" className="block  px-4 py-2">
          Ana Sayfa
        </a>
        <a href="#" className="block  px-4 py-2">
          Hakkında
        </a>
        <a href="#" className="block  px-4 py-2">
          Hizmetler
        </a>
        <a href="#" className="block  px-4 py-2">
          İletişim
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
