import { ShieldCheck, Bug, Search, Clock, Zap, Target, Waves, Activity, Radio, Thermometer, Shield, Droplets } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Centipede Nest Location",
    description: "Our Kapolei specialists are trained to identify Hawaii centipede nesting sites in damp areas, soil, and structural voids to ensure complete colony elimination."
  },
  {
    icon: Target,
    title: "Perimeter Defense Barrier",
    description: "We create a high-potency chemical and physical barrier around your Kapolei home, preventing invasive centipedes from ever crossing your threshold."
  },
  {
    icon: Bug,
    title: "Interior Eradication",
    description: "Advanced, low-toxicity treatments inside your Kapolei residence to eliminate existing pests while keeping your family and pets safe."
  },
  {
    icon: Shield,
    title: "Preventative Maintenance",
    description: "Recurring service plans in Kapolei to maintain your home's defenses throughout Hawaii's high-moisture seasons when centipede activity peaks."
  },
  {
    icon: Droplets,
    title: "Moisture Control",
    description: "Centipedes love Kapolei's humid climate. We provide drainage and moisture remediation advice to make your property less attractive to pests."
  },
  {
    icon: Activity,
    title: "Rapid Response Service",
    description: "Spotted a centipede in your Kapolei house? We offer priority scheduling to address immediate infestations and restore your peace of mind."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 text-nowrap">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight leading-tight">
            Expert <span className="text-indigo-600 border-b-4 border-indigo-600/20">Centipedes Treatment Kapolei</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium italic">
            Specialized Hawaii pest control targeting the islands' most resilient centipedes. We provide permanent solutions that protect Kapolei families from painful stings.
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
