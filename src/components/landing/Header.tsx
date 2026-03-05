import { useState, useEffect } from "react";
import { Menu, X, Phone, Trees } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Sticky Click-to-Call Header (Visible only on mobile/tablet) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-[60] bg-indigo-600 text-white py-3 px-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-2">
          <Trees className="w-5 h-5 text-nowrap" />
          <span className="font-bold text-xs uppercase tracking-tight text-nowrap">Montana Log Home Restoration Pros</span>
        </div>
        <a href="tel:3802660944" className="flex items-center gap-2 bg-white text-indigo-600 px-4 py-1.5 rounded-full font-bold text-xs animate-pulse">
          <Phone className="w-3.5 h-3.5" />
          CALL NOW
        </a>
      </div>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-lg border-b border-blue-50" : "bg-transparent py-6"} ${"lg:block hidden"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 group cursor-pointer text-nowrap">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${isScrolled ? "bg-indigo-600" : "bg-white/10 backdrop-blur-md border border-white/20 rotate-[-10deg] group-hover:rotate-0"}`}>
                <Trees className={`w-7 h-7 text-nowrap ${isScrolled ? "text-white" : "text-indigo-400"}`} />
              </div>
              <div className="text-nowrap">
                <span className={`font-heading font-bold text-xl md:text-2xl block leading-none tracking-tight text-nowrap ${isScrolled ? "text-indigo-950" : "text-white"}`}>
                  Montana
                </span>
                <span className={`text-sm font-bold uppercase tracking-[0.2em] text-nowrap ${isScrolled ? "text-indigo-600" : "text-indigo-400"}`}>
                  LOG HOME <span className="text-[10px] opacity-70 px-1 text-nowrap">RESTORATION Pros</span>
                </span>
              </div>
            </div>

            <nav className="hidden xl:flex items-center gap-8">
              {["services", "why-us", "faq", "contact"].map((link) => (
                <a key={link} href={`#${link}`} className={`text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 ${isScrolled ? "text-slate-600 hover:text-indigo-600" : "text-white/90 hover:text-white"}`}>
                  {link.replace("-", " ")}
                </a>
              ))}
              <a href="/lease-my-number" className={`text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 ${isScrolled ? "text-slate-600 hover:text-indigo-600" : "text-white/90 hover:text-white"}`}>
                Lease
              </a>
            </nav>

            <div className="hidden lg:flex items-center gap-6">
              <div className={`flex flex-col items-end ${isScrolled ? "text-slate-900" : "text-white"}`}>
                <p className="text-slate-400 text-sm mb-2 uppercase tracking-widest font-bold text-nowrap">MONTANA RESTORATION LINE</p>
                <a href="tel:3802660944" className="text-3xl font-bold text-indigo-400 block mb-6 text-nowrap">(380) 266-0944</a>
              </div>
              <Button className={`${isScrolled ? "bg-indigo-600 hover:bg-indigo-700" : "bg-white text-slate-900 hover:bg-indigo-50"} h-12 px-8 rounded-xl font-bold shadow-xl transition-all hover:-translate-y-0.5 text-nowrap`} asChild>
                <a href="tel:3802660944">Book Now</a>
              </Button>
            </div>

            <button className="xl:hidden p-2 text-nowrap" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className={`w-8 h-8 ${isScrolled ? "text-slate-900" : "text-white"}`} /> : <Menu className={`w-8 h-8 ${isScrolled ? "text-slate-900" : "text-white"}`} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Header for Mobile (Adjusted for top sticky bar) */}
      <header className={`lg:hidden fixed top-[44px] left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-lg border-b border-blue-50" : "bg-slate-950/80 backdrop-blur-sm py-4"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trees className="w-8 h-8 text-indigo-500" />
              <span className="font-bold text-white text-sm uppercase text-nowrap">Montana Log Home Resto Pros</span>
            </div>
            <button className="p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-8 h-8 text-white text-nowrap" /> : <Menu className="w-8 h-8 text-white text-nowrap" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="bg-slate-900 text-white p-6 absolute top-full left-0 right-0 border-t border-slate-800 h-screen overflow-y-auto">
            <div className="flex flex-col gap-6 text-nowrap">
              {["Services", "Why Us", "FAQ", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-lg font-bold tracking-wide hover:text-indigo-400 transition-colors py-4 border-b border-slate-800 uppercase" onClick={() => setIsMobileMenuOpen(false)}>{item}</a>
              ))}
              <a href="/lease-my-number" className="text-lg font-bold tracking-wide hover:text-indigo-400 transition-colors py-4 border-b border-slate-800 uppercase" onClick={() => setIsMobileMenuOpen(false)}>Lease Number</a>
              <div className="pt-8 text-nowrap">
                <p className="text-slate-400 text-xs mb-2 uppercase tracking-widest font-bold text-nowrap">MONTANA RESTORATION HOTLINE</p>
                <a href="tel:3802660944" className="text-4xl font-bold text-indigo-400 block mb-8 underline decoration-indigo-600/30 underline-offset-8 text-nowrap">(380) 266-0944</a>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-16 text-xl font-bold rounded-2xl shadow-xl shadow-indigo-900/40" asChild>
                  <a href="tel:3802660944">CLICK TO CALL NOW</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
