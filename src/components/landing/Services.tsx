import { ShieldCheck, Search, Activity, Sprout, Home, Zap } from "lucide-react";

const servicesList = [
  {
    icon: Home,
    title: "Thermal Remediation",
    description: "Our Baltimore specialists use industrial-grade heaters to eliminate bed bugs in a single, eco-friendly treatment."
  },
  {
    icon: Search,
    title: "Eco-Friendly Removal",
    description: "100% chemical-free solutions that are safe for your family and pets while ensuring total bed bug eradication."
  },
  {
    icon: Activity,
    title: "Full Home Eradication",
    description: "We treat your entire property to ensure no bed bugs or eggs survive in even the most hidden crevices."
  },
  {
    icon: Zap,
    title: "Same-Day Results",
    description: "Our heat treatment process is completed in just one day, allowing you to return to a bug-free home by evening."
  },
  {
    icon: Sprout,
    title: "Apartment Specialists",
    description: "Discreet and effective heat treatments tailored for Baltimore apartments and multi-unit housing complexes."
  },
  {
    icon: ShieldCheck,
    title: "Certified Protection",
    description: "Fully licensed and insured professionals providing guaranteed bed bug elimination across the Baltimore metro area."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600">Bed Bug Heat Treatment Baltimore MD</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Comprehensive thermal remediation solutions designed for Baltimore's unique homes and apartments. We reclaim your home's comfort and safety.
          </p>
        </div>





        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-900/20 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
