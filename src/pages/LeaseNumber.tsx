import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Bug, Mail, Phone, ShieldCheck, Zap, Globe, BarChart3, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const LeaseNumber = () => {
    const primaryKeyword = "Rodent removal Kaysville";
    const phoneNumber = "(323) 880-1224";

    return (
        <div className="min-h-screen bg-slate-50">
            <Helmet>
                <title>Lease this Number: {phoneNumber} | {primaryKeyword}</title>
                <meta name="description" content={`Exclusive opportunity to lease the premium phone number ${phoneNumber} for your Kaysville rodent removal business. Maximize your local SEO and lead generation.`} />
            </Helmet>

            <Header />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white mb-8 uppercase tracking-[0.2em] text-[10px] font-bold shadow-lg shadow-indigo-900/20 uppercase">
                            <Bug className="w-4 h-4" />
                            Kaysville Opportunity
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-none">
                            Dominate the <span className="text-indigo-600">Rodent Removal</span> <br /> Market in Kaysville
                        </h1>

                        <p className="text-slate-600 text-xl leading-relaxed mb-12 italic font-medium">
                            We are offering an exclusive opportunity to lease this high-performing digital asset and its associated phone number for just <span className="text-indigo-600 font-black">$19/month</span>.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                                <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-900/20">
                                    <Bug className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Service Infrastructure</h3>
                                <p className="text-slate-600 text-sm leading-relaxed font-medium italic">
                                    Immediately capture all inbound technical requests for "Rodent removal Kaysville". This number is primed for local lead generation.
                                </p>
                            </div>

                            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl">
                                <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-900/20">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Lease Terms</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                        <span className="text-slate-400 text-xs font-bold uppercase tracking-widest uppercase">Monthly Rate</span>
                                        <span className="text-2xl font-black text-indigo-400">$19.00</span>
                                    </div>
                                    <div className="flex items-center justify-between pt-2">
                                        <span className="text-slate-400 text-xs font-bold uppercase tracking-widest uppercase">Availability</span>
                                        <span className="text-xs font-black text-emerald-400 uppercase tracking-widest uppercase">Immediate Release</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-indigo-600 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-indigo-900/40">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />
                            <div className="relative z-10 text-center max-w-2xl mx-auto">
                                <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Secure This Technical Asset</h2>
                                <p className="text-indigo-100 mb-10 font-bold italic">
                                    Send an inquiry to our administrative dispatch to initialize the lease protocol. Limited to one provider per Kaysville sector.
                                </p>
                                <Button className="bg-white text-indigo-600 hover:bg-slate-100 h-20 px-12 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-2xl transition-all active:scale-95" asChild>
                                    <a href={`mailto:leasemynumber@gmail.com?subject=LEASE INQUIRY: ${phoneNumber} - KAYSVILLE RODENT REMOVAL PROS`}>
                                        <Mail className="w-6 h-6 mr-4" />
                                        Initialize Lease Inquiry
                                    </a>
                                </Button>
                                <p className="mt-8 text-[11px] font-black text-indigo-200 uppercase tracking-[0.3em]">
                                    Direct Contact: leasemynumber@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default LeaseNumber;
