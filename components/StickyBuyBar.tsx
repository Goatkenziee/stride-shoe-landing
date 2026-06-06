"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, ChevronDown, Check } from "lucide-react";

const sizes = ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12"];

export default function StickyBuyBar() {
  const [visible, setVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [sizeOpen, setSizeOpen] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAdd = () => {
    if (!selectedSize) {
      setSizeOpen(true);
      return;
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div
      id="buy"
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          {/* Product info */}
          <div className="hidden sm:block shrink-0">
            <p className="text-white font-black text-base leading-none">Pegasus 41</p>
            <p className="text-white/40 text-xs mt-0.5">ReactX Foam · Air Zoom</p>
          </div>

          <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            {/* Size picker */}
            <div className="relative">
              <button
                className={`flex items-center justify-between gap-3 border rounded-xl px-4 py-2.5 text-sm font-medium transition-colors min-w-[140px] ${
                  selectedSize
                    ? "border-[#E63946] text-white"
                    : "border-white/20 text-white/50 hover:border-white/40"
                }`}
                onClick={() => setSizeOpen(!sizeOpen)}
              >
                <span>{selectedSize ? `Size ${selectedSize}` : "Select Size"}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform ${sizeOpen ? "rotate-180" : ""}`}
                />
              </button>

              {sizeOpen && (
                <div className="absolute bottom-full left-0 mb-2 bg-[#1A1A1A] border border-white/10 rounded-xl p-3 flex flex-wrap gap-2 w-64 shadow-2xl">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        setSelectedSize(s);
                        setSizeOpen(false);
                      }}
                      className={`w-10 h-10 rounded-lg text-xs font-bold transition-all duration-150 ${
                        selectedSize === s
                          ? "bg-[#E63946] text-white"
                          : "bg-white/5 text-white/70 hover:bg-white/10"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Price */}
            <p className="text-white font-black text-2xl sm:text-xl px-2">$130</p>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`flex items-center justify-center gap-2 font-bold text-sm px-8 py-3 rounded-xl transition-all duration-300 flex-1 sm:flex-none ${
                added
                  ? "bg-emerald-500 text-white scale-95"
                  : "bg-[#E63946] hover:bg-[#c82f3b] text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(230,57,70,0.4)]"
              }`}
            >
              {added ? (
                <>
                  <Check size={16} />
                  Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingBag size={16} />
                  Add to Cart
                </>
              )}
            </button>
          </div>

          {/* Trust micro-copy */}
          <div className="hidden lg:flex flex-col text-right shrink-0">
            <p className="text-white/30 text-[10px] font-semibold tracking-wide uppercase">
              Free Shipping &amp; Returns
            </p>
            <p className="text-white/20 text-[10px]">60-day wear test guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
}
