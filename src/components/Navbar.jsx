import { useLayoutEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar = ({
  logo,
  logoAlt = 'Wild Pack',
  className = '',
  ease = 'power3.out',
  baseColor = '#050505',
  buttonBgColor = '#FFC107',
  buttonTextColor = '#000'
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  // FIXED: Changed Services to isSection: false and href: "/services"
  const navItems = [
    { label: "Home", href: "/", isSection: false, bgColor: "#0D0716" },
    { label: "About", href: "/about", isSection: false, bgColor: "#170D27" },
    { label: "Services", href: "/services", isSection: false, bgColor: "#271E37" },
    { label: "Gallery", href: "#gallery", isSection: true, bgColor: "#170D27" },
    { label: "Blog", href: "#blog", isSection: true, bgColor: "#271E37" },
    { label: "Contact", href: "/contact", isSection: false, bgColor: "#0D0716" },
  ];

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const tlRef = useRef(null);

  const handleNavigation = (e, item) => {
    e.preventDefault();
    if (item.isSection) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(item.href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        const el = document.querySelector(item.href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // This will now handle the "Jump" to the Services Page correctly
      navigate(item.href);
    }
    if (isExpanded) toggleMenu();
  };

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content');
      if (contentEl) return 60 + contentEl.scrollHeight + 20;
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;
    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    const tl = gsap.timeline({ paused: true });
    tl.to(navEl, { height: calculateHeight, duration: 0.4, ease });
    return tl;
  };

  useLayoutEffect(() => {
    tlRef.current = createTimeline();
    return () => tlRef.current?.kill();
  }, [navItems]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play();
    } else {
      setIsHamburgerOpen(false);
      tl.reverse().eventCallback('onReverseComplete', () => setIsExpanded(false));
    }
  };

  return (
    <div className={`card-nav-container fixed left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-[999] top-[1.5em] ${className}`}>
      <nav
        ref={navRef}
        className={`card-nav block h-[60px] p-0 rounded-xl shadow-2xl relative overflow-hidden backdrop-blur-md border border-white/10`}
        style={{ backgroundColor: baseColor + 'CC' }}
      >
        <div className="card-nav-top h-[60px] flex items-center justify-between px-6">
          <div className="logo-container cursor-pointer" onClick={() => navigate('/')}>
             <span className="text-xl font-black italic text-white uppercase tracking-tighter" style={{ fontFamily: "'Permanent Marker', cursive" }}>
               Wild <span className="text-[#FFC107]">SHOW</span>
             </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={(e) => handleNavigation(e, item)}
                className="text-white hover:text-[#FFC107] transition-colors text-[10px] font-bold uppercase tracking-[0.2em]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="hidden md:block bg-[#FFC107] text-black px-4 py-2 rounded font-bold text-[10px] uppercase italic"
            >
              Book Now
            </button>
            <div className="md:hidden flex flex-col gap-1.5 cursor-pointer z-[10]" onClick={toggleMenu}>
              <div className={`w-6 h-0.5 bg-white transition-all ${isHamburgerOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all ${isHamburgerOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all ${isHamburgerOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </div>
        </div>

        <div className={`card-nav-content p-4 flex flex-col gap-2 md:hidden ${isExpanded ? 'visible' : 'invisible'}`}>
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={(e) => handleNavigation(e, item)}
              className="p-4 rounded text-white font-bold uppercase italic text-sm"
              style={{ backgroundColor: item.bgColor }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;