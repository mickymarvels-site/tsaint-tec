import { useEffect, useRef } from 'react';
import { Zap, Gamepad2, Battery, Shield, Wallet, Package } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  Zap, Gamepad2, Battery, Shield, Wallet, Package,
};

const features = [
  { icon: 'Zap', title: 'High Performance', desc: 'Core i5, i7, i9 processors. SSD storage. RAM upgrades available.' },
  { icon: 'Gamepad2', title: 'Powerful Gaming', desc: 'High-end GPUs and smooth gameplay. Best gaming machines in Douala.' },
  { icon: 'Battery', title: 'Long Battery Life', desc: 'Every battery tested before hitting the shelf. All-day productivity.' },
  { icon: 'Shield', title: 'Warranty Available', desc: 'Peace of mind guaranteed. Ask about warranty on purchase.' },
  { icon: 'Wallet', title: 'Affordable Prices', desc: 'Best value starting from just 135,000 FCFA.' },
  { icon: 'Package', title: 'All Accessories', desc: 'Bags, mice, headsets, cooling pads — everything in one place.' },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.feat-item', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.features-grid', start: 'top 85%', once: true }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      style={{ background: '#050e1f', padding: '120px 5%' }}
    >
      <div className="max-w-[1280px] mx-auto">
        <span className="text-[#00e5ff] text-xs font-semibold uppercase tracking-[0.15em] mb-3 block">Why T-Saint Tec</span>
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-[#f0f6ff] tracking-[0.02em] leading-none mb-4">
          THE BEST PRICES. <span className="text-[#00e5ff]">ALWAYS.</span>
        </h2>
        <p className="text-[#8ca0bb] max-w-[540px] mb-12 leading-relaxed">
          We built our reputation on trust, transparency, and quality.
        </p>

        <div className="features-grid grid grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feat) => {
            const Icon = iconMap[feat.icon];
            return (
              <div key={feat.title} className="feat-item flex flex-col gap-4">
                <div
                  className="w-14 h-14 rounded-[10px] flex items-center justify-center"
                  style={{
                    background: 'rgba(0,87,255,0.15)',
                    border: '1px solid rgba(0,87,255,0.3)',
                  }}
                >
                  <Icon className="w-6 h-6 text-[#00aaff]" />
                </div>
                <h3 className="text-lg font-bold text-[#f0f6ff] tracking-wide">{feat.title}</h3>
                <p className="text-[15px] text-[#8ca0bb] leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
