import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  {
    label: 'UK USED',
    color: '#c07aff',
    gradient: 'linear-gradient(135deg, #1a0a40, #2a1060)',
    border: 'rgba(140,80,255,0.3)',
    badge: 'UK',
    desc: 'Pre-owned laptops imported from the UK. Tested, cleaned, and ready to perform at excellent value.',
  },
  {
    label: 'FAIRLY USED',
    color: '#00aaff',
    gradient: 'linear-gradient(135deg, #0a1f40, #0d2a5a)',
    border: 'rgba(0,87,255,0.3)',
    badge: 'Inspected',
    desc: 'Locally inspected and quality-checked second-hand machines in great working condition.',
  },
  {
    label: 'BRAND NEW',
    color: '#00e5ff',
    gradient: 'linear-gradient(135deg, #001f2a, #002a3a)',
    border: 'rgba(0,229,255,0.3)',
    badge: 'Sealed',
    desc: 'Sealed in the original box. Full manufacturer warranty. The freshest machines available.',
  },
];

export default function ConditionTiers() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.cond-card', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: '.condition-grid', start: 'top 80%', once: true }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'linear-gradient(180deg, #091428 0%, #050e1f 100%)',
        padding: '120px 5%',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <span className="text-[#00e5ff] text-xs font-semibold uppercase tracking-[0.15em] mb-3 block">Quality You Can Trust</span>
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-[#f0f6ff] tracking-[0.02em] leading-none mb-4">
          YOUR CHOICE OF <span className="text-[#00e5ff]">QUALITY</span>
        </h2>
        <p className="text-[#8ca0bb] max-w-[500px] mb-12 leading-relaxed">
          Every laptop is tested and verified before it reaches you.
        </p>

        <div className="condition-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.label}
              className="cond-card relative overflow-hidden rounded-lg p-8 md:p-10"
              style={{
                background: tier.gradient,
                border: `1px solid ${tier.border}`,
              }}
            >
              <span
                className="absolute top-5 right-5 text-[11px] font-bold px-3 py-1.5 rounded"
                style={{ background: 'rgba(255,255,255,0.05)', color: tier.color }}
              >
                {tier.badge}
              </span>

              <div className="mb-5">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={tier.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>

              <h3 className="text-2xl font-black tracking-[0.05em] mb-3" style={{ color: tier.color }}>{tier.label}</h3>
              <p className="text-[#8ca0bb] leading-relaxed">{tier.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
