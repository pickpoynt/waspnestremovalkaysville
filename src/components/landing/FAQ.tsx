import { HelpCircle, Search, ShieldCheck, Zap, Droplets, Clock, Hammer, Award, Info, CheckCircle, AlertCircle, TrendingUp, DollarSign, Home, Waves, Activity, Wrench, FileText, Scissors, LucideIcon } from "lucide-react";

const faqs = [
  {
    icon: HelpCircle,
    question: "What exactly is trenchless sewer repair?",
    answer: "Trenchless sewer repair is a 'no-dig' method of restoring or replacing damaged sewer lines. Instead of digging a massive trench through your Scottsdale landscaping, we use small access points to insert a new liner or pull a new pipe through the old one."
  },
  {
    icon: Search,
    question: "How does CIPP lining work?",
    answer: "Cured-In-Place Pipe (CIPP) lining involves saturating a felt tube with epoxy resin, pulling it into the damaged pipe, and inflating it. Once the resin cures, it creates a jointless, 'pipe-within-a-pipe' that is as strong as new PVC."
  },
  {
    icon: Hammer,
    question: "Is pipe bursting better than lining?",
    answer: "Pipe bursting is preferred when the original pipe is collapsed or needs to be upsized. We pull a new HDPE pipe through the old one, 'bursting' the old pipe outward. Lining is better for pipes that are still structurally intact but have leaks or roots."
  },
  {
    icon: Clock,
    question: "How long does a trenchless repair last?",
    answer: "Most trenchless materials, especially HDPE and epoxy resins, are rated for a 50-year lifespan. Some studies suggest they can last up to 100 years, as they are immune to the corrosion that kills cast iron."
  },
  {
    icon: Home,
    question: "Will it damage my Scottsdale landscaping?",
    answer: "No! This is the primary benefit. We can save your expensive desert hardscaping, pavers, and pool decks in Scottsdale. We typically only need one or two small access pits."
  },
  {
    icon: Activity,
    question: "Can trenchless fix root intrusion?",
    answer: "Yes. By creating a seamless, jointless pipe, we eliminate the gaps where Scottsdale's desert vegetation roots typically enter the system. Roots cannot penetrate the new epoxy or HDPE barrier."
  },
  {
    icon: DollarSign,
    question: "Is it cheaper than traditional digging?",
    answer: "While the technology itself can be more expensive, you save thousands by NOT having to replace your driveway, landscaping, or interior flooring after the repair is done."
  },
  {
    icon: Zap,
    question: "How long does the process take?",
    answer: "Most Scottsdale residential trenchless projects are completed in a single day. Traditional excavation can take up to a week and leave your property in disarray."
  },
  {
    icon: ShieldCheck,
    question: "Is trenchless repair safe for old pipes?",
    answer: "Absolutely. It's often the ONLY safe way to repair old, brittle clay or cast iron pipes without causing them to shatter completely during excavation."
  },
  {
    icon: AlertCircle,
    question: "What are the signs I need sewer repair?",
    answer: "Look for frequent backups, slow drains, gurgling noises from toilets, or unusually lush green patches in your Scottsdale yard (which indicates a leak)."
  },
  {
    icon: Wrench,
    question: "Does trenchless work for cast iron pipes?",
    answer: "Yes. Cast iron often suffers from 'channeling' or scale buildup. We clean the pipe via hydro-jetting and then line it to create a smooth, permanent interior."
  },
  {
    icon: AlertCircle,
    question: "Can it fix a collapsed sewer line?",
    answer: "If the line is fully collapsed, pipe bursting is the solution. If it's only partially collapsed or cracked, CIPP lining can often bridge the gap."
  },
  {
    icon: Award,
    question: "What is the warranty on trenchless?",
    answer: "Scottsdale Trenchless Pros offers a lifetime warranty on the structural integrity of our liners and a 10-year warranty on the installation workmanship."
  },
  {
    icon: Waves,
    question: "Is hydro-jetting required first?",
    answer: "Yes. We must remove all debris, grease, and scale to ensure the new liner bonds perfectly to the host pipe. It's included in our standard Scottsdale service package."
  },
  {
    icon: TrendingUp,
    question: "Will it increase my home value?",
    answer: "Yes. Having a certified 'restored' sewer line with a 50-year lifespan is a major selling point in the Scottsdale real estate market, often documented in home inspections."
  },
  {
    icon: Search,
    question: "How do I know if I'm a candidate?",
    answer: "We start with a high-definition camera inspection. This allows us to see the exact condition of your Scottsdale pipes and recommend the best trenchless method."
  },
  {
    icon: Droplets,
    question: "Does it work under pool decks?",
    answer: "Yes! Scottsdale homes often have sewer lines running right under pool areas. Trenchless allows us to fix these lines without ever touching your pool deck."
  },
  {
    icon: Info,
    question: "What kind of resin is used?",
    answer: "We use industrial-grade, 100% solids epoxy resins. These are non-toxic once cured and are designed specifically for long-term underground hydraulic environments."
  },
  {
    icon: Scissors,
    question: "Is the new pipe smaller?",
    answer: "The liner reduces the diameter by only a few millimeters (about 5%). However, because the surface is now perfectly smooth, the flow capacity actually increases."
  },
  {
    icon: FileText,
    question: "Does it require a permit in Scottsdale?",
    answer: "Yes, Scottsdale and Maricopa County require permits for sewer work. We handle all the permitting and inspections as part of our full-service offering."
  },
  {
    icon: CheckCircle,
    question: "Why choose Scottsdale Trenchless Pros?",
    answer: "We are the local specialists in no-dig technology. We don't just do general plumbing; we focus exclusively on trenchless restoration for Scottsdale properties."
  }
];


const FAQCard = ({ icon: Icon, question, answer }: { icon: LucideIcon, question: string, answer: string }) => (
  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-indigo-200 transition-all group h-full">
    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight leading-tight">{question}</h3>
    <p className="text-slate-500 leading-relaxed text-sm font-medium italic">{answer}</p>
  </div>
);

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
            Expert Knowledge Base
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Learn About <span className="text-indigo-600">Trenchless Technology</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Everything you need to know about no-dig sewer repair in Scottsdale. Have more questions? Call our experts at (877) 792-1410.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <FAQCard key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
