import { useEffect, useRef, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: 68,
        background: scrolled ? 'rgba(5,14,31,0.95)' : 'rgba(5,14,31,0.85)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(0,170,255,0.18)',
      }}
    >
      <div className="flex items-center justify-between h-full mx-auto px-[5%] max-w-[1400px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div
            className="flex items-center justify-center text-white font-black text-sm"
            style={{
              width: 38,
              height: 38,
              background: 'linear-gradient(135deg, #0057ff, #00e5ff)',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          >
            T
          </div>
          <span className="text-[#f0f6ff] font-bold text-base tracking-[0.08em] uppercase">
            T-SAINT <span className="text-[#00e5ff]">TEC</span>
          </span>
        </a>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {[
            { label: 'Categories', id: 'categories' },
            { label: 'Laptops', id: 'laptops' },
            { label: 'Why Us', id: 'features' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="text-[#8ca0bb] hover:text-[#00e5ff] transition-colors duration-200 text-sm font-medium uppercase tracking-[0.05em] bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/237650922053"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-[0.05em] px-6 py-2.5 rounded-sm no-underline transition-all duration-200 hover:-translate-y-px hover:opacity-85"
            style={{ background: 'linear-gradient(90deg, #0057ff, #00aaff)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.106 1.523 5.832L0 24l6.335-1.498A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.626 0 11.999 0z"/>
            </svg>
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
}
