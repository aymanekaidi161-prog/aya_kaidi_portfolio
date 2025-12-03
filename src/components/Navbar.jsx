import { useState, useEffect } from "react";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Vision", href: "#vision" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const current = saved || "light";

    setTheme(current);
    document.documentElement.classList.toggle("dark", current === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-stone-900/95 backdrop-blur-md shadow-lg"
          : "bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* LOGO */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="font-display text-xl md:text-2xl font-bold text-amber-900 dark:text-amber-500 hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
          >
            Kaidi Aya
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`text-base font-medium transition-colors duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "text-amber-900 dark:text-amber-500 font-semibold"
                    : "text-stone-600 dark:text-stone-300 hover:text-amber-900 dark:hover:text-amber-500"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 hover:scale-110 transition-all duration-300 shadow-sm"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-amber-900 dark:text-amber-500 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/98 dark:bg-stone-900/98 backdrop-blur-lg border-t border-stone-200 dark:border-stone-700 shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`block py-2 text-lg font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "text-amber-900 dark:text-amber-500 font-semibold"
                      : "text-stone-600 dark:text-stone-300 hover:text-amber-900 dark:hover:text-amber-500"
                  }`}
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile dark mode toggle */}
              <button
                onClick={toggleTheme}
                className="w-full px-6 py-3 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded-lg font-medium hover:bg-stone-200 dark:hover:bg-stone-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                Switch Theme
              </button>

              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
