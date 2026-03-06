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
    { name: "Rodent Extraction", href: "#services" },
    { name: "Technical Advantage", href: "#why-us" },
    { name: "Sanitization Info", href: "#info" },
    { name: "Rodent FAQ", href: "#faq" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-xl py-4"
        : "bg-transparent py-8"
        }`}
    >
      {/* Mobile Sticky Call Header - Priority Protocol */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-indigo-600 text-white py-2 px-4 z-[110] flex items-center justify-between border-b border-indigo-400/30">
        <div className="flex items-center gap-2">
          <Bug className="w-4 h-4 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.1em]">Rodent Unit Active</span>
        </div>
        <a href="tel:3238801224" className="flex items-center gap-2 text-[12px] font-black underline decoration-2 underline-offset-4">
          <Phone className="w-3.5 h-3.5" />
          (323) 880-1224
        </a>
      </div>

      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-900/20 group-hover:rotate-[360deg] transition-transform duration-700">
              <Bug className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black uppercase tracking-tighter leading-none transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                Kaysville Rodent
              </span>
              <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-[0.3em] mt-1">
                Removal Service Pros
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-indigo-600 relative group ${isScrolled ? 'text-slate-600' : 'text-white'}`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-6 border-l border-slate-200 pl-8">
              <div className="flex flex-col items-end">
                <span className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${isScrolled ? 'text-slate-400' : 'text-slate-200'}`}>Kaysville Dispatch</span>
                <a href="tel:3238801224" className={`text-xl font-black hover:scale-105 transition-transform ${isScrolled ? 'text-indigo-600' : 'text-white'}`}>
                  (323) 880-1224
                </a>
              </div>
              <Button className="bg-slate-900 text-white hover:bg-indigo-600 h-14 px-8 rounded-xl font-bold uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all" asChild>
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
          <div className="flex flex-col gap-6 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-black text-slate-900 uppercase tracking-tight"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="p-8 bg-indigo-600 rounded-[2rem] text-white">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-70">Kaysville Hotline</p>
            <a href="tel:3238801224" className="text-3xl font-black block mb-6">(323) 880-1224</a>
            <Button className="w-full bg-white text-indigo-600 h-14 rounded-2xl font-black uppercase tracking-widest shadow-xl" asChild>
              <a href="tel:3238801224">Extreme Dispatch</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
