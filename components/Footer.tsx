import { Instagram, Twitter, Youtube, ArrowUpRight } from "lucide-react";

const links = {
  Shop: ["Pegasus 41", "Pegasus 41 Shield", "Pegasus 41 Trail", "All Styles", "Sale"],
  Support: ["Sizing Guide", "Order Tracking", "Returns", "Contact Us", "FAQ"],
  Company: ["Our Story", "Athletes", "Sustainability", "Press", "Careers"],
};

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/5 pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="text-white font-black text-3xl tracking-widest uppercase block mb-4">
              STRIDE
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Built for runners who demand more from every mile. ReactX foam.
              Dual Air Zoom. Engineered to go the distance.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-white font-bold text-xs tracking-widest uppercase mb-5">
                {category}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-white text-sm transition-colors duration-150 flex items-center gap-1 group"
                    >
                      {item}
                      <ArrowUpRight
                        size={10}
                        className="opacity-0 group-hover:opacity-60 transition-opacity"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-[#0A0A0A] rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5">
          <div>
            <p className="text-white font-black text-xl mb-1">
              Early access. Drop alerts. 10% off your first order.
            </p>
            <p className="text-white/40 text-sm">No spam. Unsubscribe anytime.</p>
          </div>
          <form
            className="flex gap-2 w-full md:w-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm px-4 py-3 rounded-xl flex-1 md:w-64 focus:outline-none focus:border-[#E63946] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#E63946] hover:bg-[#c82f3b] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <p className="text-white/25 text-xs">
            © 2026 STRIDE Footwear. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/25 hover:text-white/50 text-xs transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
