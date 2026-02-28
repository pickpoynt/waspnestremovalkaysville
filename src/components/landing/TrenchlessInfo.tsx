import { ShieldCheck, Zap, Droplets, MapPin, Search, Hammer, Clock } from "lucide-react";

const TrenchlessInfo = () => {
    const knowledgeItems = [
        {
            icon: Search,
            title: "Hydro-Jetting Before Lining",
            desc: "Why hydro-jetting is essential for Scottsdale pipes: High-pressure water removes decades of buildup ensuring the epoxy bond is permanent."
        },
        {
            icon: Hammer,
            title: "HDPE vs. CIPP",
            desc: "Understanding pipe bursting: We pull a brand-new high-density polyethylene pipe through your old one, increasing diameter and flow."
        },
        {
            icon: ShieldCheck,
            title: "Root Intrusion Prevention",
            desc: "How trenchless seals out roots: Traditional joints are where roots enter. Our seamless liner eliminates joints, making root entry impossible."
        },
        {
            icon: MapPin,
            title: "Scottsdale Depth Experts",
            desc: "Navigating deep sewer lines in North Scottsdale: Our specialized pull-systems and robotic cutters handle depths exceeding 15 feet."
        },
        {
            icon: Clock,
            title: "Cure Times in Heat",
            desc: "Managing epoxy resins in the Scottsdale climate: We use specialized temperature-controlled resins that cure perfectly in Arizona summer heat."
        },
        {
            icon: Droplets,
            title: "Camera Certification",
            desc: "Verification via HD camera: We provide before-and-after video documentation so you can see the seamless interior of your restored pipe."
        }
    ];

    return (
        <div className="bg-white py-24">
            <div className="container mx-auto px-4">
                {/* Content Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest">
                            <MapPin className="w-4 h-4" />
                            Scottsdale Service Excellence
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 leading-tight uppercase tracking-tight">
                            Leading <span className="text-indigo-600">trenchless sewer repair scottsdale az</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                            <p>
                                In the desert environment of Scottsdale, traditional sewer repair often means destroying expensive landscaping, pavers, and decorative pool decks. Our trenchless technology eliminates this destruction, providing a seamless solution for the Maricopa County area's most prestigious properties.
                            </p>
                            <p>
                                Whether you're dealing with root intrusion from desert vegetation or structural failure due to Scottsdale's unique soil conditions, our CIPP (Cured-In-Place Pipe) lining and pipe bursting methods offer a lifetime fix without the mess of excavation.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <ShieldCheck className="w-6 h-6 text-indigo-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-sm">Paradise Valley Ready</h4>
                                    <p className="text-xs text-slate-500">Specialized equipment for Luxury Estates</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <Zap className="w-6 h-6 text-indigo-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-sm">24-Hour Restoration</h4>
                                    <p className="text-xs text-slate-500">Most lines fixed in a single day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-indigo-600/20 rounded-[3rem] blur-2xl opacity-30" />
                        <img
                            src="/2.jpeg"
                            alt="Trenchless Pipe Lining in Scottsdale"
                            className="rounded-[3rem] shadow-2xl border-8 border-white relative z-10 w-full object-cover aspect-square"
                        />
                    </div>
                </div>

                {/* Knowledge Base Section */}
                <div id="knowledge-base" className="pt-24 border-t border-slate-100">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Trenchless <span className="text-indigo-600">Expertise Center</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium italic">
                            Critical information for Scottsdale homeowners exploring no-dig sewer restoration options.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {knowledgeItems.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors group">
                                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-16 bg-slate-900 rounded-[3rem] p-12 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tight">Need a Trenchless Consultation?</h3>
                                <p className="text-slate-400 font-medium italic">Our Scottsdale technicians provide same-day camera exams and written restoration plans.</p>
                            </div>
                            <a
                                href="tel:8777921410"
                                className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-indigo-600 hover:text-white transition-all shadow-xl"
                            >
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
