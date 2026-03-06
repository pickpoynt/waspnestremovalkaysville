import { Phone, Menu, X, Bug, Zap, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Unit Services", href: "#services" },
    { name: "Technical Advantage", href: "#why-us" },
    { name: "Field Protocol", href: "#info" },
    { name: "Dispatch FAQ", href: "#faq" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl py-4"
          : "bg-transparent py-8"
        }`}
    >
      {/* Mobile Sticky Call Header - Priority Protocol */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-indigo-600 text-white py-2 px-4 z-[110] flex items-center justify-between border-b border-indigo-400/30 text-nowrap">
        <div className="flex items-center gap-2 text-nowrap">
          <Bug className="w-4 h-4 animate-pulse text-nowrap" />
          <span className="text-[10px] font-black uppercase tracking-[0.1em] text-nowrap">Emergency Unit Active</span>
        </div>
        <a href="tel:3238801224" className="flex items-center gap-2 text-[12px] font-black underline decoration-2 underline-offset-4 text-nowrap">
          <Phone className="w-3.5 h-3.5 text-nowrap" />
          (323) 880-1224
        </a>
      </div>

      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer text-nowrap" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-900/20 group-hover:rotate-[360deg] transition-transform duration-700 text-nowrap">
              <Bug className="w-6 h-6 text-white text-nowrap" />
            </div>
            <div className="flex flex-col text-nowrap">
              <span className={`text-xl font-black uppercase tracking-tighter leading-none transition-colors text-nowrap ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                Brooksville Wasp
              </span>
              <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-[0.3em] mt-1 text-nowrap">
                Emergency Removal Pros
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-nowrap">
            <div className="flex items-center gap-6 text-nowrap">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-indigo-600 relative group text-nowrap ${isScrolled ? 'text-slate-600' : 'text-slate-600'}`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-6 border-l border-slate-200 pl-8 text-nowrap">
              <div className="flex flex-col items-end text-nowrap">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-nowrap">Emergency Service</span>
                <a href="tel:3238801224" className="text-xl font-black text-indigo-600 hover:scale-105 transition-transform text-nowrap">
                  (323) 880-1224
                </a>
              </div>
              <Button className="bg-slate-900 text-white hover:bg-indigo-600 h-14 px-8 rounded-xl font-bold uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all text-nowrap" asChild>
                <a href="tel:3238801224">Schedule Removal</a>
              </Button>
            </div>
          </div>

          <button
            className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-2xl animate-in slide-in-from-top py-8 px-4">
          <div className="flex flex-col gap-6 mb-8 text-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-black text-slate-900 uppercase tracking-tight text-nowrap"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="p-8 bg-indigo-600 rounded-[2rem] text-white text-nowrap">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-70 text-nowrap uppercase">Brooksville Hotline</p>
            <a href="tel:3238801224" className="text-3xl font-black block mb-6 text-nowrap">(323) 880-1224</a>
            <Button className="w-full bg-white text-indigo-600 h-14 rounded-2xl font-black uppercase tracking-widest shadow-xl text-nowrap" asChild>
              <a href="tel:3238801224">Express Dispatch</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
