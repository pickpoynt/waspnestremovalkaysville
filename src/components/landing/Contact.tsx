import { ShieldCheck, Phone, MapPin, Mail, Clock, Send, Radio, Search, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-600/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 text-center lg:text-left">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white mb-6 uppercase tracking-widest text-[10px] font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  Boonton Repipe Protection
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight leading-tight">
                  Stop The Polybutylene <br />
                  <span className="text-indigo-600 border-b-4 border-indigo-600/20">Risk in Boonton NJ</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed italic font-medium">
                  Boonton's leading specialists in whole-house polybutylene pipe replacement. We protect your property value and eliminate the risk of sudden plumbing leaks. Call (877) 792-1410 for a free inspection today.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center mb-4 mx-auto lg:mx-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">REPIPE HOTLINE</p>
                  <a href="tel:8777921410" className="text-xl font-bold text-indigo-600 underline decoration-indigo-200 decoration-4 underline-offset-4">(877) 792-1410</a>
                </div>
                <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center mb-4 mx-auto lg:mx-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-nowrap">BOONTON SERVICE AREA</p>
                  <p className="text-sm font-bold text-slate-900 uppercase">Boonton, NJ 07005</p>
                </div>
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4 text-slate-600 font-bold uppercase tracking-tighter text-xs justify-center lg:justify-start">
                  <Clock className="w-5 h-5 text-indigo-600" />
                  <span>Boonton NJ Repipe Experts • Certified PEX-A Installer</span>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-100 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-full -translate-y-12 translate-x-12" />
              <h3 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-tighter relative z-10 italic">Request Free Repipe Quote</h3>
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1 opacity-50">Resident Name</label>
                    <Input placeholder="Full Name" className="h-14 rounded-2xl bg-slate-50 border-white px-6 font-bold focus:ring-indigo-500 shadow-inner" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1 opacity-50">Direct Number</label>
                    <Input placeholder="Phone" className="h-14 rounded-2xl bg-slate-50 border-white px-6 font-bold focus:ring-indigo-500 shadow-inner" />
                  </div>
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1 opacity-50">Inspection Urgency</label>
                  <select className="w-full h-14 rounded-2xl bg-slate-50 border-white px-6 font-bold text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner">
                    <option>Immediate (Active Pin-hole Leaks)</option>
                    <option>High (PB Pipes Identified, Seeking Quote)</option>
                    <option>Selling Home Soon</option>
                    <option>Information Gathering</option>
                  </select>
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1 opacity-50">Repipe Details</label>
                  <Textarea placeholder="Tell us about the year of construction and signs of pipe issues in your Boonton home..." className="min-h-[150px] rounded-3xl bg-slate-50 border-white p-6 font-bold focus:ring-indigo-500 shadow-inner" />
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-slate-900 text-white h-16 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl shadow-indigo-900/20 transition-all hover:gap-4 active:scale-95">
                  Send to Specialist <Send className="w-5 h-5" />
                </Button>
                <div className="flex items-center justify-center gap-2 pt-4 opacity-50">
                  <Wrench className="w-4 h-4 text-indigo-600 animate-pulse" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] italic">Full Whole-House Repipe Ready in Boonton</p>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
