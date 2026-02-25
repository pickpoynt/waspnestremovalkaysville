import { ShieldCheck, Clock, Award, Hammer } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Same-Day Eradication",
    description: "Bed bug infestations require immediate action. Our Baltimore team provides complete thermal remediation in just one session, ensuring you sleep soundly tonight."
  },
  {
    icon: Hammer,
    title: "Thermal Mastery",
    description: "We are bed bug experts. Our technicians use industrial-grade heaters and precision monitoring to ensure lethal temperatures reach every hiding spot."
  },
  {
    icon: Award,
    title: "Baltimore Certified",
    description: "Fully licensed and insured specifically for bed bug heat treatments in Maryland. We follow strict safety protocols for all eradication services."
  },
  {
    icon: ShieldCheck,
    title: "100% Success Rate",
    description: "Our heat treatment process is proven to eliminate bed bugs at all life stages, including eggs, providing a permanent solution to your infestation."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Premium <span className="text-indigo-600 border-b-4 border-indigo-600/20">Bed Bug Heat</span> <br />
            Experts in Baltimore MD
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Providing Baltimore and the surrounding areas with specialized, professional bed bug heat treatment and property protection services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative text-center">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
            <img
              src="/2.jpeg"
              alt="Professional Bed Bug Control in Baltimore"
              className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white mx-auto"
            />
            <div className="absolute -bottom-8 -right-8 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl z-20 border border-indigo-500 max-w-[240px]">
              <p className="text-4xl font-bold mb-1">100%</p>
              <p className="text-xs font-bold uppercase tracking-widest leading-tight">Success Rate in Baltimore MD</p>
            </div>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Bed Bug Free Home",
                desc: "Our thermal methods stop infestations immediately, saving your furniture, mattresses, and peace of mind from bed bug destruction."
              },
              {
                title: "Localized Expertise",
                desc: "We understand the specific challenges of Baltimore's urban environment and how bed bugs spread in multi-unit housing."
              },
              {
                title: "Precision Remediation",
                desc: "Using advanced heat sensors, we monitor every room to ensure lethal temperatures are maintained for complete eradication."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-xl border border-slate-100 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-7 h-7 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="pt-8 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 text-center sm:text-left">Ready to reclaim your home?</p>
                  <h4 className="text-2xl font-bold text-slate-900 uppercase tracking-tight leading-none text-center sm:text-left">Call Baltimore's Best</h4>
                </div>
                <a
                  href="tel:3238801224"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-lg shadow-indigo-900/20 hover:-translate-y-1 inline-flex items-center justify-center w-full sm:w-auto text-nowrap"
                >
                  3238801224
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};




export default WhyUs;
