import { ShieldCheck, Trees, Thermometer, Home, Wrench, Zap, Activity, Search } from "lucide-react";

const services = [
  {
    icon: Trees,
    title: "Log Home Chinking & Sealing",
    description: "Our Montana technicians restore the energy efficiency and protection of your log home. We apply professional-grade chinking that stretches and seals against Montana winters."
  },
  {
    icon: Home,
    title: "Cob Blasting & Surface Prep",
    description: "Montana log homes face intense UV rays. We use gentle cob blasting to remove old stains and prep the wood surface for deep finish absorption without damaging the logs."
  },
  {
    icon: Wrench,
    title: "Log Rot Repair & Replacement",
    description: "Using specialized timber repair techniques, our Montana specialists identify and replace rotted logs. We restore the structural integrity of your log cabin with precision timber work."
  },
  {
    icon: Zap,
    title: "Professional Staining & Finishing",
    description: "We apply multi-layered staining solutions designed for high-altitude Montana climates. Our finishes protect your home from moisture, insects, and intense sunlight year-round."
  },
  {
    icon: Activity,
    title: "Wood Preservation Maintenance",
    description: "Ongoing seasonal care for Montana log homeowners to prevent future issues. Scheduled maintenance includes washing, spot-sealing, and inspection of all log joints."
  },
  {
    icon: Search,
    title: "Structural Integrity Inspections",
    description: "Buying or maintaining a log home in Montana? Our certified specialists provide detailed diagnostics on moisture levels, log condition, and overall building health."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden text-nowrap">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 text-nowrap">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight leading-tight text-nowrap">
            Professional <span className="text-indigo-600 border-b-4 border-indigo-600/20 text-nowrap">Log Home Restoration Montana</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium italic text-nowrap">
            Montana's rugged landscape demands expert log care. We provide complete restoration and maintenance services that protect your home and preserve its natural beauty for generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-nowrap">
          {services.map((service, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-2xl transition-all duration-500 text-nowrap">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6 text-nowrap text-nowrap">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight leading-tight text-nowrap">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm italic text-nowrap">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
