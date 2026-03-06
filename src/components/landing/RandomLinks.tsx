const links = [
  { text: "Emergency Wasp Removal Brooksville", url: "https://emergencywaspremovalbrooksvillefl.vercel.app/" },
  { text: "No Tent Termite Treatment Brooksville", url: "https://notenttermitetreatmentbrooksvillefl.vercel.app/" },
  { text: "Plumber Stone Oak", url: "https://plumberstoneoak.vercel.app/" },
  { text: "Polybutylene Pipe Replacement Boonton", url: "https://polybutylenepipereplacementboonton.vercel.app/" },
  { text: "Slab Leak Detection Boonton", url: "https://slableakdetectionspecialistboonton.vercel.app/" },
  { text: "Brown Recluse Pest Control Nashville", url: "https://brownreclusepestcontrolnashville.vercel.app/" },
  { text: "Mold Remediation Eau Claire WI", url: "https://moldremediationeauclairewi.vercel.app/" },
  { text: "Chipmunk Removal Brooksville FL", url: "https://chipmunkremovalbrooksvillefl.vercel.app/" }
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
