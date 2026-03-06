import { Bug, Zap, ShieldCheck, Activity } from "lucide-react";

const services = [
  {
    title: "Rat Extermination",
    description: "Technical removal of rat infestations using advanced baiting and trapping protocols for maximum efficacy.",
    icon: ShieldCheck
  },
  {
    title: "Mouse Proofing",
    description: "Total structural sealing to prevent mice from entering your home through even the smallest crevices.",
    icon: Bug
  },
  {
    title: "Sanitization Service",
    description: "High-pressure biohazard cleaning and decontamination of areas affected by rodent nesting and waste.",
    icon: Zap
  },
  {
    title: "Attic Recovery",
    description: "Specialized insulation replacement and cleaning for attics damaged by rodent activity.",
    icon: Activity
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white mb-6 uppercase tracking-[0.2em] text-[10px] font-bold">
              <Bug className="w-4 h-4" />
              Kaysville Technical Units
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
              Master Rodent <span className="text-indigo-600">Solutions</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed italic font-medium">
              Providing Kaysville with elite rodent maintenance and rapid corrective removals. Professional structural safety 24/7.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-600/10 rounded-[2.5rem] rotate-3" />
            <img
              src="/1.jpeg"
              alt="Kaysville Rodent Inspection"
              className="relative z-10 w-full h-64 object-cover rounded-[2.5rem] shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-indigo-200 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-900/10">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center mb-8 shadow-lg shadow-indigo-900/20 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight uppercase">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium italic">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
