export default function Footer() {
  return (
    <footer
      className="flex flex-wrap items-center justify-between gap-5"
      style={{
        borderTop: '1px solid rgba(0,170,255,0.18)',
        padding: '40px 5%',
        background: '#050e1f',
      }}
    >
      <div className="text-sm text-[#8ca0bb]">
        &copy; 2025 <span className="text-[#00e5ff] font-semibold">T-Saint Tec</span>. All rights reserved. Douala, Cameroon.
      </div>
      <div className="text-sm font-bold tracking-[0.1em]" style={{ color: 'rgba(140,160,187,0.5)' }}>
        AFFORDABLE &middot; RELIABLE &middot; POWERFUL
      </div>
    </footer>
  );
}
