import {
  GraduationCap,
  Code,
  Briefcase,
  ChartBar,
} from "@phosphor-icons/react";

const Stats = () => {
  return (
    <section className="">
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            What makes us special
          </h2>

          <p className="mt-4 text-gray-600">
            At Forge Digital Agency, we excel in delivering tailored solutions
            that drive results. Here’s why we stand out:
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-[--primary-color] p-4">
              <GraduationCap size={32} className="text-white" />
            </span>

            <div>
              <h2 className="text-lg font-bold">Expertise & Innovation</h2>

              <p className="mt-1 text-sm text-gray-600">
                Our team consists of industry experts who are constantly
                innovating to stay ahead in the digital space.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-[--primary-color] p-4">
              <Code size={32} className="text-white" />
            </span>

            <div>
              <h2 className="text-lg font-bold">Cutting-Edge Technology</h2>

              <p className="mt-1 text-sm text-gray-600">
                We leverage the latest technologies to build robust and scalable
                solutions that meet your business needs.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-[--primary-color] p-4">
              <ChartBar size={32} className="text-white" />
            </span>

            <div>
              <h2 className="text-lg font-bold">Data-Driven Strategies</h2>

              <p className="mt-1 text-sm text-gray-600">
                Our strategies are backed by data and insights, ensuring that
                every decision is informed and impactful.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-[--primary-color] p-4">
              <Briefcase size={32} className="text-white" />
            </span>

            <div>
              <h2 className="text-lg font-bold">Client-Focused Approach</h2>

              <p className="mt-1 text-sm text-gray-600">
                We prioritize our clients’ needs, ensuring personalized
                solutions and exceptional service every step of the way.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-[--primary-color] p-4">
              <GraduationCap size={32} className="text-white" />
            </span>

            <div>
              <h2 className="text-lg font-bold">Continuous Learning</h2>

              <p className="mt-1 text-sm text-gray-600">
                Our commitment to continuous learning keeps us at the forefront
                of the industry, ready to tackle any challenge.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-[--primary-color] p-4">
              <GraduationCap size={32} className="text-white" />
            </span>

            <div>
              <h2 className="text-lg font-bold">Proven Track Record</h2>

              <p className="mt-1 text-sm text-gray-600">
                Our portfolio speaks for itself. We have a proven track record
                of delivering successful projects that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
