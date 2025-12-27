import { useLayoutEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = ({
  baseColor = "#050505",
  menuColor = "#fff",
  ease = "power3.out",
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const servicesDropdownItems = [
    { label: "Safari Jeep", href: "/services" },
    { label: "Taxi Service", href: "/taxi" },
  ];

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", hasDropdown: true },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const tlRef = useRef(null);

  /* ---------------- DESKTOP CLICK OUTSIDE ---------------- */
  useLayoutEffect(() => {
    const closeOnOutsideClick = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !e.target.closest("#services-btn")
      ) {
        setIsServicesOpen(false);
      }
    };

    if (isServicesOpen) {
      document.addEventListener("mousedown", closeOnOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, [isServicesOpen]);

  /* ---------------- MOBILE MENU ANIMATION ---------------- */
  useLayoutEffect(() => {
    if (!navRef.current) return;

    tlRef.current = gsap.timeline({ paused: true });
    tlRef.current.to(navRef.current, {
      height: "auto",
      duration: 0.4,
      ease,
    });
  }, []);

  const toggleMenu = () => {
    if (!tlRef.current) return;

    if (!isExpanded) {
      setIsExpanded(true);
      tlRef.current.play();
    } else {
      tlRef.current.reverse().eventCallback("onReverseComplete", () => {
        setIsExpanded(false);
      });
    }
  };

  const handleNavigate = (href) => {
    navigate(href);
    window.scrollTo(0, 0);
    setIsServicesOpen(false);
    setIsExpanded(false);
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[800px] z-[9999]">
      <nav
        ref={navRef}
        className="rounded-xl shadow-2xl backdrop-blur-md border border-white/10 overflow-visible"
        style={{ backgroundColor: baseColor + "DD" }}
      >
        {/* ---------------- TOP BAR ---------------- */}
        <div className="h-[60px] flex items-center justify-between px-6 relative">
          <div
            className="text-xl font-black italic text-white cursor-pointer"
            onClick={() => handleNavigate("/")}
          >
            SAFARI TALES <span className="text-[#FFC107]">BY PODI</span>
          </div>

          {/* ---------------- DESKTOP NAV ---------------- */}
          <div className="hidden md:flex items-center gap-6 relative">
            {navItems.map((item, i) =>
              item.hasDropdown ? (
                <div key={i} className="relative">
                  <button
                    id="services-btn"
                    onClick={() => setIsServicesOpen((prev) => !prev)}
                    className="uppercase font-bold text-[10px] tracking-[0.2em] flex items-center gap-1"
                    style={{ color: menuColor }}
                  >
                    Services
                    <span
                      className={`transition-transform ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {isServicesOpen && (
                    <div
                      ref={dropdownRef}
                      className="absolute top-full left-0 mt-3 rounded-lg shadow-2xl border border-white/10 min-w-[180px] z-[10000]"
                      style={{
                        backgroundColor: baseColor + "F0",
                        pointerEvents: "auto",
                      }}
                    >
                      {servicesDropdownItems.map((s, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavigate(s.href)}
                          className="w-full text-left px-4 py-3 uppercase font-bold text-[10px] hover:bg-[#FFC107] hover:text-black transition"
                          style={{ color: menuColor }}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={i}
                  onClick={() => handleNavigate(item.href)}
                  className="uppercase font-bold text-[10px] tracking-[0.2em] hover:text-[#FFC107]"
                  style={{ color: menuColor }}
                >
                  {item.label}
                </button>
              )
            )}
          </div>

          {/* ---------------- MOBILE HAMBURGER ---------------- */}
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            <div className="w-6 h-0.5 bg-white mb-1" />
            <div className="w-6 h-0.5 bg-white mb-1" />
            <div className="w-6 h-0.5 bg-white" />
          </div>
        </div>

        {/* ---------------- MOBILE MENU ---------------- */}
        {isExpanded && (
          <div className="md:hidden p-4 flex flex-col gap-2">
            {navItems.map((item, i) =>
              item.hasDropdown ? (
                <div key={i}>
                  <button
                    onClick={() => setIsServicesOpen((prev) => !prev)}
                    className="w-full p-3 font-bold uppercase italic flex justify-between"
                    style={{ color: menuColor }}
                  >
                    Services <span>▼</span>
                  </button>

                  {isServicesOpen && (
                    <div className="ml-4 flex flex-col gap-2">
                      {servicesDropdownItems.map((s, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavigate(s.href)}
                          className="p-3 text-left font-bold uppercase italic"
                          style={{ color: menuColor }}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={i}
                  onClick={() => handleNavigate(item.href)}
                  className="p-3 font-bold uppercase italic text-left"
                  style={{ color: menuColor }}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
