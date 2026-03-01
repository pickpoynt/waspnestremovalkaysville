import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import TrenchlessInfo from "@/components/landing/TrenchlessInfo";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Zap, Droplets, Target, Search } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>polybutylene pipe replacement boonton (877) 792-1410 | Boonton Repipe Pros</title>
        <meta name="description" content="Professional polybutylene pipe replacement boonton. (877) 792-1410. Expert whole-house repiping, PEX installation, and NJ code compliance. Free Boonton estimates." />
        <meta name="keywords" content="polybutylene pipe replacement boonton, boonton NJ repipe specialists, blue pipe replacement Boonton, PB pipe lawsuit Boonton, plumbing repipe Boonton NJ" />
        <link rel="canonical" href="https://polybutylenepipereplacementboonton.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Boonton Repipe Pros",
            "image": "/4.jpeg",
            "@id": "https://polybutylenepipereplacementboonton.vercel.app/",
            "url": "https://polybutylenepipereplacementboonton.vercel.app/",
            "telephone": "(877) 792-1410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Boonton, NJ",
              "addressLocality": "Boonton",
              "addressRegion": "NJ",
              "postalCode": "07005",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.9032",
              "longitude": "-74.4074"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Polybutylene Pipe Replacement",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Boonton Repipe Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Boonton, NJ"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Repiping Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Whole House Repiping" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Polybutylene to PEX Transition" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plumbing System Assessment" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Main Replacement" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="polybutylene pipe replacement boonton (877) 792-1410 | Boonton Repipe Pros" />
        <meta property="og:description" content="Expert polybutylene pipe replacement in Boonton, NJ. Professional PEX repiping. Call (877) 792-1410!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://polybutylenepipereplacementboonton.vercel.app/" />
        <meta property="og:image" content="/4.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              POLYBUTYLENE PIPE <br />
              <span className="text-white drop-shadow-sm uppercase">REPLACEMENT IN BOONTON</span>
            </>
          }
          subtitle="Boonton's certified specialists in whole-house polybutylene (PB) pipe replacement. We eliminate the risk of catastrophic flooding by upgrading your aging NJ plumbing with modern, durable PEX systems. Protect your Boonton property value and peace of mind today."
          image="/4.jpeg"
          overlayImage="/2.jpeg"
          badge="BOONTON REPIPE SPECIALISTS"
          phone="8777921410"
          features={[
            { icon: Search, text: "PB Identification" },
            { icon: Target, text: "Non-Invasive PEX" },
            { icon: ShieldCheck, text: "Lifetime Warranty" }
          ]}
        />
        <Services />
        <WhyUs />
        <TrenchlessInfo />
        <Contact />
        <FAQ />

        <section className="bg-white py-12 border-t text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 uppercase tracking-tight">Our Professional Resource Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
              <a href="https://leakingpiperepairinmodesto.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Leaking pipe repair in Modesto</a>
              <a href="https://slableakdetectionspecialistboonton.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Boonton slab leak detection</a>
              <a href="https://waterheaterrepairbeaverton.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Water heater repair Beaverton</a>
              <a href="https://castironpipereplacementboonton.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Boonton cast iron pipe replacement</a>
            </div>
          </div>
        </section>

        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
