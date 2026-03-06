import { ShieldCheck, Zap, Bug, Activity, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
    {
        title: "Infrared Deployment",
        description: "We use thermal imaging to locate rodent nests embedded deep within wall voids and attic insulation.",
        icon: Microscope
    },
    {
        title: "Total Containment",
        description: "Our removal process includes specialized containment protocols to prevent pests from escaping into other areas.",
        icon: Zap
    },
    {
        title: "Structural Sealing",
        description: "Technical gap closure after rodent removal to ensure no secondary pest entry occurs in your Kaysville home.",
        icon: ShieldCheck
    }
];

const TrenchlessInfo = () => {
    return (
        <section id="info" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute inset-0 bg-indigo-600/20 rounded-[3rem] -rotate-3" />
                        <img
                            src="/3.jpeg"
                            alt="Kaysville Rodent Technical Extraction"
                            className="relative z-10 w-full h-[600px] object-cover rounded-[3rem] shadow-2xl brightness-90 contrast-110 grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute top-12 -right-12 z-20 bg-slate-900 p-8 rounded-3xl shadow-2xl border border-indigo-500/30">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center">
                                    <Activity className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-white uppercase">100%</p>
                                    <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest uppercase">Extraction Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 mb-8 uppercase tracking-[0.2em] text-[10px] font-bold uppercase">
                            <Bug className="w-4 h-4" />
                            Technical Rodent Protocol
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight leading-tight uppercase">
                            Precision Extraction <br />
                            <span className="text-indigo-600 uppercase">For Kaysville Area</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-12 italic font-medium">
                            Our recovery protocols integrate industrial-grade inspection technologies with professional rodent elimination for Kaysville's premier structures.
                        </p>

                        <div className="space-y-8 mb-12">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors">
                                        <feature.icon className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1 uppercase tracking-tight uppercase">{feature.title}</h3>
                                        <p className="text-slate-600 text-sm font-medium italic">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button className="bg-indigo-600 hover:bg-indigo-700 h-16 px-10 rounded-2xl font-bold uppercase tracking-[0.15em] text-sm shadow-2xl shadow-indigo-900/30 active:scale-95 transition-all text-nowrap" asChild>
                            <a href="tel:3238801224" className="flex items-center gap-3 text-nowrap">
                                <Zap className="w-5 h-5 text-nowrap" />
                                Technical Dispatch
                            </a>
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrenchlessInfo;
