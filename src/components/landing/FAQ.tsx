import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How much is a typical heat treatment for bed bugs?",
    answer: "In Baltimore, a typical residential heat treatment ranges from $1,000 to $3,000 depending on the square footage and the severity of the infestation."
  },
  {
    question: "Does heat treatment for bed bugs really work?",
    answer: "Yes, heat treatment is highly effective. It is the only method that can achieve 100% eradication of bed bugs and their eggs in a single session by reaching every corner of the home."
  },
  {
    question: "How much does Terminix charge for bed bug heat treatment?",
    answer: "Major national companies like Terminix often charge between $1,500 and $4,000 for comprehensive bed bug heat remediation services."
  },
  {
    question: "How much to rent a bed bug heater?",
    answer: "Renting a bed bug heater in Baltimore can cost between $200 and $500 per day. however, professional treatment is recommended for guaranteed results and safety."
  },
  {
    question: "Will homeowners insurance cover bed bugs?",
    answer: "Generally, no. Most homeowners insurance policies consider bed bug infestations a maintenance issue and do not provide coverage for treatment or damage."
  },
  {
    question: "How much does Orkin charge for bed bugs?",
    answer: "Orkin's pricing for bed bug services typically starts around $1,500 for specialized treatments, varying based on the size of the area being treated."
  },
  {
    question: "What do exterminators do to get rid of bed bugs?",
    answer: "Exterminators use industrial heaters to raise the temperature of the home to 120°F-140°F, using high-powered fans to circulate the air and ensure every hiding spot is treated."
  },
  {
    question: "How much do bed bug exterminators charge?",
    answer: "Chemical treatments may start at $300 per room, while whole-home heat treatments typically range from $1,000 to $3,500+ depending on the home's size."
  },
  {
    question: "What draws bed bugs out of hiding during the day?",
    answer: "Bed bugs are primarily attracted to the CO2 and body heat emitted by humans. While they are nocturnal, they will come out during the day if they are hungry."
  },
  {
    question: "What are the downsides of heat treatment?",
    answer: "The primary downsides are the higher initial cost compared to chemical sprays and the preparation required, such as removing heat-sensitive items from the home."
  },
  {
    question: "How did people get rid of bed bugs in the old days?",
    answer: "Historically, people used extreme methods like boiling water, kerosene, and even toxic chemicals like DDT before safer, more effective thermal methods were developed."
  },
  {
    question: "Can I do bed bug heat treatment myself?",
    answer: "DIY heat treatment is not recommended. Household heaters cannot safely reach the sustained lethal temperatures required for complete eradication."
  },
  {
    question: "Can bed bugs live in clothes?",
    answer: "Yes, bed bugs frequently hide in clothing. Washing and drying clothes on the highest heat setting is a critical step in the remediation process."
  },
  {
    question: "Can you feel bed bugs crawling on you?",
    answer: "Most people do not feel bed bugs crawling. They are extremely light and usually feed while the host is in a deep sleep."
  },
  {
    question: "How to 100% get rid of bed bugs?",
    answer: "Professional heat treatment is the most reliable method to achieve 100% eradication of adults, nymphs, and eggs in a single visit."
  },
  {
    question: "Can bed bugs live in pillows?",
    answer: "Yes, bed bugs can hide in pillow seams or deep inside the pillow stuffing. We recommend treating all bedding during the heat remediation process."
  },
  {
    question: "Why is bed bug heat treatment so expensive?",
    answer: "The cost reflects the specialized industrial equipment, the high energy consumption, and the intensive labor required to monitor and manage lethal temperatures safely."
  },
  {
    question: "Does homeowners insurance cover bed bugs?",
    answer: "No, bed bugs are almost universally excluded from standard homeowners and renters insurance policies in Maryland."
  },
  {
    question: "Can I use a space heater to get rid of bed bugs?",
    answer: "No. Standard space heaters are a fire hazard when run at high temperatures for long periods and cannot produce the even, intense heat needed for eradication."
  },
  {
    question: "Can you do heat treatment for bed bugs in an apartment?",
    answer: "Yes, heat treatment is ideal for apartments as it is non-toxic and effectively kills bed bugs without forcing them to move into neighboring units."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Bed Bug Heat Treatment <span className="text-indigo-600">in Baltimore MD FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Common questions about thermal remediation, professional eradication techniques, and protection in Baltimore.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden transition-all duration-300">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-slate-900 uppercase tracking-tight text-xs">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 bg-white">
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
