import { ShieldCheck, Zap, Droplets, Clock, Hammer, Shield } from "lucide-react";

const PlumbingInfo = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Marquette County Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">The Montello <span className="text-indigo-600">Plumbing Standard</span></h2>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed italic">
                            From the historic Granite Quarry to the Fox River banks, Montello Plumbing Pros delivers specialized hydraulic solutions tailored for Wisconsin's extreme climate.
                        </p>
                    </div>

                    <div className="prose prose-slate max-w-none mb-20">
                        <div className="grid md:grid-cols-2 gap-12 font-medium text-slate-600 leading-relaxed">
                            <div className="space-y-6">
                                <p>
                                    Montello, WI is more than just a picturesque location; its unique geography as the county seat of Marquette County brings specific plumbing challenges. With historical roots tracing back to Father Marquette's exploration in 1673, the aging infrastructure in "Mont et L'eau" requires seasoned experts who understand both historic preservation and modern efficiency.
                                </p>
                                <p>
                                    Our team specializes in winter-proofing systems against Wisconsin's brutal -35°F record lows. We don't just fix leaks; we engineer solutions that survive the Fox River's thermal fluctuations and protect the integrity of Montello's architectural heritage.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <p>
                                    Whether you are dealing with a silent leak in an 1800s quarry-era home or require advanced water filtration near Buffalo Lake, our "135 Rule" compliant technicians ensure every joint and seal meets the highest statewide standards.
                                </p>
                                <p>
                                    We prioritize your home's sanitary safety. From kitchen sink installations that meet stringent municipal codes to complex sewer lateral inspections, Montello Plumbing Pros remains the gold standard for Marquette County residential and commercial hydraulic integrity.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
    );
};

export default PlumbingInfo;
