import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/products';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.testi-card', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.testimonials-scroll', start: 'top 85%', once: true }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: '#091428', padding: '120px 5%' }}
    >
      <div className="max-w-[1280px] mx-auto">
        <span className="text-[#00e5ff] text-xs font-semibold uppercase tracking-[0.15em] mb-3 block">Customer Reviews</span>
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-[#f0f6ff] tracking-[0.02em] leading-none mb-12">
          WHAT OUR CUSTOMERS <span className="text-[#00e5ff]">SAY</span>
        </h2>

        <div className="testimonials-scroll flex gap-6 overflow-x-auto scrollbar-hide pb-4" style={{ scrollSnapType: 'x mandatory' }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testi-card flex-shrink-0 p-8 rounded-xl"
              style={{
                background: '#0c1d38',
                border: '1px solid rgba(0,170,255,0.18)',
                minWidth: 320,
                maxWidth: 360,
                scrollSnapAlign: 'start',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#ffc93c] text-[#ffc93c]" />
                ))}
              </div>

              <p className="text-[#f0f6ff] leading-relaxed italic mb-6">&ldquo;{t.comment}&rdquo;</p>

              <div>
                <div className="text-[#f0f6ff] font-bold">{t.name}</div>
                <div className="text-[#8ca0bb] text-sm">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
