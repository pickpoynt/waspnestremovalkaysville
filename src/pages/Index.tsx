import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import TrenchlessInfo from "@/components/landing/TrenchlessInfo";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import { Zap, ShieldCheck, Bug, Home } from "lucide-react";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

const Index = () => {
  const primaryKeyword = "Rodent removal Kaysville";
  const firmName = "Kaysville Rodent Pros";
  const phoneNumber = "(323) 880-1224";
  const businessCords = { lat: 41.0347, lng: -111.9383 };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{primaryKeyword} {phoneNumber} | {firmName}</title>
        <meta name="description" content={`Expert ${primaryKeyword}. Call ${phoneNumber} for professional rodent extraction. Specialized rat and mouse control in Kaysville, UT. Sanitize your home today.`} />
        <meta name="keywords" content="rodent removal kaysville, rat control kaysville ut, mouse exterminator kaysville, pest control kaysville utah" />
        <link rel="canonical" href="https://rodentremovalkaysville.vercel.app/" />

        {/* Open Graph */}
        <meta property="og:title" content={`${primaryKeyword} | ${firmName}`} />
        <meta property="og:description" content="Kaysville's leading rodent removal specialists. Rapid response and professional extraction to keep your home safe." />
        <meta property="og:url" content="https://rodentremovalkaysville.vercel.app/" />
        <meta property="og:image" content="/2.jpeg" />

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": firmName,
            "image": "https://rodentremovalkaysville.vercel.app/2.jpeg",
            "@id": "https://rodentremovalkaysville.vercel.app/",
            "url": "https://rodentremovalkaysville.vercel.app/",
            "telephone": phoneNumber,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kaysville",
              "addressLocality": "Kaysville",
              "addressRegion": "UT",
              "postalCode": "84037",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": businessCords.lat,
              "longitude": businessCords.lng
            },
            "areaServed": "Kaysville, UT",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Rodent Removal",
            "provider": {
              "@type": "LocalBusiness",
              "name": firmName
            },
            "areaServed": {
              "@type": "City",
              "name": "Kaysville"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Rodent Removal Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Rat Extermination"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mouse Proofing"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <Header />
      <main>
        <Hero
          title={<><span className="text-indigo-600">{primaryKeyword}</span></>}
          subtitle="Kaysville's premier rodent extraction units. We provide professional rat and mouse removal and structural sanitization for your residential or commercial property. Service available 24/7."
          badge="KAYSVILLE RODENT PROS"
          phone="3238801224"
          image="/2.jpeg"
          overlayImage="/4.jpeg"
          features={[
            { icon: ShieldCheck, text: "Full Extraction Guarantee" },
            { icon: Bug, text: "Rodent Proofing Experts" },
            { icon: Home, text: "Total Property Sanitization" }
          ]}
        />
        <Services />
        <WhyUs />
        <TrenchlessInfo />
        <Contact />
        <FAQ />

        <section className="bg-white py-12 border-t text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 uppercase tracking-tight">Local Service Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
              <a href="https://rodentcontrolcorvallisoregon.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline uppercase tracking-tighter">Rodent Control Corvallis Oregon</a>
              <a href="https://wildliferemovalgastonianc.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline uppercase tracking-tighter">Wildlife Removal Gastonia NC</a>
              <a href="https://bedbugheattreatmentbaltimoremd.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline uppercase tracking-tighter">Bed Bug Heat Treatment Baltimore MD</a>
              <a href="https://pestcontrolbatonrouge.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline uppercase tracking-tighter">Pest Control Baton Rouge</a>
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
