import { HelpCircle, Search, ShieldCheck, Zap, Droplets, Clock, DollarSign, Target, Thermometer, AlertCircle, FileText, Info, TrendingUp, CheckCircle, Activity, Wrench, Shield, Waves, LucideIcon, Phone, Sun, Lightbulb, Trees } from "lucide-react";

const faqs = [
  {
    icon: Clock,
    question: "How often should log homes in Montana be stained?",
    answer: "In Montana's high-UV climate, log homes typically need re-staining every 3 to 5 years depending on sun exposure. South-facing walls may require more frequent attention. Regular maintenance in Montana prevents the wood from silvering and cracking."
  },
  {
    icon: Trees,
    title: "What is cob blasting and why is it used?",
    question: "What is cob blasting and why is it used?",
    answer: "Cob blasting uses crushed corn cobs as a gentle abrasive to remove old finishes, dirt, and UV-damaged wood fibers. It is the preferred method for Montana log homes because it cleans the wood without the moisture risks associated with power washing."
  },
  {
    icon: ShieldCheck,
    question: "How do you prevent log rot in Montana's climate?",
    answer: "Preventing log rot involves maintaining a sound finish, ensuring proper roof overhangs, and keeping logs clear of ground contact. Our Montana specialists also apply borate treatments during restoration to protect against fungal growth and wood-destroying insects."
  },
  {
    icon: Info,
    question: "What is chinking and how does it protect the home?",
    answer: "Chinking is a flexible sealant used to fill the gaps between logs. In Montana, it is critical for energy efficiency, acting as a barrier against air infiltration, moisture, and pests while allowing for the natural movement of the logs."
  },
  {
    icon: Activity,
    question: "Can you restore a neglected log home?",
    answer: "Yes, even heavily neglected log homes in Montana can often be restored. Through a process of media blasting, wood repair, and multi-stage finishing, our Montana team can bring back the life and structural soundess of your log home."
  },
  {
    icon: Sun,
    question: "Why is UV protection critical for Montana log homes?",
    answer: "Montana's high altitude means stronger UV rays that break down wood lignin rapidly. Without high-quality UV-resistant stains, your logs will turn gray, become brittle, and eventually absorb moisture, leading to rot and structural failure."
  }
];

const FAQCard = ({ icon: Icon, question, answer }: { icon: LucideIcon, question: string, answer: string }) => (
  <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:border-indigo-200 transition-all group h-full relative overflow-hidden">
    <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-50 rounded-bl-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tighter leading-tight relative z-10">{question}</h3>
    <p className="text-slate-500 leading-relaxed text-sm font-medium italic relative z-10">{answer}</p>
  </div>
);

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden text-nowrap">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 text-nowrap">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-nowrap uppercase">
            Expert Knowledge Base — Montana Restoration
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight leading-tight text-nowrap">
            Restoration <span className="text-indigo-600 border-b-4 border-indigo-600/20 text-nowrap">Expert FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-bold italic text-nowrap">
            Essential answers for Montana log homeowners about wood restoration, maintenance, and protecting your investment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-nowrap">
          {faqs.map((faq, index) => (
            <FAQCard key={index} {...faq} />
          ))}
        </div>

        <div className="mt-20 text-center text-nowrap">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-4 text-nowrap uppercase">Still have restoration questions?</p>
          <a href="tel:3802660944" className="inline-flex items-center gap-3 text-indigo-600 font-black text-2xl hover:text-slate-900 transition-colors uppercase tracking-tight text-nowrap">
            <Phone className="w-6 h-6 text-nowrap" />
            (380) 266-0944
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
