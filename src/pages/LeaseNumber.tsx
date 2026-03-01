import { Helmet } from "react-helmet-async";
import { Mail, DollarSign, Phone, ShieldCheck, CheckCircle } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const LeaseNumber = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <Helmet>
                <title>Lease This Phone Number - Kapolei Centipede Treatment Professionals</title>
                <meta name="description" content="Replace this centipede treatment phone number with your own business line in Kapolei, HI for only $19 a month. Contact leasemynumber@gmail.com to get started." />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <Header />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4 max-w-4xl">

                    {/* Hero Banner */}
                    <div className="bg-gradient-to-br from-indigo-900 to-slate-950 rounded-[2.5rem] p-10 md:p-20 text-white mb-16 relative overflow-hidden shadow-2xl border border-indigo-500/20">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-24 -translate-x-24 blur-3xl" />
                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 rounded-3xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center mx-auto mb-8 shadow-xl">
                                <DollarSign className="w-10 h-10 text-indigo-300" />
                            </div>
                            <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter leading-tight">
                                Lease This <br /> Phone Number
                            </h1>
                            <p className="text-indigo-200 text-xl max-w-2xl mx-auto leading-relaxed font-bold italic">
                                Are you a pest control specialist in Kapolei HI? Swap this number <br /> with your own for just <span className="font-black text-white">$19 a month</span> and capture all local centipede treatment leads.
                            </p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">

                        {/* What You Get */}
                        <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-slate-100 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tighter mb-8 flex items-center gap-4">
                                    <ShieldCheck className="w-8 h-8 text-indigo-600" />
                                    The Benefit
                                </h2>
                                <ul className="space-y-6">
                                    {[
                                        "Replace (323) 880-1224 with your direct line",
                                        "All Kapolei pest inquiries route to you",
                                        "Dominant SEO presence for Kapolei centipedes",
                                        "One specialist per territory — exclusive deal",
                                        "Simple month-to-month billing",
                                        "No setup fees or long-term contracts",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 group">
                                            <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                            <span className="text-slate-700 font-bold italic text-sm leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Pricing Box */}
                        <div className="bg-indigo-600 rounded-[3rem] p-10 text-white shadow-2xl shadow-indigo-900/30 flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
                            <div className="relative z-10">
                                <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                                    <Phone className="w-8 h-8 text-white" />
                                    Simple Flat Rate
                                </h2>
                                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20 mb-10">
                                    <p className="text-indigo-200 font-black uppercase tracking-[0.3em] text-[10px] mb-2">Monthly Subscription</p>
                                    <div className="flex items-center justify-center gap-1">
                                        <span className="text-3xl font-black mb-6">$</span>
                                        <span className="text-7xl font-black tracking-tighter">19</span>
                                        <span className="text-xl font-bold italic text-indigo-200">/mo</span>
                                    </div>
                                    <p className="text-indigo-100 text-xs font-bold uppercase tracking-widest mt-2">No Contracts • Cancel Anytime</p>
                                </div>
                            </div>

                            <div className="relative z-10 space-y-4 text-nowrap">
                                <a
                                    href="mailto:leasemynumber@gmail.com?subject=Kapolei Pest Control - Phone Lease Inquiry $19/mo"
                                    className="w-full inline-flex items-center justify-center gap-3 bg-white text-indigo-700 hover:bg-slate-100 px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl active:scale-95"
                                >
                                    <Mail className="w-5 h-5" />
                                    leasemynumber@gmail.com
                                </a>
                                <p className="text-center text-indigo-200 text-[10px] font-black uppercase tracking-widest">
                                    Immediate availability in Kapolei HI
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="bg-slate-950 rounded-[2.5rem] p-12 text-center text-white border border-indigo-500/10 shadow-2xl relative group overflow-hidden">
                        <div className="absolute inset-0 bg-indigo-600/[0.03] translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                        <p className="text-indigo-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 relative z-10">Direct Specialist Access</p>
                        <a href="mailto:leasemynumber@gmail.com" className="text-2xl md:text-3xl font-black text-white hover:text-indigo-400 transition-colors uppercase tracking-tight relative z-10 underline decoration-indigo-900 underline-offset-8 text-nowrap">
                            LEASE MY NUMBER
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default LeaseNumber;
