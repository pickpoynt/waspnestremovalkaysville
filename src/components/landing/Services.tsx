import { ShieldCheck, Drill, Search, Clock, Zap, Target, Waves, Activity, Radio, Thermometer, Shield, Droplets } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "PB Pipe Identification",
    description: "Our Boonton specialists conduct thorough inspections to identify gray polybutylene pipes, checking stamps, fittings, and site history to confirm risk levels."
  },
  {
    icon: Target,
    title: "Whole-House Repiping",
    description: "Complete removal of all PB lines in your Boonton home, replaced with industry-leading PEX-A expansion systems for maximum reliability and water flow."
  },
  {
    icon: Shield,
    title: "Code Compliance Updates",
    description: "We ensure your new plumbing system meets all current Boonton and NJ building codes, providing the necessary documentation for home sales and insurance."
  },
  {
    icon: Drill,
    title: "Non-Invasive Installation",
    description: "Using surgical access points, we minimize drywall damage in your Boonton residence, often completing a full repipe with only small, easily patchable holes."
  },
  {
    icon: Droplets,
    title: "Water Main Replacement",
    description: "If your exterior polybutylene service line is leaking, we provide trenchless replacement options to protect your Boonton landscaping."
  },
  {
    icon: Activity,
    title: "Full System Certification",
    description: "Every Boonton repipe includes a full hydrostatic pressure test and a written certification of pipe replacement for your property records."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight leading-tight text-nowrap">
            Expert <span className="text-indigo-600 border-b-4 border-indigo-600/20">Polybutylene Replacement Boonton</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium italic">
            Protecting Boonton homes from the "gray pipe" epidemic. We provide permanent solutions with professional PEX repiping that eliminates the risk of sudden plumbing failure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight leading-tight">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm italic">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
