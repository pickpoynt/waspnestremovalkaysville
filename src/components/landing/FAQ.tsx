import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What do local plumbers charge per hour?",
    answer: "In the Montello area, professional plumbers typically charge between $75 and $150 per hour. Rates can vary based on the complexity of the job and whether it's an emergency call."
  },
  {
    question: "How much does a plumber charge per hour in Wisconsin?",
    answer: "Across Wisconsin, the average hourly rate for a licensed plumber is approximately $110. In smaller communities like Montello, you might find slightly lower rates compared to Milwaukee or Madison."
  },
  {
    question: "Can plumbers make $100 an hour?",
    answer: "Yes, experienced master plumbers or those running their own specialized service companies in Wisconsin often charge $100 to $200 per hour to cover equipment, insurance, and expertise."
  },
  {
    question: "Do plumbers give a free estimate?",
    answer: "Many local plumbers in Marquette County provide free over-the-phone estimates. However, for complex issues that require an on-site diagnostic, a service call fee is common."
  },
  {
    question: "Is it cheaper to DIY or hire a plumber?",
    answer: "While DIY saves on labor, mistakes in plumbing can lead to thousands of dollars in water damage. Hiring a professional in Montello ensures the job is done to Wisconsin code."
  },
  {
    question: "Are you supposed to tip a plumber?",
    answer: "Tipping is not required or expected in the plumbing trade. However, if a technician goes above and beyond—especially during a late-night emergency—a small tip or a positive online review is always appreciated."
  },
  {
    question: "How to negotiate a plumber's rate?",
    answer: "The best way to negotiate is to get multiple quotes, bundle several small repairs into one visit, or ask if there are discounts for seniors or veterans in the Marquette County area."
  },
  {
    question: "What's the most expensive part of a bathroom remodel?",
    answer: "Relocating existing plumbing (like moving a toilet or shower drain) is usually the most labor-intensive and expensive part of a bathroom renovation."
  },
  {
    question: "Is $28 an hour good in Wisconsin?",
    answer: "$28 per hour is a solid wage for a plumbing apprentice or journeyman in Wisconsin, translating to about $58,000 a year before overtime."
  },
  {
    question: "How not to get ripped off by a plumber?",
    answer: "Always check for a valid Wisconsin plumbing license, ask for a written estimate before work begins, and avoid any contractor who demands full payment upfront."
  },
  {
    question: "What is the 135 rule in plumbing?",
    answer: "The 135 rule often refers to the slope of horizontal drainage pipes (1/4 inch per foot). Maintaining this '1% to 3%' grade is critical for preventing clogs and ensuring proper flow."
  },
  {
    question: "Is it okay to negotiate plumber costs?",
    answer: "Yes, especially for large projects. While hourly rates for repairs are usually firm, you can often negotiate a 'flat rate' for major installations like whole-home repiping."
  },
  {
    question: "How to tell if your plumber is overcharging you?",
    answer: "If the quote is significantly higher than 2-3 other local Montello estimates, or if they are charging for 'essential items' that weren't discussed, they may be overcharging."
  },
  {
    question: "What is a normal call-out charge for a plumber?",
    answer: "A typical call-out fee in central Wisconsin ranges from $49 to $99. This usually covers the travel and initial 15-30 minutes of diagnostic time."
  },
  {
    question: "What are common hidden plumbing costs?",
    answer: "Hidden costs often include permit fees, wall/ceiling repair after a pipe fix, or disposal fees for old water heaters and fixtures."
  },
  {
    question: "How much is $70,000 a year per hour?",
    answer: "$70,000 a year is roughly $33.65 per hour based on a standard 40-hour work week. Many experienced Montello plumbers earn in this range."
  },
  {
    question: "What jobs pay $400 an hour?",
    answer: "In the plumbing world, specialized emergency services or high-end commercial consulting can reach these figures, though they are not the standard for residential repairs."
  },
  {
    question: "What trade makes $100,000 a year?",
    answer: "Plumbing, Electricians, and HVAC technicians in Wisconsin can all reach $100,000+ annually through a combination of master-level expertise, overtime, and business ownership."
  },
  {
    question: "How long should a water heater last in Wisconsin?",
    answer: "In the Montello area, a standard tank water heater typically lasts 8 to 12 years. Regular flushing to remove mineral sediment can extend this lifespan."
  },
  {
    question: "What is the most common plumbing emergency in Montello?",
    answer: "During winter, frozen and burst pipes are the #1 emergency. In summer, we see many issues with outdoor spigots and septic backup after heavy rain."
  },
  {
    question: "Can I use chemical drain cleaners in older pipes?",
    answer: "We strongly advise against it for older Montello homes. Harsh chemicals can corrode galvanized or cast-iron pipes, leading to much more expensive leaks."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Plumbing <span className="text-indigo-600">Expert Knowledge Base</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Essential information about plumbing costs, local regulations, and maintenance standards for homeowners in Montello, Wisconsin.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden transition-all duration-300">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-slate-900 uppercase tracking-tight text-sm">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 bg-white">
                  <p className="text-slate-600 text-base leading-relaxed border-t border-slate-50 pt-4">{faq.answer}</p>
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
