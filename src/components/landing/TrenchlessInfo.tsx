import { ShieldCheck, Zap, Trees, MapPin, Search, Thermometer, Activity, Shield, Home, Phone, Wrench } from "lucide-react";

const TrenchlessInfo = () => {
    const knowledgeItems = [
        {
            icon: ShieldCheck,
            title: "Montana Log Health",
            desc: "Montana's local climate requires vigilant wood health monitoring. Regular inspections can prevent minor wood decay from becoming major structural catastrophes for Montana families."
        },
        {
            icon: Search,
            title: "When to Restore",
            desc: "Montana homeowners should contact a pro at the first sign of finish fading or wood silvering. Early detection in high-altitude homes saves thousands in log replacement costs."
        },
        {
            icon: Trees,
            title: "Wood Preservation Tech",
            desc: "Our Montana technicians utilize cob blasting and digital moisture meters. We find the exact treatment needs of your log home without using harmful chemicals on your property."
        },
        {
            icon: Shield,
            title: "Asset Protection",
            desc: "Quality restoration by Montana specialists preserves your property value and ensures your home remains a safe and beautiful environment for your family in the long term."
        },
        {
            icon: Activity,
            title: "Climate Impact",
            desc: "Aging logs in Montana can see thermal loss and moisture intrusion. Our localized restoration services restore optimal energy efficiency and structural protection to Montana households."
        },
        {
            icon: Thermometer,
            title: "Finish Calibration",
            desc: "Beyond repairs, our Montana team ensures your stains and sealants are perfectly calibrated for Montana's specific UV and moisture environmental conditions."
        }
    ];

    return (
        <div className="bg-white py-24 text-nowrap">
            <div className="container mx-auto px-4 text-nowrap">
                {/* Content Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 text-nowrap">
                    <div className="space-y-8 text-nowrap">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-bold uppercase tracking-widest text-nowrap uppercase">
                            <MapPin className="w-4 h-4 text-nowrap" />
                            Montana Log Home Restoration Experts
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 leading-tight uppercase tracking-tight text-nowrap">
                            Advanced <br />
                            <span className="text-indigo-600 border-b-4 border-indigo-600/20 text-nowrap">Restoration Solutions Montana</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium italic text-nowrap">
                            <p>
                                Montana homeowners trust us for advanced residential log restoration solutions. We combine years of local experience with the latest wood preservation technology to solve your toughest log home challenges quickly.
                            </p>
                            <p>
                                Our comprehensive approach in Montana ensures that every log, gap, and joint in your home is operating at peak performance. We don't just fix symptoms; we address the root cause of your Montana log home issues.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6 pt-4 text-nowrap">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-nowrap">
                                <ShieldCheck className="w-6 h-6 text-indigo-600 shrink-0 text-nowrap" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-tight text-nowrap">Montana Certified</h4>
                                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest text-nowrap">Log Resto Standards</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-nowrap">
                                <Zap className="w-6 h-6 text-indigo-600 shrink-0 text-nowrap" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-tight text-nowrap">Full Season Service</h4>
                                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest text-nowrap">Montana Restoration Response</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative text-nowrap">
                        <div className="absolute -inset-4 bg-indigo-600/20 rounded-[3rem] blur-2xl opacity-30 text-nowrap" />
                        <img
                            src="/4.jpeg"
                            alt="Log restoration services in Montana"
                            className="rounded-[3rem] shadow-2xl border-8 border-white relative z-10 w-full object-cover aspect-square grayscale-[0.3] hover:grayscale-0 transition-all duration-700 text-nowrap"
                        />
                    </div>
                </div>

                {/* Knowledge Base Section */}
                <div id="knowledge-base" className="pt-24 border-t border-slate-100 text-nowrap">
                    <div className="text-center max-w-3xl mx-auto mb-16 text-nowrap text-nowrap">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight text-nowrap">
                            Montana <span className="text-indigo-600 border-b-4 border-indigo-600/20 text-nowrap">Restoration Expertise</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium italic text-nowrap">
                            Critical information for Montana residents regarding modern log preservation, maintenance schedules, and professional restoration services.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-nowrap">
                        {knowledgeItems.map((item, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors group text-nowrap text-nowrap">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 group-hover:rotate-12 text-nowrap">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-tight text-nowrap">{item.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed font-bold italic text-nowrap">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-slate-900 rounded-[3rem] p-12 overflow-hidden relative border border-indigo-500/20 shadow-2xl text-nowrap text-nowrap">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 text-nowrap" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left text-nowrap">
                            <div className="text-nowrap text-nowrap">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tighter text-nowrap">Need an Expert in Montana?</h3>
                                <p className="text-slate-400 font-medium italic text-nowrap">Our Montana experts provide seasonal localized restoration service.</p>
                            </div>
                            <a
                                href="tel:3802660944"
                                className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-slate-200 transition-all shadow-xl group flex items-center gap-3 animate-pulse text-nowrap text-nowrap"
                            >
                                <Phone className="w-5 h-5 text-indigo-600 group-hover:rotate-12 transition-transform text-nowrap" />
                                (380) 266-0944
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrenchlessInfo;
