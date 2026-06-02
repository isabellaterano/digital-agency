import { ArrowRight } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 min-h-screen flex items-center">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/20 blur-[140px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-32">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 backdrop-blur-xl">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />

            <span className="text-sm text-indigo-300 font-medium">
              Trusted by 100+ growing businesses
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05]">
            We Build Websites
            <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              That Generate Revenue
            </span>
          </h1>

          <p className="mt-8 text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            High-converting websites, branding and digital experiences designed
            to help ambitious companies scale faster.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300"
            >
              Start a Project
              <ArrowRight />
            </a>

            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-violet-500/30 to-cyan-500/30 blur-3xl" />

          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_100px_rgba(99,102,241,0.25)] bg-white/5 backdrop-blur-xl">
            {/* SUA IMAGEM ORIGINAL */}
            <img
              src="https://pagedone.io/asset/uploads/1691054543.png"
              alt="Dashboard"
              className="w-full"
            />
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-4xl font-black text-white">120+</h3>
            <p className="text-slate-400 mt-2">Projects Delivered</p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-white">98%</h3>
            <p className="text-slate-400 mt-2">Client Retention</p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-white">5M+</h3>
            <p className="text-slate-400 mt-2">Revenue Generated</p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-white">24/7</h3>
            <p className="text-slate-400 mt-2">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
