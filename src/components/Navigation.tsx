import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-display text-xl">
            <span className="kinetic-accent">AI</span>CLab
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#slides" className="nav-link">
              슬라이드
            </a>
            <a href="#infographics" className="nav-link">
              인포그래픽
            </a>
            <a href="#roles" className="nav-link">
              역할별 프롬프트
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-foreground transition-transform ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-foreground transition-opacity ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-foreground transition-transform ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4">
            <a
              href="#slides"
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              슬라이드
            </a>
            <a
              href="#infographics"
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              인포그래픽
            </a>
            <a
              href="#roles"
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              역할별 프롬프트
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
