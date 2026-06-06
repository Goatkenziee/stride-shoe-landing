import { Zap, Wind, Shield, RotateCcw } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "ReactX Foam",
    subtitle: "13% More Energy Return",
    description:
      "Our most responsive foam yet. ReactX delivers explosive energy return on every landing — so your legs feel fresh at mile 10 the same way they did at mile 1.",
    color: "#E63946",
  },
  {
    icon: Wind,
    title: "Dual Air Zoom",
    subtitle: "Forefoot + Heel",
    description:
      "Two Air Zoom units work together — heel for cushioned landing, forefoot for propulsive push-off. Every stride gets both protection and speed.",
    color: "#3B82F6",
  },
  {
    icon: Shield,
    title: "Engineered Mesh",
    subtitle: "Adaptive Fit",
    description:
      "A precision-woven upper that adapts to your foot's natural expansion during a run. Breathable where you need airflow, structured where you need support.",
    color: "#10B981",
  },
  {
    icon: RotateCcw,
    title: "Zero Break-In",
    subtitle: "Ready Day One",
    description:
      "No painful break-in period. The Pegasus 41's flexible construction means it runs perfectly out of the box — from your first easy jog to race day.",
    color: "#F59E0B",
  },
];

export default function Benefits() {
  return (
    <section id="about" className="bg-[#1A1A1A] py-28 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#E63946] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Why Pegasus 41
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-none mb-6">
            Every Feature
            <br />
            <span className="text-[#E63946]">Has a Purpose</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Fifty years of athlete feedback. One shoe that reflects all of it.
            The Pegasus 41 isn&apos;t updated for the sake of it — every change
            was earned on real roads, with real runners.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="group relative bg-[#111111] border border-white/5 rounded-2xl p-7 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${b.color}20` }}
                >
                  <Icon size={22} style={{ color: b.color }} />
                </div>

                {/* Text */}
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-1"
                  style={{ color: b.color }}
                >
                  {b.subtitle}
                </p>
                <h3 className="text-white font-black text-xl mb-3">{b.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{b.description}</p>

                {/* Hover accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: b.color }}
                />
              </div>
            );
          })}
        </div>

        {/* Big callout */}
        <div className="mt-16 bg-[#0A0A0A] rounded-3xl p-10 md:p-16 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[#E63946] text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Wear Test Guarantee
            </p>
            <h3 className="text-white font-black text-3xl md:text-4xl leading-tight">
              60 Days. Real Roads.
              <br />
              Full Refund if Not Perfect.
            </h3>
          </div>
          <a
            href="#buy"
            className="shrink-0 bg-[#E63946] hover:bg-[#c82f3b] text-white font-bold px-10 py-5 rounded-full text-sm tracking-wide transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(230,57,70,0.4)] whitespace-nowrap"
          >
            Start Your Trial
          </a>
        </div>
      </div>
    </section>
  );
}
