import { brandMarquee } from '../data/products';

export default function BrandMarquee() {
  const duplicated = [...brandMarquee, ...brandMarquee];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: 'rgba(12,29,56,0.5)',
        borderTop: '1px solid rgba(0,170,255,0.18)',
        borderBottom: '1px solid rgba(0,170,255,0.18)',
        padding: '28px 0',
      }}
    >
      <div className="text-center mb-5">
        <span className="text-[#8ca0bb] text-[11px] font-bold uppercase tracking-[0.2em]">Premium Brands We Carry</span>
      </div>
      <div className="flex animate-marquee" style={{ width: 'max-content' }}>
        {duplicated.map((brand, i) => (
          <div
            key={`${brand}-${i}`}
            className="flex-shrink-0 px-10 text-[#8ca0bb]/50 hover:text-[#f0f6ff] transition-colors duration-200 cursor-default select-none"
          >
            <span className="text-lg font-bold tracking-[0.1em]">{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
