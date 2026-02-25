import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import BedBugHeatTreatmentInfo from "@/components/landing/BedBugHeatTreatmentInfo";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";
import { Search, ShieldCheck, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>bed bug heat treatment baltimore md | Baltimore Bed Bug Heat Treatment Pros</title>
        <meta name="description" content="Looking for professional bed bug heat treatment baltimore md? Expert thermal elimination, 100% eradication, and discreet bed bug removal for Baltimore homes. Call 3238801224 today!" />
        <meta name="keywords" content="bed bug heat treatment baltimore md, Baltimore bed bug exterminator, heat treatment for bed bugs Baltimore, professional bed bug removal Baltimore MD, pest control Baltimore" />
        <link rel="canonical" href="https://bedbugheattreatmentbaltimoremd.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Baltimore Bed Bug Heat Treatment Pros",
            "image": "/1.jpeg",
            "@id": "https://bedbugheattreatmentbaltimoremd.vercel.app/",
            "url": "https://bedbugheattreatmentbaltimoremd.vercel.app/",
            "telephone": "+13238801224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Inner Harbor",
              "addressLocality": "Baltimore",
              "addressRegion": "MD",
              "postalCode": "21201",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.2904",
              "longitude": "-76.6122"
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
            "serviceType": "Bed Bug Heat Treatment",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Baltimore Bed Bug Heat Treatment Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Baltimore, MD"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Bed Bug Eradication Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Heat Treatment" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Bed Bug Eradication" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Thermal Remediation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bed Bug Inspections" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="bed bug heat treatment baltimore md | Baltimore Bed Bug Heat Treatment Pros" />
        <meta property="og:description" content="Expert bed bug heat treatment services in Baltimore, MD. Get 100% elimination in a single day with professional thermal remediation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bedbugheattreatmentbaltimoremd.vercel.app/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Bed Bug <br />
              <span className="text-white drop-shadow-sm uppercase">Heat Treatment in Baltimore MD</span>
            </>
          }
          subtitle="Baltimore's premier specialists in professional bed bug heat treatment. We provide advanced thermal remediation that reaches every corner of your home, ensuring 100% eradication of bed bugs and their eggs in a single day. Discreet, eco-friendly, and effective."
          image="/1.jpeg"
          overlayImage="/2.jpeg"
          badge="BALTIMORE BED BUG HEAT TREATMENT PROS"
          phone="3238801224"
          features={[
            { icon: Search, text: "Detection Experts" },
            { icon: Zap, text: "Thermal Remediation" },
            { icon: ShieldCheck, text: "100% Eradication" }
          ]}
        />
        <Services />
        <WhyUs />
        <BedBugHeatTreatmentInfo />
        <Contact />
        <FAQ />

        <section className="bg-white py-12 border-t text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 uppercase tracking-tight">Our Local Resource Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
              <a href="https://earwigexterminatordenver.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Earwig Exterminator Denver</a>
              <a href="https://centipederepellenthawaii.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Centipede Repellent Hawaii</a>
              <a href="https://pestcontrolsouthpointohio.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Pest Control South Point Ohio</a>
              <a href="https://rodentcontrolcorvallisoregon.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Rodent Control Corvallis Oregon</a>
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

