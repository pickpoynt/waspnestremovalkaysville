import { ShieldCheck, Zap, Droplets, MapPin, Search, Radio, Thermometer, Target, Activity, Shield, Home, Phone, Wrench } from "lucide-react";

const TrenchlessInfo = () => {
    const knowledgeItems = [
        {
            icon: ShieldCheck,
            title: "PEX-A Superiority",
            desc: "Why PEX-A for Boonton? It is highly flexible, freeze-resistant, and uses expansion fittings that actually get stronger over time, unlike PB's weak crimp rings."
        },
        {
            icon: Search,
            title: "PB Failure Signs",
            desc: "Identifying risk: Look for gray plastic pipes with copper crimp rings in your Boonton utility room. Cracks often form from the inside out due to chlorine exposure."
        },
        {
            icon: Wrench,
            title: "Drywall-Safe Access",
            desc: "Our surgical method: We use specialized tools to thread PEX through Boonton wall cavities, reducing the need for massive demolition and dust."
        },
        {
            icon: Shield,
            title: "Code Compliance",
            desc: "Boonton NJ Standards: We ensure every joint, valve, and manifold meets 2024 plumbing codes, shielding you from liability during home sales."
        },
        {
            icon: Activity,
            title: "Pressure Testing",
            desc: "Verification: We perform a 2-hour hydrostatic test on every Boonton repipe to confirm the entire system is perfectly sealed before closing walls."
        },
        {
            icon: Target,
            title: "Manifold Systems",
            desc: "Modern control: We can install central manifolds in Boonton homes, allowing you to shut off individual fixtures from one convenient location."
        }
    ];

    return (
        <div className="bg-white py-24">
            <div className="container mx-auto px-4">
                {/* Content Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-bold uppercase tracking-widest">
                            <MapPin className="w-4 h-4" />
                            Boonton Area Repipe Experts
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 leading-tight uppercase tracking-tight">
                            The Permanent <br />
                            <span className="text-indigo-600 border-b-4 border-indigo-600/20 text-nowrap">PB Replacement Boonton</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium italic">
                            <p>
                                Polybutylene pipes are a ticking time bomb in many Boonton residences. Known for sudden, catastrophic failures caused by common water additives, these gray pipes can lead to massive foundation damage and mold growth.
                            </p>
                            <p>
                                Our specialized repipe process replaces these defective lines with modern PEX-A. We handle the entire project in Boonton—from identification and permitting to the final professional drywall patch and paint.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <ShieldCheck className="w-6 h-6 text-indigo-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-tight">PEX Certified</h4>
                                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Lifetime Material Warranty</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <Zap className="w-6 h-6 text-indigo-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-tight text-nowrap">48-Hour Turnaround</h4>
                                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Minimal Boonton Downtime</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-indigo-600/20 rounded-[3rem] blur-2xl opacity-30" />
                        <img
                            src="/3.jpeg"
                            alt="Polybutylene Pipe Identification and Replacement in Boonton"
                            className="rounded-[3rem] shadow-2xl border-8 border-white relative z-10 w-full object-cover aspect-square grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                {/* Knowledge Base Section */}
                <div id="knowledge-base" className="pt-24 border-t border-slate-100">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Repipe <span className="text-indigo-600 border-b-4 border-indigo-600/20">Expertise Center</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium italic">
                            Critical technical information for Boonton homeowners about polybutylene pipes and the repiping process.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {knowledgeItems.map((item, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors group">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 group-hover:rotate-12">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed font-bold italic">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-slate-900 rounded-[3rem] p-12 overflow-hidden relative border border-indigo-500/20 shadow-2xl text-nowrap">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tighter">Need a Repipe Inspection?</h3>
                                <p className="text-slate-400 font-medium italic">Our Boonton experts identify PB risk in under 15 minutes.</p>
                            </div>
                            <a
                                href="tel:8777921410"
                                className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-slate-200 transition-all shadow-xl group flex items-center gap-3 animate-pulse"
                            >
                                <Phone className="w-5 h-5 text-indigo-600 group-hover:rotate-12 transition-transform" />
                                (877) 792-1410
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrenchlessInfo;
