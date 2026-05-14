import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-tag', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.2)
        .fromTo('.hero-title-line', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, 0.3)
        .fromTo('.hero-sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.6)
        .fromTo('.hero-price', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.7)
        .fromTo('.hero-actions', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.8)
        .fromTo(imageRef.current, { opacity: 0, scale: 0.9, x: 60 }, { opacity: 1, scale: 1, x: 0, duration: 1 }, 0.4);
    }, heroRef);

    // Scroll indicator fade
    const handleScroll = () => {
      if (scrollIndicatorRef.current) {
        scrollIndicatorRef.current.style.opacity = window.scrollY > 100 ? '0' : '1';
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToProducts = () => {
    const el = document.getElementById('laptops');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden pt-[68px]"
      style={{ background: 'var(--navy)' }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 70% at 80% 40%, rgba(0,87,255,.22) 0%, transparent 65%),
              radial-gradient(ellipse 50% 60% at 10% 80%, rgba(0,229,255,.12) 0%, transparent 60%),
              linear-gradient(160deg, #050e1f 0%, #081426 60%, #060f20 100%)
            `,
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,170,255,.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,170,255,.06) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 90% 90% at 80% 50%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 80% 50%, black, transparent)',
          }}
        />
        {/* Floating orbs */}
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #0057ff, transparent)', filter: 'blur(80px)', animation: 'float-up 8s ease-in-out infinite' }} />
        <div className="absolute bottom-[10%] right-[15%] w-[250px] h-[250px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #00e5ff, transparent)', filter: 'blur(60px)', animation: 'float-up 10s ease-in-out infinite 2s' }} />
      </div>

      <div className="relative z-10 w-full mx-auto px-[5%] max-w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-12 py-16">
        {/* Left content */}
        <div ref={contentRef} className="flex-1 max-w-[640px]">
          {/* Tag */}
          <div className="hero-tag inline-flex items-center gap-2 px-4 py-1.5 rounded-sm mb-6 opacity-0" style={{ background: 'rgba(0,170,255,.12)', border: '1px solid rgba(0,170,255,.3)' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse-glow" />
            <span className="text-[#00e5ff] text-xs font-bold uppercase tracking-[0.15em]">Douala&apos;s #1 Laptop Store</span>
          </div>

          {/* Title */}
          <h1 className="text-[clamp(3rem,10vw,7rem)] font-black leading-[0.92] tracking-[0.02em] mb-0">
            <span className="hero-title-line block opacity-0 text-[#f0f6ff]">HOT</span>
            <span className="hero-title-line block opacity-0 text-[#00e5ff]">LAPTOP</span>
            <span className="hero-title-line block opacity-0" style={{ WebkitTextStroke: '2px #00aaff', color: 'transparent' }}>DEALS</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-sub mt-6 text-lg font-light text-[#8ca0bb] leading-relaxed max-w-[500px] opacity-0">
            Affordable. Reliable. Powerful. UK Used, Fairly Used & Brand New laptops — for work, gaming, and everything in between.
          </p>

          {/* Price */}
          <div className="hero-price mt-8 opacity-0">
            <div className="text-xs font-bold uppercase tracking-[0.15em] text-[#8ca0bb] mb-1">Starting From</div>
            <div className="text-[clamp(2.5rem,6vw,5rem)] font-black text-[#f0f6ff] tracking-[0.02em] leading-none">
              150.000 <span className="text-[#00e5ff] text-[0.5em]">FCFA</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-actions flex flex-wrap gap-4 mt-10 opacity-0">
            <button
              onClick={scrollToProducts}
              className="inline-flex items-center gap-2 text-white font-bold text-base uppercase tracking-[0.05em] px-8 py-4 rounded-sm border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,87,255,.4)]"
              style={{ background: 'linear-gradient(90deg, #0057ff, #00aaff)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
              Browse Laptops
            </button>
            <a
              href="https://wa.me/237650922053"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold text-base uppercase tracking-[0.05em] px-8 py-4 rounded-sm no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(37,211,102,.4)]"
              style={{ background: '#25d366' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.106 1.523 5.832L0 24l6.335-1.498A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.626 0 11.999 0z"/>
              </svg>
              Chat Now
            </a>
          </div>

          {/* Location */}
          <div className="hero-location mt-6 flex items-center gap-2 text-sm font-bold tracking-[0.05em] text-[#8ca0bb] opacity-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            AKWA, DOUALA — Fast Local Delivery
          </div>
        </div>

        {/* Right - Hero Image */}
        <div ref={imageRef} className="flex-1 max-w-[600px] w-full opacity-0 hidden lg:block">
          <div className="relative">
            <div
              className="rounded-xl overflow-hidden"
              style={{
                boxShadow: '0 40px 80px rgba(0,87,255,0.25), 0 0 120px rgba(0,229,255,0.1)',
              }}
            >
              <img
                src="/images/hero-laptops.jpg"
                alt="Premium Laptops Collection"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '16/9' }}
              />
            </div>
            {/* Floating laptop cards */}
            <div
              className="absolute -bottom-6 -left-6 bg-[#0c1d38] border border-[rgba(0,170,255,0.18)] rounded-lg p-4 backdrop-blur-md"
              style={{ animation: 'float-up 6s ease-in-out infinite' }}
            >
              <div className="flex items-center gap-3">
                <img src="/images/hp-elitebook.jpg" alt="HP" className="w-16 h-10 object-contain rounded" />
                <div>
                  <div className="text-[#00e5ff] text-[10px] font-bold uppercase tracking-wider">HP</div>
                  <div className="text-[#f0f6ff] text-xs font-bold">EliteBook 840</div>
                  <div className="text-[#ffc93c] text-xs font-black">185,000 FCFA</div>
                </div>
              </div>
            </div>
            <div
              className="absolute -top-4 -right-4 bg-[#0c1d38] border border-[rgba(0,170,255,0.18)] rounded-lg p-4 backdrop-blur-md"
              style={{ animation: 'float-up 7s ease-in-out infinite 1s' }}
            >
              <div className="flex items-center gap-3">
                <img src="/images/acer-nitro.jpg" alt="Acer" className="w-16 h-10 object-contain rounded" />
                <div>
                  <div className="text-[#00e5ff] text-[10px] font-bold uppercase tracking-wider">ACER</div>
                  <div className="text-[#f0f6ff] text-xs font-bold">Nitro 5</div>
                  <div className="text-[#ffc93c] text-xs font-black">350,000 FCFA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500"
      >
        <span className="text-[#8ca0bb] text-xs uppercase tracking-widest font-medium">Scroll</span>
        <ChevronDown className="w-5 h-5 text-[#8ca0bb] animate-chevron" />
      </div>
    </section>
  );
}
