import { Phone, MapPin, Clock, ShieldCheck, Mail, Send, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/3.jpeg"
          alt="Kaysville Rodent Service Area"
          className="w-full h-full object-cover opacity-10 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 mb-8 uppercase tracking-[0.2em] text-[10px] font-bold uppercase">
                <Bug className="w-4 h-4" />
                Direct Kaysville Dispatch
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 uppercase tracking-tight leading-tight uppercase">
                Secure Your Rodent <br />
                <span className="text-indigo-500 uppercase">Technical Inspection</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-12 italic font-medium">
                Our terminal units are standing by across Kaysville for immediate deployment. Secure your structure today.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-colors group">
                  <Phone className="w-8 h-8 text-indigo-500 mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">CALL TECHNICAL HOTLINE</p>
                  <a href="tel:3238801224" className="text-lg font-bold text-white uppercase tracking-tight font-black uppercase tracking-widest">(323) 880-1224</a>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-colors group">
                  <MapPin className="w-8 h-8 text-indigo-500 mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 uppercase">SERVICE HUB</p>
                  <p className="text-lg font-bold text-white uppercase tracking-tight font-black uppercase tracking-widest">Kaysville, UT 84037</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-2xl relative">
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl uppercase">
                Priority Response
              </div>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <Input className="h-14 rounded-xl bg-slate-50 border-slate-100 focus:ring-indigo-600 uppercase font-bold text-xs" placeholder="CLIENT NAME" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Protocol</label>
                    <Input className="h-14 rounded-xl bg-slate-50 border-slate-100 focus:ring-indigo-600 uppercase font-bold text-xs" placeholder="(000) 000-0000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Dispatch Address</label>
                  <Input className="h-14 rounded-xl bg-slate-50 border-slate-100 focus:ring-indigo-600 uppercase font-bold text-xs" placeholder="STREET ADDRESS, KAYSVILLE" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 text-nowrap">Infestation Description</label>
                  <Textarea className="min-h-[120px] rounded-xl bg-slate-50 border-slate-100 focus:ring-indigo-600 uppercase font-bold text-xs p-4" placeholder="DESCRIBE RODENT ACTIVITY AND AREAS OF CONCERN..." />
                </div>
                <Button className="w-full bg-slate-900 hover:bg-indigo-600 text-white h-16 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl transition-all active:scale-[0.98]">
                  Initialize Terminal Dispatch
                </Button>
                <p className="text-[9px] text-center text-slate-400 font-bold uppercase tracking-widest uppercase">
                  <ShieldCheck className="w-3 h-3 inline-block mr-1 mb-0.5" />
                  Utah Technical Privacy Guaranteed
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
