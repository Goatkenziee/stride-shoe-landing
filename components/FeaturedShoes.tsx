import Image from "next/image";
import { ShoppingBag, Star } from "lucide-react";

const shoes = [
  {
    id: 1,
    name: "Pegasus 41",
    tagline: "Daily Trainer",
    price: "$130",
    badge: "Best Seller",
    badgeColor: "bg-[#E63946]",
    rating: 4.8,
    reviews: "12,400",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=85",
    colors: ["#E63946", "#1A1A2E", "#F5F5F5"],
    features: ["ReactX Foam", "Air Zoom Units", "Engineered Mesh"],
    href: "#buy",
  },
  {
    id: 2,
    name: "Pegasus 41 Shield",
    tagline: "All-Weather",
    price: "$145",
    badge: "New",
    badgeColor: "bg-white text-[#0A0A0A]",
    rating: 4.7,
    reviews: "3,100",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=85",
    colors: ["#1A3A2A", "#2C2C54", "#0A0A0A"],
    features: ["Water-Resistant", "ReactX Foam", "Midfoot Band"],
    href: "#buy",
  },
  {
    id: 3,
    name: "Pegasus 41 Trail",
    tagline: "Off-Road",
    price: "$150",
    badge: "Limited",
    badgeColor: "bg-amber-500",
    rating: 4.9,
    reviews: "1,850",
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&q=85",
    colors: ["#8B4513", "#2D5016", "#1A1A1A"],
    features: ["Trail Outsole", "ReactX Foam", "Gaiter Hook"],
    href: "#buy",
  },
];

export default function FeaturedShoes() {
  return (
    <section id="shop" className="bg-[#0A0A0A] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[#E63946] text-xs font-bold tracking-[0.3em] uppercase mb-3">
              The Collection
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-none">
              Find Your
              <br />
              <span className="text-[#E63946]">Perfect</span> Pair
            </h2>
          </div>
          <p className="text-white/50 text-base max-w-xs leading-relaxed">
            Three variations. One mission — to make every run the best run of
            your life.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {shoes.map((shoe) => (
            <div
              key={shoe.id}
              className="group relative bg-[#111111] border border-white/5 rounded-2xl overflow-hidden hover:border-[#E63946]/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className={`text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${shoe.badgeColor}`}
                >
                  {shoe.badge}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-64 bg-[#0F0F0F] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                <Image
                  src={shoe.image}
                  alt={shoe.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 90vw, 33vw"
                />
              </div>

              {/* Card body */}
              <div className="p-6">
                <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-1">
                  {shoe.tagline}
                </p>
                <h3 className="text-white font-black text-xl mb-1">{shoe.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={
                          i < Math.floor(shoe.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "fill-white/10 text-white/10"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-white/40 text-xs">
                    {shoe.rating} ({shoe.reviews})
                  </span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {shoe.features.map((f) => (
                    <span
                      key={f}
                      className="text-white/50 text-[10px] font-semibold tracking-wide uppercase border border-white/10 rounded-full px-2.5 py-1"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Color dots */}
                <div className="flex items-center gap-2 mb-6">
                  {shoe.colors.map((c) => (
                    <span
                      key={c}
                      className="w-4 h-4 rounded-full border border-white/20 cursor-pointer hover:scale-125 transition-transform"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-white font-black text-2xl">{shoe.price}</span>
                  <a
                    href={shoe.href}
                    className="flex items-center gap-2 bg-white text-[#0A0A0A] hover:bg-[#E63946] hover:text-white font-bold text-xs px-4 py-2.5 rounded-full transition-all duration-200 tracking-wide"
                  >
                    <ShoppingBag size={14} />
                    Add to Cart
                  </a>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
