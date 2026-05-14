export interface Product {
  id: string;
  brand: string;
  name: string;
  specs: string;
  tags: string[];
  price: number;
  image: string;
}

export const products: Product[] = [
  // HP
  { id: "hp-1", brand: "hp", name: "EliteBook 840 G5", specs: "Core i5 / 8GB / SSD", tags: ["Business", "UK Used"], price: 185000, image: "/images/hp-elitebook.jpg" },
  { id: "hp-2", brand: "hp", name: "EliteBook 850 G6", specs: "Core i7 / 16GB / SSD", tags: ["Business", "Premium"], price: 320000, image: "/images/hp-elitebook850.jpg" },
  { id: "hp-3", brand: "hp", name: "ProBook 450 G6", specs: "Core i5 / 8GB / 1TB", tags: ["Student", "Affordable"], price: 150000, image: "/images/hp-probook.jpg" },
  { id: "hp-4", brand: "hp", name: "Pavilion 15", specs: "Core i5 / 8GB / 512GB SSD", tags: ["Everyday", "Brand New"], price: 280000, image: "/images/hp-pavilion.jpg" },
  { id: "hp-5", brand: "hp", name: "ZBook 15 G5", specs: "Core i7 / 32GB / 1TB SSD", tags: ["Workstation", "Design"], price: 450000, image: "/images/hp-zbook.jpg" },
  // Dell
  { id: "dell-1", brand: "dell", name: "Latitude 5400", specs: "Core i5 / 8GB / SSD", tags: ["Business", "UK Used"], price: 170000, image: "/images/dell-latitude.jpg" },
  { id: "dell-2", brand: "dell", name: "Latitude 7410", specs: "Core i7 / 16GB / SSD", tags: ["Premium", "2-in-1"], price: 380000, image: "/images/dell-latitude7410.jpg" },
  { id: "dell-3", brand: "dell", name: "Inspiron 15 5000", specs: "Core i3 / 4GB / 1TB", tags: ["Student", "Entry"], price: 135000, image: "/images/dell-inspiron.jpg" },
  { id: "dell-4", brand: "dell", name: "XPS 13", specs: "Core i7 / 16GB / 512GB SSD", tags: ["Ultra-thin", "Premium"], price: 520000, image: "/images/dell-xps.jpg" },
  { id: "dell-5", brand: "dell", name: "Precision 5530", specs: "Xeon / 32GB / 1TB SSD", tags: ["Workstation", "4K"], price: 650000, image: "/images/dell-precision.jpg" },
  // Lenovo
  { id: "lenovo-1", brand: "lenovo", name: "ThinkPad T480", specs: "Core i5 / 8GB / SSD", tags: ["Business", "Reliable"], price: 165000, image: "/images/lenovo-t480.jpg" },
  { id: "lenovo-2", brand: "lenovo", name: "ThinkPad X1 Carbon", specs: "Core i7 / 16GB / 1TB SSD", tags: ["Ultra-light", "Premium"], price: 480000, image: "/images/lenovo-x1carbon.jpg" },
  { id: "lenovo-3", brand: "lenovo", name: "ThinkPad E14", specs: "Core i5 / 8GB / 256GB SSD", tags: ["Business", "Affordable"], price: 195000, image: "/images/lenovo-e14.jpg" },
  { id: "lenovo-4", brand: "lenovo", name: "IdeaPad 3", specs: "Ryzen 5 / 8GB / 512GB SSD", tags: ["Student", "Everyday"], price: 220000, image: "/images/lenovo-ideapad.jpg" },
  { id: "lenovo-5", brand: "lenovo", name: "Legion 5", specs: "Ryzen 7 / 16GB / RTX 3060", tags: ["Gaming", "165Hz"], price: 580000, image: "/images/lenovo-legion.jpg" },
  // Acer
  { id: "acer-1", brand: "acer", name: "Aspire 5", specs: "Core i5 / 8GB / 256GB SSD", tags: ["Student", "Affordable"], price: 175000, image: "/images/acer-aspire.jpg" },
  { id: "acer-2", brand: "acer", name: "Swift 3", specs: "Core i7 / 16GB / 512GB SSD", tags: ["Ultra-thin", "Light"], price: 310000, image: "/images/acer-swift.jpg" },
  { id: "acer-3", brand: "acer", name: "Nitro 5", specs: "Core i5 / 16GB / GTX 1650", tags: ["Gaming", "144Hz"], price: 350000, image: "/images/acer-nitro.jpg" },
  { id: "acer-4", brand: "acer", name: "Predator Helios 300", specs: "Core i7 / 16GB / RTX 3060", tags: ["Gaming", "RGB"], price: 520000, image: "/images/acer-predator.jpg" },
  { id: "acer-5", brand: "acer", name: "TravelMate P2", specs: "Core i5 / 8GB / 256GB SSD", tags: ["Business", "Rugged"], price: 190000, image: "/images/acer-aspire.jpg" },
  // Asus
  { id: "asus-1", brand: "asus", name: "VivoBook 15", specs: "Core i5 / 8GB / 512GB SSD", tags: ["Student", "Colorful"], price: 230000, image: "/images/asus-vivobook.jpg" },
  { id: "asus-2", brand: "asus", name: "ZenBook 14", specs: "Core i7 / 16GB / 1TB SSD", tags: ["Premium", "Compact"], price: 420000, image: "/images/asus-zenbook.jpg" },
  { id: "asus-3", brand: "asus", name: "TUF Gaming A15", specs: "Ryzen 7 / 16GB / RTX 3050", tags: ["Gaming", "Durable"], price: 380000, image: "/images/asus-tuf.jpg" },
  { id: "asus-4", brand: "asus", name: "ROG Strix G15", specs: "Core i7 / 16GB / RTX 3060", tags: ["Gaming", "300Hz"], price: 590000, image: "/images/asus-rog.jpg" },
  { id: "asus-5", brand: "asus", name: "ExpertBook B1", specs: "Core i5 / 8GB / 256GB SSD", tags: ["Business", "Secure"], price: 200000, image: "/images/asus-vivobook.jpg" },
];

