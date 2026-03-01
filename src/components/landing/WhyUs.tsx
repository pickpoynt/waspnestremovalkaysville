import { ShieldCheck, Clock, Award, Hammer, Wrench, Shield, Search, Zap, Target, Thermometer, Radio } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Transferable Warranty",
    description: "Our Boonton repipes come with a lifetime pipe warranty and a 10-year labor guarantee, fully transferable to future homeowners."
  },
  {
    icon: Search,
    title: "Free PB Inspections",
    description: "Not sure if you have the 'gray pipe'? We offer free visual inspections for all Boonton residents to identify polybutylene risk."
  },
  {
    icon: Zap,
    title: "48-Hour Completion",
    description: "Most residential repipes in Boonton are completed in just 2 days, ensuring minimal interruption to your family's routine."
  },
  {
    icon: Shield,
    title: "NJ Code Specialists",
    description: "We handle all Boonton permits and inspections, ensuring your new PEX system is 100% compliant with Morris County regulations."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight leading-tight">
            Boonton's <span className="text-indigo-600 border-b-4 border-indigo-600/20">Repipe Experts</span> <br />
            Certified PB Replacement
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto italic">
            We've helped hundreds of Boonton homeowners transition away from polybutylene. Our experience ensures a smooth, non-invasive process that adds value to your property.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative text-center">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl opacity-50" />
            <img
              src="/1.jpeg"
              alt="Polybutylene Pipe Replacement Specialists in Boonton NJ"
              className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white mx-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-8 -right-8 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl z-20 border border-indigo-500 max-w-[240px]">
              <p className="text-4xl font-bold mb-1 uppercase tracking-tighter">PEX-A</p>
              <p className="text-[10px] font-bold uppercase tracking-widest leading-tight">The Modern Standard for Boonton Repiping</p>
            </div>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Expert Drywall Restoration",
                desc: "We don't just fix pipes; we repair the walls. Our Boonton team includes master patchers who leave your home looking like we were never there."
              },
              {
                title: "Premium PEX-A Systems",
                desc: "We exclusively use PEX-A for Boonton projects—the most flexible and freeze-resistant piping available on the market today."
              },
              {
                title: "Insurance Proof of Repipe",
                desc: "We provide the specific 'Certificate of Repipe' that Boonton insurance carriers require to restore coverage or lower premiums."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-xl border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-7 h-7 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed font-medium italic text-sm">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="pt-8 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 text-center sm:text-left">Concerned about PB Pipes?</p>
                  <h4 className="text-2xl font-bold text-slate-900 uppercase tracking-tight leading-none text-center sm:text-left text-nowrap">Call Boonton Specialists</h4>
                </div>
                <a
                  href="tel:8777921410"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-lg shadow-indigo-900/20 hover:-translate-y-1 inline-flex items-center justify-center w-full sm:w-auto"
                >
                  (877) 792-1410
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
