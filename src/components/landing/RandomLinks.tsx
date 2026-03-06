const links = [
  { text: "Rodent Control Corvallis Oregon", url: "https://rodentcontrolcorvallisoregon.vercel.app/" },
  { text: "Wildlife Removal Gastonia NC", url: "https://wildliferemovalgastonianc.vercel.app/" },
  { text: "Bed Bug Heat Treatment Baltimore MD", url: "https://bedbugheattreatmentbaltimoremd.vercel.app/" },
  { text: "Pest Control Baton Rouge", url: "https://pestcontrolbatonrouge.vercel.app/" },
  { text: "Earwig Exterminator Denver", url: "https://earwigexterminatordenver.vercel.app/" },
  { text: "Centipede Repellent Hawaii", url: "https://centipederepellenthawaii.vercel.app/" },
  { text: "Termite Inspection Burbank", url: "https://termiteinspectionburbank.vercel.app/" },
  { text: "Gopher Control Frankenmuth MI", url: "https://gophercontrolfrankenmuthmi.vercel.app/" }
];

const RandomLinks = () => {
  // Get 4 random links
  const randomLinks = [...links].sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 text-nowrap">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8 text-center text-nowrap uppercase">Industry Partners & Resources</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-nowrap">
          {randomLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="group p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all text-center text-nowrap"
            >
              <span className="text-sm font-bold text-slate-600 group-hover:text-indigo-600 transition-colors uppercase tracking-tight text-nowrap">
                {link.text}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomLinks;