export const brands = ["All", "HP", "Dell", "Lenovo", "Acer", "Asus"];

export const brandMarquee = ["HP", "DELL", "LENOVO", "ASUS", "ACER", "THINKPAD", "MSI", "APPLE"];

export interface Testimonial {
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  { name: "Jean-Pierre M.", role: "Business Owner", comment: "Bought 3 EliteBooks for my office. All in perfect condition. Best prices in Douala.", rating: 5 },
  { name: "Amina K.", role: "University Student", comment: "Got my ThinkPad within 2 hours of ordering. Battery lasts all day. Highly recommend!", rating: 5 },
  { name: "Francis N.", role: "Developer", comment: "The gaming laptop I bought runs everything I need. Clean, fast delivery to Bonanjo.", rating: 5 },
  { name: "Marie-Louise T.", role: "Entrepreneur", comment: "Second time buying from T-Saint. Consistent quality and honest about condition.", rating: 5 },
];

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  { icon: "Zap", title: "High Performance", description: "Core i5, i7, i9 processors. SSD storage. RAM upgrades available." },
  { icon: "Gamepad2", title: "Powerful Gaming", description: "High-end GPUs and smooth gameplay. Best gaming machines in Douala." },
  { icon: "Battery", title: "Long Battery Life", description: "Every battery tested before hitting the shelf. All-day productivity." },
  { icon: "Shield", title: "Warranty Available", description: "Peace of mind guaranteed. Ask about warranty on purchase." },
  { icon: "Wallet", title: "Affordable Prices", description: "Best value starting from just 135,000 FCFA." },
  { icon: "Package", title: "All Accessories", description: "Bags, mice, headsets, cooling pads — everything in one place." },
];
