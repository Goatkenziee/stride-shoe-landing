import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus D.",
    role: "Marathon Runner • Boston, MA",
    quote:
      "I've run in dozens of shoes over 15 years. The Pegasus 41 is the first pair I've ever re-ordered without thinking twice. The ReactX foam is genuinely different — my calves thanked me after my 20-miler.",
    rating: 5,
    avatar: "M",
    accent: "#E63946",
    detail: "Ran Boston in 3:12",
  },
  {
    name: "Sofia R.",
    role: "5K Beginner • Austin, TX",
    quote:
      "I bought these as my first 'serious' running shoe and I had no idea what I was missing. Zero break-in. I wore them out of the box for a 5K the same day. Finished without a single blister.",
    rating: 5,
    avatar: "S",
    accent: "#3B82F6",
    detail: "PR'd her 5K at 26:44",
  },
  {
    name: "James K.",
    role: "Triathlete • Chicago, IL",
    quote:
      "Comfort at mile 1 and mile 26 is not the same shoe for most brands. For the Pegasus 41, it is. The dual Air Zoom setup is a different sensation on the back half of a race. I won't go back.",
    rating: 5,
    avatar: "J",
    accent: "#10B981",
    detail: "Completed his first Ironman",
  },
  {
    name: "Priya M.",
    role: "Daily Runner • Seattle, WA",
    quote:
      "The engineered mesh is everything. Running in the Pacific Northwest means dealing with heat and rain in the same week. These breathe and flex no matter what the weather throws at them.",
    rating: 5,
    avatar: "P",
    accent: "#F59E0B",
    detail: "Runs 40+ miles per week",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-[#0A0A0A] py-28 px-6 relative overflow-hidden">
      {/* Top edge */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#E63946] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Real Runners. Real Results.
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-none mb-4">
            4.8 Stars.
            <br />
            <span className="text-[#E63946]">12,000+</span> Reviews.
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Don&apos;t take our word for it. Here&apos;s what happens when real
            runners put the Pegasus 41 through its paces.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative bg-[#111111] border border-white/5 rounded-2xl p-8 hover:border-white/15 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote
                size={28}
                className="absolute top-6 right-6 opacity-5"
                fill="white"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 text-base leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0"
                  style={{ backgroundColor: t.accent }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
                <div className="ml-auto">
                  <span
                    className="text-[10px] font-bold tracking-wide uppercase px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: `${t.accent}20`, color: t.accent }}
                  >
                    {t.detail}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-14 bg-[#111111] border border-white/5 rounded-2xl p-8 flex flex-wrap justify-around gap-6">
          {[
            { value: "4.8/5", label: "Average Rating" },
            { value: "12,400+", label: "Verified Reviews" },
            { value: "98%", label: "Would Recommend" },
            { value: "60-Day", label: "Return Window" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-black text-white">{s.value}</p>
              <p className="text-white/40 text-xs font-semibold tracking-wide uppercase mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
