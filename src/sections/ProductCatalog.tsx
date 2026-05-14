import { useState, useEffect, useRef } from 'react';
import { products, brands } from '../data/products';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProductCatalog() {
  const [activeBrand, setActiveBrand] = useState('All');
  const gridRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const filtered = activeBrand === 'All'
    ? products
    : products.filter(p => p.brand.toLowerCase() === activeBrand.toLowerCase());

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.model-card');
    gsap.fromTo(cards,
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.03, ease: 'power2.out' }
    );
  }, [activeBrand]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.catalog-header', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const formatPrice = (price: number) => price.toLocaleString();

  return (
    <section
      id="laptops"
      ref={sectionRef}
      className="relative"
      style={{ background: '#091428', padding: '120px 5%' }}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="catalog-header mb-10">
          <span className="text-[#00e5ff] text-xs font-semibold uppercase tracking-[0.15em] mb-3 block">Our Inventory</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-[#f0f6ff] tracking-[0.02em] leading-none">
            AMAZING <span className="text-[#00e5ff]">LAPTOPS</span> WE OFFER
          </h2>
          <p className="text-[#8ca0bb] mt-4 max-w-[540px] leading-relaxed">
            A curated selection of top models across all major brands — with regular restocks.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className="px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-[0.05em] border transition-all duration-200 cursor-pointer"
              style={{
                background: activeBrand === brand ? '#0057ff' : 'transparent',
                borderColor: activeBrand === brand ? '#0057ff' : 'rgba(0,170,255,0.18)',
                color: activeBrand === brand ? '#fff' : '#8ca0bb',
              }}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="model-card group cursor-pointer"
              style={{
                background: '#0c1d38',
                border: '1px solid rgba(0,170,255,0.18)',
                borderRadius: 8,
                overflow: 'hidden',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,170,255,0.5)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,170,255,0.18)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0a1830, #0d2040)',
                  aspectRatio: '3/2',
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="text-[#00e5ff] text-[11px] font-bold uppercase tracking-[0.1em] mb-1">{product.brand}</div>
                <div className="text-[#f0f6ff] text-base font-bold mb-2">{product.name}</div>
                <div className="text-[#8ca0bb] text-sm mb-3">{product.specs}</div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-sm"
                      style={{
                        background: 'rgba(0,170,255,0.1)',
                        border: '1px solid rgba(0,170,255,0.2)',
                        color: '#00aaff',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(0,170,255,0.1)' }}>
                  <div className="text-[#ffc93c] text-xl font-black">{formatPrice(product.price)} <span className="text-xs text-[#8ca0bb]">FCFA</span></div>
                  <a
                    href={`https://wa.me/237650922053?text=Hi T-Saint Tec! I'm interested in the ${product.name}. Is it still available?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-bold no-underline transition-opacity duration-200 hover:opacity-80"
                    style={{ color: '#25d366' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    </svg>
                    Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
