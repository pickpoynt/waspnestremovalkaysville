import { ShieldCheck, Trees, Zap, Shield, Home, Wrench } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Montana Service Guarantee",
    description: "Our Montana technicians back every restoration project with a satisfaction guarantee. If your home's finish isn't performing perfectly after our service, we return at no charge."
  },
  {
    icon: Trees,
    title: "Free Montana Estimates",
    description: "Exclusively for Montana log homeowners, we provide free on-site assessments to determine the wood condition and provide a transparent quote for your restoration project."
  },
  {
    icon: Zap,
    title: "Specialized Restoration Expertise",
    description: "Our Montana-based specialists are trained in the specific mechanics of log restoration. We understand how to handle the unique expansion and contraction of Montana's timber."
  },
  {
    icon: Shield,
    title: "Reliable Protection Systems",
    description: "We use high-grade, industry-standard sealants and stains in all Montana restoration jobs — ensuring long-term durability and UV protection for your home's exterior."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden text-nowrap">
      <div className="container mx-auto px-4 text-nowrap">
        <div className="text-center max-w-4xl mx-auto mb-16 text-nowrap">
          <h2 className="text-3xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight leading-tight text-nowrap">
            Montana's <span className="text-indigo-600 border-b-4 border-indigo-600/20 text-nowrap">Local Restoration Experts</span> <br />
            Wood Preservation Professionals
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto italic text-nowrap">
            Montana log homes deserve experts who understand the high-altitude climate. Our technicians have completed hundreds of restorations across Montana and the surrounding area.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center text-nowrap">
          <div className="relative text-center text-nowrap">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl opacity-50 text-nowrap" />
            <img
              src="/1.jpeg"
              alt="Log Home Restoration Specialists in Montana"
              className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white mx-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700 text-nowrap"
            />
            <div className="absolute -bottom-8 -right-8 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl z-20 border border-indigo-500 max-w-[240px] text-nowrap">
              <p className="text-4xl font-bold mb-1 uppercase tracking-tighter text-nowrap">MT</p>
              <p className="text-[10px] font-bold uppercase tracking-widest leading-tight text-nowrap">The Protection Montana Homeowners Trust</p>
            </div>
          </div>

          <div className="space-y-8 text-nowrap">
            {[
              {
                title: "Certified Montana Restorers",
                desc: "Our team holds specialized wood preservation certifications and localized expertise for all log home systems in Montana."
              },
              {
                title: "Local Wood Reliability",
                desc: "We know Montana's specific climate challenges. Our protocols are specifically calibrated for high-altitude UV and moisture conditions."
              },
              {
                title: "Local Montana Service",
                desc: "Being based locally means we can respond to Montana restoration needs promptly, ensuring your home is protected before the next major season."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group text-nowrap">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-xl border border-slate-100 group-hover:scale-110 transition-transform duration-300 text-nowrap">
                  <Trees className="w-7 h-7 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight text-nowrap">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed font-medium italic text-sm text-nowrap">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="pt-8 border-t border-slate-200 text-nowrap">
              <div className="flex flex-col sm:flex-row items-center gap-6 text-nowrap">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 text-center sm:text-left text-nowrap uppercase">Montana Log Home Issue?</p>
                  <h4 className="text-2xl font-bold text-slate-900 uppercase tracking-tight leading-none text-center sm:text-left text-nowrap uppercase">Call Montana Experts</h4>
                </div>
                <a
                  href="tel:3802660944"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-lg shadow-indigo-900/20 hover:-translate-y-1 inline-flex items-center justify-center w-full sm:w-auto text-nowrap"
                >
                  (380) 266-0944
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
