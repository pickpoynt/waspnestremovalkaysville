import { Bug, Phone, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How much should rat pest control cost?",
    answer: "Professional rat control typically ranges from $200 to $600 for initial treatment and structural proofing depending on the severity."
  },
  {
    question: "Is rodent service worth it?",
    answer: "Yes, professional service prevents structural damage, fire hazards from chewed wires, and serious health risks to your family."
  },
  {
    question: "What do exterminators use to get rid of rodents?",
    answer: "Exterminators use a combination of industrial-grade traps, rodenticides in secure stations, and exclusionary materials like steel wool."
  },
  {
    question: "Does Utah have a rat problem?",
    answer: "Yes, Utah, including Kaysville, faces significant challenges with Norway rats and roof rats, especially in suburban areas."
  },
  {
    question: "What is the cheapest way to get rid of rats?",
    answer: "DIY trapping is cheapest, but often fails to address the root cause, leading to recurring infestations and higher long-term costs."
  },
  {
    question: "What are three signs that you have a rat infestation?",
    answer: "Common signs include droppings, gnaw marks on wood or wires, and scurrying noises in walls or attics at night."
  },
  {
    question: "What gets rid of mice permanently?",
    answer: "Permanent removal requires total exclusion (sealing all entry points) combined with professional-grade trapping and sanitization."
  },
  {
    question: "What is the hardest pest to get rid of?",
    answer: "Rodents are among the hardest due to their intelligence, rapid breeding cycles, and ability to fit through tiny structural openings."
  },
  {
    question: "What time of night are rats most active?",
    answer: "Rats are nocturnal and most active between dusk and dawn, specifically between 10 PM and 2 AM."
  },
  {
    question: "How do the Amish get rid of mice?",
    answer: "Traditional methods often include using natural predators like barn cats and maintaining strict sanitation and food storage protocols."
  },
  {
    question: "Does insurance cover rodent removal?",
    answer: "Most standard homeowner insurance policies do not cover rodent removal or the damage they cause, as it's considered preventable maintenance."
  },
  {
    question: "Does 2 mice mean an infestation?",
    answer: "Yes, seeing two mice usually indicates a larger nesting population nearby, as they are social animals and breed extremely quickly."
  },
  {
    question: "How to 100% get rid of mice?",
    answer: "100% eradication requires a professional comprehensive plan: Identify sources, Trap existing population, Seal all entries, and Sanitize."
  },
  {
    question: "How much does Terminix charge to get rid of rats?",
    answer: "National providers like Terminix typically charge between $250 and $500 for a one-time service, with ongoing plans costing more."
  },
  {
    question: "How many visits does it take to get rid of rats?",
    answer: "Complete eradication usually takes 2 to 4 visits over several weeks to ensure the entire colony has been eliminated."
  },
  {
    question: "What is the 5 day mouse rule?",
    answer: "Some experts suggest if no new activity is seen for 5 consecutive days after trapping, the immediate infestation may be cleared."
  },
  {
    question: "Does house insurance cover rodent?",
    answer: "Generally no; insurance companies view rodent infestations as a maintenance issue rather than a sudden accidental loss."
  },
  {
    question: "Do plug-in rodent repellers work?",
    answer: "Scientific evidence on ultrasonic plug-ins is mixed; they may provide temporary relief but are rarely a long-term solution for established colonies."
  },
  {
    question: "What is the hardest pest to exterminate?",
    answer: "Bed bugs and cockroaches are often cited as the hardest, but rodents are close behind due to their adaptability and breeding speed."
  },
  {
    question: "What is the number one killer to mice?",
    answer: "Professional-grade snap traps and specialized rodenticides used by licensed technicians are the most effective lethal methods."
  },
  {
    question: "What gets rid of rats permanently?",
    answer: "Only a combination of professional trapping and 'built-out' exclusionary proofing can provide permanent results for your property."
  },
  {
    question: "What time of year are rats most active?",
    answer: "Rats remain active year-round but often increase indoor activity in autumn and winter as they seek warmth and food."
  },
  {
    question: "How much is orkin for rats?",
    answer: "Orkin pricing varies by location and infestation severity but generally starts in the $300 to $500 range for initial corrective measures."
  },
  {
    question: "Can you ever get rid of mice permanently?",
    answer: "Yes, by maintaining a 'rodent-proofed' structure and practicing proper food hygiene, you can keep your home mouse-free indefinitely."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-nowrap">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            PEOPLE <span className="text-indigo-500">ALSO ASK</span>
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-12"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:border-indigo-500/50 transition-all group"
            >
              <h3 className="text-indigo-400 font-black text-[11px] uppercase tracking-[0.2em] mb-4 group-hover:text-indigo-300 transition-colors">
                {faq.question}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed font-medium italic">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <div className="p-10 bg-indigo-600 rounded-[3rem] text-white relative overflow-hidden shadow-2xl shadow-indigo-900/40 text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
            <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">Need Rodent Removal?</h4>
            <p className="text-indigo-100 mb-8 font-bold italic">24/7 Kaysville Technical Dispatch Units Standing By</p>
            <a href="tel:3238801224" className="inline-flex items-center gap-4 bg-white text-indigo-600 px-10 h-16 rounded-2xl font-black transition-all hover:scale-105 shadow-xl">
              <Phone className="w-6 h-6" />
              <span className="text-xl">(323) 880-1224</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
