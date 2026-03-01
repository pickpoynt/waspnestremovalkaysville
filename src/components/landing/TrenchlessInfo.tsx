import { ShieldCheck, Zap, Droplets, MapPin, Search, Radio, Thermometer, Target, Activity, Shield, Home, Phone, Bug } from "lucide-react";

const TrenchlessInfo = () => {
    const knowledgeItems = [
        {
            icon: ShieldCheck,
            title: "Hawaii Centipede Facts",
            desc: "Kapolei is home to Scolopendra subspinipes, which can grow up to 8 inches. Their stings are painful and require professional-grade preventative barriers."
        },
        {
            icon: Search,
            title: "Moisture Mitigation",
            desc: "Centipedes thrive in Kapolei's humid climate. Reducing standing water and fixing leaks in your Hawaii home is the first step in long-term control."
        },
        {
            icon: Bug,
            title: "Nest Identification",
            desc: "Our Kapolei experts look for nests in leaf litter, under stones, and inside wall voids where centipedes retreat during the day."
        },
        {
            icon: Shield,
            title: "Safe Barriers",
            desc: "We use targeted applications that create a 'ring of protection' around your Kapolei home, safe for kids and pets while lethal to pests."
        },
        {
            icon: Activity,
            title: "Population Monitoring",
            desc: "In Hawaii, centipedes are year-round. We provide seasonal monitoring in Kapolei to ensure your home's defenses never weaken."
        },
        {
            icon: Target,
            title: "Precision Targeting",
            desc: "We don't just spray blindly. Our Kapolei technicians use precision equipment to treat specific cracks and crevices where Hawaii centipedes hide."
        }
    ];

    return (
        <div className="bg-white py-24">
            <div className="container mx-auto px-4">
                {/* Content Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-bold uppercase tracking-widest text-nowrap">
                            <MapPin className="w-4 h-4" />
                            Kapolei Hawaii Pest Experts
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 leading-tight uppercase tracking-tight text-nowrap">
                            Professional <br />
                            <span className="text-indigo-600 border-b-4 border-indigo-600/20">Centipede Control Kapolei</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium italic">
                            <p>
                                Hawaii centipedes are more than just a nuisance; they are a significant concern for Kapolei homeowners. Known for their painful stings and rapid breeding cycles, these pests can quickly infest local residences.
                            </p>
                            <p>
                                Our specialized centipede treatment process focuses on the unique biology of Hawaii's invasive species. We handle everything in Kapolei—from initial nest tracking and perimeter sealing to interior eradication and long-term preventative maintenance.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <ShieldCheck className="w-6 h-6 text-indigo-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-tight">Oahu Certified</h4>
                                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest text-nowrap">Hawaii Pest Standards</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <Zap className="w-6 h-6 text-indigo-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-tight text-nowrap">24-Hour Response</h4>
                                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest text-nowrap">Kapolei Urgent Care</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-indigo-600/20 rounded-[3rem] blur-2xl opacity-30" />
                        <img
                            src="/3.jpeg"
                            alt="Centipede Identification and Removal in Kapolei"
                            className="rounded-[3rem] shadow-2xl border-8 border-white relative z-10 w-full object-cover aspect-square grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                {/* Knowledge Base Section */}
                <div id="knowledge-base" className="pt-24 border-t border-slate-100">
                    <div className="text-center max-w-3xl mx-auto mb-16 text-nowrap">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Hawaii <span className="text-indigo-600 border-b-4 border-indigo-600/20">Centipede Expertise</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium italic">
                            Critical information for Kapolei residents about centipede behavior, risk, and prevention in the Hawaii climate.
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
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tighter">Need Immediate Pest Control?</h3>
                                <p className="text-slate-400 font-medium italic">Our Kapolei experts provide same-day centipede audits.</p>
                            </div>
                            <a
                                href="tel:3238801224"
                                className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-slate-200 transition-all shadow-xl group flex items-center gap-3 animate-pulse"
                            >
                                <Phone className="w-5 h-5 text-indigo-600 group-hover:rotate-12 transition-transform" />
                                (323) 880-1224
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrenchlessInfo;
