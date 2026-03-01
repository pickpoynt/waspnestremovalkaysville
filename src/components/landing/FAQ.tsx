import { HelpCircle, Search, ShieldCheck, Zap, Droplets, Clock, Hammer, DollarSign, Target, Radio, Thermometer, AlertCircle, FileText, Info, TrendingUp, CheckCircle, Home, Activity, Wrench, Shield, Waves, LucideIcon, Phone, Bug, Sun, Moon, Lightbulb, Smile, Frown } from "lucide-react";

const faqs = [
  {
    icon: Bug,
    question: "How to get rid of centipedes in Hawaii?",
    answer: "Eliminating Hawaii centipedes requires a multi-step approach: removing outdoor hideouts like leaf litter, sealing home entry points, and applying professional-grade residual barriers around your Kapolei property."
  },
  {
    icon: ShieldCheck,
    question: "Do exterminators kill centipedes?",
    answer: "Yes, professional exterminators use specialized formulas specifically designed to penetrate the tough exoskeletons of Hawaii centipedes, ensuring effective eradication and long-term control in Kapolei."
  },
  {
    icon: Search,
    question: "What attracts centipedes in Hawaii?",
    answer: "Centipedes in Hawaii are attracted to moisture and food sources (other insects). Over-watered gardens, damp crawlspaces, and humid wall voids in Kapolei homes are primary attractants."
  },
  {
    icon: AlertCircle,
    question: "Why should you never squish a centipede in your house?",
    answer: "Beyond the mess, squishing a centipede can release pheromones that may attract other pests. In Kapolei, it's safer to capture or vacuum them, or call an expert for a full property barrier."
  },
  {
    icon: DollarSign,
    question: "How much does pest control cost for centipedes?",
    answer: "Treatment costs in Kapolei vary based on property size and infestation level. Standard proactive barriers typically range from $150 to $300 per service, which is much cheaper than emergency removals."
  },
  {
    icon: Smile,
    question: "Should I worry if I see a house centipede?",
    answer: "While 'house centipedes' are mostly harmless, the large Scolopendra centipedes found in Kapolei can deliver painful, venomous stings. Seeing any centipede indoors suggests a gap in your home's perimeter."
  },
  {
    icon: Zap,
    question: "Does Orkin get rid of centipedes?",
    answer: "Major national brands offer general pest control, but local Kapolei specialists provide deeper expertise in the specific biology and nesting habits of Hawaii's invasive centipede species."
  },
  {
    icon: Shield,
    question: "What deters Hawaii centipedes?",
    answer: "Essential oils like peppermint can provide temporary deterrence, but the most effective Kapolei solution is an professional 'insecticide belt' around the foundation and moisture reduction."
  },
  {
    icon: Search,
    question: "How to find centipede nest?",
    answer: "Centipede 'nests' are usually just favored damp spots. Our Kapolei technicians look under mulch, rocks, and paving stones near your Hawaii home's foundation to find core activity areas."
  },
  {
    icon: Activity,
    question: "What drives house centipedes away?",
    answer: "Reducing indoor humidity with dehumidifiers and eliminating other prey insects (like roaches and silverfish) will naturally drive centipedes out of your Kapolei residence."
  },
  {
    icon: Phone,
    question: "Should I call an exterminator for centipedes?",
    answer: "If you are seeing multiple centipedes or have found a large specimen in Kapolei, a professional audit is highly recommended to prevent a painful sting event."
  },
  {
    icon: Target,
    question: "What is the hardest pest to exterminate?",
    answer: "Hawaii centipedes are among the most resilient due to their ability to hide in deep structural recesses and their resistance to over-the-counter sprays."
  },
  {
    icon: ShieldCheck,
    question: "Which pest control is better, Terminix or Orkin?",
    answer: "While both are reputable, Kapolei homeowners often prefer local Hawaii specialists who understand the specific seasonal patterns of centipede migration on Oahu."
  },
  {
    icon: Home,
    question: "Can centipedes climb a bed?",
    answer: "Yes, Hawaii centipedes are excellent climbers. Keeping beds away from walls and ensuring your Kapolei home has a professional barrier is critical for sleep security."
  },
  {
    icon: Sun,
    question: "What time of the year do house centipedes come out?",
    answer: "In Kapolei, centipede activity peaks during and after heavy rains when they are forced out of saturated ground and seek shelter in dry Hawaii homes."
  },
  {
    icon: Lightbulb,
    question: "Will keeping the light on keep centipedes away?",
    answer: "No. Centipedes are nocturnal and prefer darkness, but keeping lights on will not stop them if they are hunting for food or moisture in your Kapolei residence."
  },
  {
    icon: Moon,
    question: "Why do I suddenly have centipedes in my house?",
    answer: "A sudden influx in Kapolei usually indicates either an outdoor habitat disturbance (like construction) or a spike in moisture levels near your foundation."
  },
  {
    icon: Radio,
    question: "What smell do centipedes hate?",
    answer: "Centipedes dislike strong scents like peppermint, tea tree oil, and cedar. These can be used as local repellents in Kapolei, though they won't stop a determined pest."
  },
  {
    icon: TrendingUp,
    question: "How long do centipedes get in Hawaii?",
    answer: "Hawaii's Scolopendra subspinipes can reach lengths of 7 to 9 inches. These large specimens in Kapolei require heavy-duty professional interventions."
  },
  {
    icon: Hammer,
    question: "What is the natural enemy of centipedes?",
    answer: "Large spiders, some birds, and even chickens are natural predators, but none are sufficient for controlling a centipede population around a Kapolei home."
  },
  {
    icon: Info,
    question: "What drives house centipedes away?",
    answer: "Removing debris (like old wood or palm fronds) from the immediate perimeter of your Kapolei house is the most effective way to drive them to find habitat elsewhere."
  },
  {
    icon: CheckCircle,
    question: "How to find centipede nest?",
    answer: "Centipedes don't build nests in the traditional sense, but they congregate in the dampest, darkest cracks. Kapolei technicians use specialized borescopes to inspect these areas."
  },
  {
    icon: Waves,
    question: "What deters Hawaii centipedes?",
    answer: "Maintaining a 3-foot 'dry zone' around your Kapolei house foundation (using gravel or bare soil) is a highly effective natural deterrent."
  },
  {
    icon: Wrench,
    question: "Will keeping the light on keep centipedes away?",
    answer: "Actually, lights attract other insects that centipedes eat. In Kapolei, bright outdoor lights may indirectly attract centipedes by bringing their prey to your doorstep."
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
        <div className="text-center max-w-3xl mx-auto mb-20 text-nowrap">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Hawaii Pest Knowledge Base
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight leading-tight">
            Hawaii <span className="text-indigo-600 border-b-4 border-indigo-600/20">Centipede FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-bold italic">
            Essential information for Kapolei residents about Hawaii centipedes, treatment options, and property protection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <FAQCard key={index} {...faq} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-4">Still have centipede questions?</p>
          <a href="tel:3238801224" className="inline-flex items-center gap-3 text-indigo-600 font-black text-2xl hover:text-slate-900 transition-colors uppercase tracking-tight text-nowrap">
            <Phone className="w-6 h-6" />
            (323) 880-1224
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
