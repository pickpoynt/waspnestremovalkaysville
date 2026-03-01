import { HelpCircle, Search, ShieldCheck, Zap, Droplets, Clock, Hammer, DollarSign, Target, Radio, Thermometer, AlertCircle, FileText, Info, TrendingUp, CheckCircle, Home, Activity, Wrench, Shield, Waves, LucideIcon, Phone } from "lucide-react";

const faqs = [
  {
    icon: DollarSign,
    question: "How much does it cost to Repipe polybutylene pipes?",
    answer: "Repiping a standard Boonton home ranges from $3,500 to $12,000, depending on house size, bathroom count, and whether PEX or copper is used."
  },
  {
    icon: Home,
    question: "Can you sell a house with polybutylene pipes?",
    answer: "Yes, but Boonton buyers often demand credits or replacement before closing due to their high risk. Disclosure is mandatory in NJ."
  },
  {
    icon: AlertCircle,
    question: "Should polybutylene pipes be replaced?",
    answer: "Absolutely. In Boonton, PB pipes are known to fail without warning, often leading to foundation damage. Proactive replacement is highly recommended."
  },
  {
    icon: Zap,
    question: "What do you replace polybutylene pipe with?",
    answer: "The gold standard in Boonton is PEX-A expansion piping. It is flexible, freeze-resistant, and significantly more durable than the original PB lines."
  },
  {
    icon: ShieldCheck,
    question: "Will insurance cover replacing polybutylene pipes?",
    answer: "Standard Boonton insurance rarely covers the cost of proactive replacement. However, they may cover the water damage resulting from a sudden burst."
  },
  {
    icon: Info,
    question: "Should I buy a house with polybutylene pipe near?",
    answer: "You should factor the cost of a full repipe into your offer. Many Boonton buyers use a professional quote to negotiate the home price down."
  },
  {
    icon: Wrench,
    question: "What do you do if your house has polybutylene pipes?",
    answer: "Schedule a professional inspection in Boonton immediately to assess the condition of the fittings and start a repiping plan to mitigate risk."
  },
  {
    icon: Clock,
    question: "What is the life expectancy of polybutylene pipes?",
    answer: "Polybutylene pipes typically last 10 to 15 years before the internal breakdown starts. Most PB systems in Boonton are now well beyond their safe lifespan."
  },
  {
    icon: TrendingUp,
    question: "What decreases property value the most?",
    answer: "Major structural and systemic issues like defective PB plumbing decrease Boonton home values and make houses much harder to sell."
  },
  {
    icon: Search,
    question: "Do 100 year old houses have lead pipes?",
    answer: "Many historic Boonton homes may still have lead service lines or lead solder, which should be assessed alongside any other piping issues."
  },
  {
    icon: Shield,
    question: "What is the 135 rule in plumbing?",
    answer: "This refers to drainage slope calculations; however, in repiping Boonton homes, we focus on maintaining proper pressure and flow for modern fixtures."
  },
  {
    icon: FileText,
    question: "Do I need to disclose polybutylene pipes when selling?",
    answer: "Yes, NJ law requires disclosure of known material defects. Failing to disclose PB pipes in Boonton can lead to legal liability after the sale."
  },
  {
    icon: DollarSign,
    question: "Can I use my homeowners insurance for plumbing repairs?",
    answer: "Insurance typically covers the damage caused by a leak, but the specialized repair of a defective pipe system like PB is generally the owner's cost."
  },
  {
    icon: AlertCircle,
    question: "What is the lawsuit for PB pipes?",
    answer: "There were major class-action settlements (like Cox v. Shell) for PB pipe failure, though most claim deadlines have long since passed for Boonton owners."
  },
  {
    icon: ShieldCheck,
    question: "Is polybutylene pipe up to code?",
    answer: "Polybutylene was removed from the IPC plumbing code in the late 90s. While 'grandfathered' in some cases, it is no longer allowed for new Boonton construction."
  },
  {
    icon: Home,
    question: "Can I sell my home with polybutylene pipes?",
    answer: "You can, but be prepared for Boonton home inspectors to flag it as a major concern, potentially leading to mortgage approval issues for the buyer."
  },
  {
    icon: Zap,
    question: "How to transition from polybutylene to PVC?",
    answer: "Transitions require specialized 'PB to PEX' adapter kits. Our Boonton team ensures these connections meet code using the correct mechanical fittings."
  },
  {
    icon: TrendingUp,
    question: "Is it worth replacing polybutylene pipes?",
    answer: "Yes. The cost of a full repipe is much lower than the cost of water remediation, mold removal, and foundation repair in a Boonton home."
  },
  {
    icon: Search,
    question: "Is it worth replacing lead water pipes?",
    answer: "Absolutely. Lead pipes pose serious health risks. In Boonton, replacing lead service lines is a top priority for family health and safety."
  },
  {
    icon: Wrench,
    question: "What is the best replacement for polybutylene pipes?",
    answer: "PEX (Cross-linked Polyethylene) is the industry's top choice in Boonton for its flexibility, durability, and resistance to chlorine-based breakdown."
  },
  {
    icon: Clock,
    question: "What is the lifespan of polybutylene pipes?",
    answer: "In Boonton's municipal water systems, PB pipes often fail internally long before their 25-year design lifespan due to chlorine sensitivity."
  },
  {
    icon: Shield,
    question: "Will homeowners insurance cover polybutylene pipe?",
    answer: "Insurance generally excludes coverage for the pipes themselves once identified as PB, though they may cover the water damage from a single event."
  },
  {
    icon: DollarSign,
    question: "What not to fix before selling your house?",
    answer: "Cosmetic minor issues can be skipped, but systemic failures like polybutylene pipes are 'deal-breakers' in the Boonton real estate market."
  },
  {
    icon: Target,
    question: "What to do if you have polybutylene pipes?",
    answer: "Turn off your main water valve when leaving for vacation and contact a Boonton repipe specialist to get a quote for a permanent PEX upgrade."
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
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Repipe Knowledge Base
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight leading-tight">
            Polybutylene <span className="text-indigo-600 border-b-4 border-indigo-600/20">Pipe FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-bold italic">
            Essential information for Boonton homeowners dealing with polybutylene (PB) pipe replacement, insurance, and real estate disclosures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <FAQCard key={index} {...faq} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-4">Still have repiping questions?</p>
          <a href="tel:8777921410" className="inline-flex items-center gap-3 text-indigo-600 font-black text-2xl hover:text-slate-900 transition-colors uppercase tracking-tight">
            <Phone className="w-6 h-6" />
            (877) 792-1410
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
