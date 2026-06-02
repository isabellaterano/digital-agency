import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TiktokLogo,
  XLogo,
  YoutubeLogo,
  ArrowRight,
} from "@phosphor-icons/react";
const Footer = () => {
  return (
    <footer className="relative bg-slate-950 overflow-hidden">
      {" "}
      {/* Glow Effects */}{" "}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/10 blur-[120px]" />{" "}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/10 blur-[120px]" />{" "}
      <div className="relative">
        {" "}
        {/* CTA Section */}{" "}
        <div className="border-b border-white/10">
          {" "}
          <div className="max-w-7xl mx-auto px-6 py-24 text-center">
            {" "}
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold">
              {" "}
              LET'S BUILD SOMETHING GREAT{" "}
            </span>{" "}
            <h2 className="mt-6 text-4xl md:text-6xl font-black text-white">
              {" "}
              Ready to grow your{" "}
              <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                digital presence?{" "}
              </span>{" "}
            </h2>{" "}
            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
              {" "}
              Whether you're launching a new project or scaling an existing
              business, Forge is ready to help.{" "}
            </p>{" "}
            <button className=" mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold hover:scale-105 transition-all ">
              {" "}
              Start Your Project <ArrowRight size={18} />{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
        {/* Footer Content */}{" "}
        <div className="max-w-7xl mx-auto px-6 py-20">
          {" "}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {" "}
            {/* Brand */}{" "}
            <div>
              {" "}
              <h3 className="text-3xl font-black text-white"> FORGE </h3>{" "}
              <p className="mt-5 text-slate-400 leading-relaxed">
                {" "}
                We create high-converting digital experiences through strategy,
                design, development and marketing.{" "}
              </p>{" "}
            </div>{" "}
            {/* Services */}{" "}
            <div>
              {" "}
              <h4 className="text-white font-semibold mb-6"> Services </h4>{" "}
              <ul className="space-y-4 text-slate-400">
                {" "}
                <li>
                  {" "}
                  <a href="#" className="hover:text-indigo-400 transition">
                    {" "}
                    UI/UX Design{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#" className="hover:text-indigo-400 transition">
                    {" "}
                    Web Development{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#" className="hover:text-indigo-400 transition">
                    {" "}
                    Digital Marketing{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#" className="hover:text-indigo-400 transition">
                    {" "}
                    SEO Optimization{" "}
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
            {/* Company */}{" "}
            <div>
              {" "}
              <h4 className="text-white font-semibold mb-6"> Company </h4>{" "}
              <ul className="space-y-4 text-slate-400">
                {" "}
                <li>
                  {" "}
                  <a href="#" className="hover:text-indigo-400 transition">
                    {" "}
                    About{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#" className="hover:text-indigo-400 transition">
                    {" "}
                    Portfolio{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#" className="hover:text-indigo-400 transition">
                    {" "}
                    Blog{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#" className="hover:text-indigo-400 transition">
                    {" "}
                    Contact{" "}
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
            {/* Contact */}{" "}
            <div>
              {" "}
              <h4 className="text-white font-semibold mb-6"> Contact </h4>{" "}
              <div className="space-y-3 text-slate-400">
                {" "}
                <p>Rio de Janeiro, Brazil</p> <p>forge@agency.com</p>{" "}
                <p>+55 (21) 99999-9999</p>{" "}
              </div>{" "}
              <div className="flex gap-3 mt-8">
                {" "}
                {[
                  FacebookLogo,
                  InstagramLogo,
                  LinkedinLogo,
                  XLogo,
                  TiktokLogo,
                  YoutubeLogo,
                ].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className=" w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all "
                  >
                    {" "}
                    <Icon size={20} />{" "}
                  </a>
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Bottom Bar */}{" "}
        <div className="border-t border-white/10">
          {" "}
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            {" "}
            <p className="text-slate-500 text-sm">
              {" "}
              © 2026 Forge Digital Agency. All rights reserved.{" "}
            </p>{" "}
            <div className="flex gap-6 text-sm text-slate-500">
              {" "}
              <a href="#" className="hover:text-indigo-400 transition">
                {" "}
                Privacy Policy{" "}
              </a>{" "}
              <a href="#" className="hover:text-indigo-400 transition">
                {" "}
                Terms of Service{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};
export default Footer;
