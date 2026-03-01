import { Phone } from "lucide-react";

const FloatingCallButton = () => {
    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
            <a
                href="tel:3238801224"
                className="group relative flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-2xl shadow-2xl hover:bg-indigo-700 transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Call Kapolei Centipede Treatment Specialist"
            >
                <div className="absolute inset-0 bg-indigo-600 rounded-2xl animate-ping opacity-20 group-hover:hidden" />
                <Phone className="w-8 h-8 relative z-10 group-hover:rotate-12 transition-transform" />

                {/* Tooltip */}
                <div className="absolute right-full mr-4 px-4 py-2 bg-slate-900 text-white text-[10px] font-black rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-widest shadow-xl border border-white/10 text-nowrap">
                    CALL (323) 880-1224
                </div>
            </a>
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-indigo-100 shadow-xl animate-bounce text-nowrap">
                <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                <span className="text-[9px] font-black text-slate-800 uppercase tracking-tighter">Kapolei Centipede Specialist Online</span>
            </div>
        </div>
    );
};

export default FloatingCallButton;
