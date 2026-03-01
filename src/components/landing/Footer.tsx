import { ShieldCheck, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Bug } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative border-t border-indigo-500/20">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] translate-y-48 -translate-x-48" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-900/40">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <div className="text-nowrap">
                <span className="font-heading font-bold text-xl block leading-none tracking-tight text-white uppercase text-[15px]">Kapolei</span>
                <span className="text-sm font-medium text-indigo-500 uppercase tracking-widest text-[10px]">Centipede Control Pros</span>
              </div>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed font-bold italic text-sm">
              Kapolei's certified team for <br /> Hawaii centipede treatment <br /> and nest eradication. <br /> Professional property protection.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-slate-900 hover:border-slate-800 transition-all duration-300 group">
                  <Icon className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-black mb-8 uppercase tracking-[0.3em] text-indigo-500">Centipede Services</h4>
            <ul className="space-y-4">
              {[
                "Nest Identification",
                "Hawaii Centipede Eradication",
                "Perimeter Barrier Defense",
                "Interior Pest Control",
                "Moisture Management",
                "Oahu Emergency Service"
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-400 hover:text-white transition-colors flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 group-hover:w-4 transition-all" />
                    <span className="text-xs font-bold uppercase tracking-widest text-nowrap">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black mb-8 uppercase tracking-[0.3em] text-indigo-500 text-nowrap">Centipede Specialist NAP</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-indigo-500" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">HQ LOCATION</p>
                  <p className="text-sm font-bold text-slate-200 uppercase tracking-widest text-nowrap">Kapolei, HI 96707</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-indigo-500" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">CLIENT ACCESS</p>
                  <a href="tel:3238801224" className="text-sm font-bold text-slate-200 hover:text-indigo-500 transition-colors uppercase tracking-widest leading-none underline decoration-indigo-900 underline-offset-4 text-nowrap">(323) 880-1224</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-indigo-500" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">LICENSING</p>
                  <a href="/lease-my-number" className="text-sm font-bold text-slate-200 hover:text-indigo-500 transition-colors uppercase tracking-widest text-nowrap underline decoration-indigo-900 underline-offset-4">LEASE MY NUMBER</a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black mb-8 uppercase tracking-[0.3em] text-indigo-500">Hawaii Standard</h4>
            <p className="text-slate-400 text-xs leading-relaxed mb-8 font-bold italic uppercase tracking-tighter">
              Exclusively using Oahu-tested <br /> pest control barriers for <br /> long-term protection in <br /> all Kapolei centipede projects.
            </p>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 shadow-inner">
              <p className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-2">Service Promise</p>
              <p className="text-xs font-bold text-slate-400 uppercase leading-snug tracking-tighter italic">Sting-Free Home Guarantee Across Kapolei.</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 uppercase tracking-[0.2em] text-[10px] font-black">
          <p className="text-slate-600 text-center md:text-left">
            © {new Date().getFullYear()} Kapolei Centipede Treatment Pros. <br className="md:hidden" /> All rights reserved. Certified Hawaii Pest Solutions.
          </p>

          <div className="flex gap-8 items-center text-nowrap">
            <a href="/lease-my-number" className="bg-indigo-600 hover:bg-white hover:text-indigo-600 text-white px-6 py-2.5 rounded-xl transition-all duration-300 border border-indigo-600 shadow-lg shadow-indigo-900/20 text-nowrap">LEASE MY NUMBER</a>
            <a href="#" className="text-slate-600 hover:text-indigo-400 transition-colors">Privacy</a>
            <a href="#" className="text-slate-600 hover:text-indigo-400 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
