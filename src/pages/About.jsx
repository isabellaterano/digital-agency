import { motion } from "framer-motion";
import about1 from "../assets/images/services1.jpg";
import about2 from "../assets/images/services2.jpg";

export default function About() {
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/20 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold">
            ABOUT US
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-black text-white">
            We build digital experiences
            <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              that actually perform
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-400">
            Forge helps brands turn ideas into scalable digital products through
            design, development and strategy.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 mt-24">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              rounded-[32px]
              overflow-hidden
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              hover:scale-[1.02]
              transition
              duration-500
            "
          >
            <img
              src={about1}
              alt="Mission"
              className="w-full h-72 object-cover"
            />

            <div className="p-10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h2>

              <p className="text-slate-400 leading-relaxed">
                We help businesses grow by creating digital products that
                combine strong design, clean engineering and data-driven
                strategy. Our mission is simple: build experiences that convert
                and scale.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              rounded-[32px]
              overflow-hidden
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              hover:scale-[1.02]
              transition
              duration-500
            "
          >
            <img
              src={about2}
              alt="Approach"
              className="w-full h-72 object-cover"
            />

            <div className="p-10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Our Approach
              </h2>

              <p className="text-slate-400 leading-relaxed">
                We don’t do generic solutions. Every project starts with
                strategy, followed by design systems, scalable code and
                continuous optimization. This is how we build long-term growth,
                not just websites.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
