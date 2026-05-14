import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-content', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: '#050e1f', padding: '140px 5%' }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,87,255,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="cta-content relative z-10 max-w-[700px] mx-auto text-center">
        <span className="text-[#00e5ff] text-xs font-semibold uppercase tracking-[0.15em] mb-3 block">Get In Touch</span>
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-[#f0f6ff] tracking-[0.02em] leading-none mb-6">
          READY TO <span className="text-[#00e5ff]">ORDER?</span>
        </h2>
        <p className="text-[#8ca0bb] text-lg max-w-[500px] mx-auto mb-10 leading-relaxed">
          Contact us on WhatsApp or call us directly. Fast delivery within Douala. Limited stock — don&apos;t wait.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="https://wa.me/237650922053"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-bold text-base uppercase tracking-[0.05em] px-9 py-4 rounded-sm no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(37,211,102,.4)]"
            style={{ background: '#25d366' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.106 1.523 5.832L0 24l6.335-1.498A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.626 0 11.999 0z"/>
            </svg>
            Order on WhatsApp
          </a>
          <a
            href="tel:+237650922053"
            className="inline-flex items-center gap-2 text-white font-bold text-base uppercase tracking-[0.05em] px-9 py-4 rounded-sm no-underline transition-all duration-200 hover:-translate-y-0.5 border-2"
            style={{ borderColor: '#0057ff', background: 'transparent' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call Us Now
          </a>
        </div>

        {/* Phone numbers */}
        <div className="flex flex-wrap justify-center gap-12 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-[#8ca0bb] mb-1">Call or WhatsApp</div>
            <div className="text-[clamp(1.5rem,3vw,2.5rem)] font-black text-[#f0f6ff] tracking-[0.05em]">650 922 053</div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-[#8ca0bb] mb-1">Alternate Number</div>
            <div className="text-[clamp(1.5rem,3vw,2.5rem)] font-black text-[#f0f6ff] tracking-[0.05em]">697 775 998</div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-sm font-bold tracking-[0.05em] text-[#8ca0bb]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          AKWA, DOUALA — Walk in or order for delivery
        </div>
      </div>
    </section>
  );
}
