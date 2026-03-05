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
import { ShieldCheck, Trees, Zap, Home } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>log home restoration montana (380) 266-0944 | Montana Log Home Restoration Pros</title>
        <meta name="description" content="Professional log home restoration montana. Call (380) 266-0944. Expert log home repair, staining, chinking, and cob blasting in Montana. Free estimates." />
        <meta name="keywords" content="log home restoration montana, montana log home repair, log home maintenance montana, local log home restoration, log cabin restoration montana" />
        <link rel="canonical" href="https://loghomerestorationmontana.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Montana Log Home Restoration Pros",
            "image": "/2.jpeg",
            "@id": "https://loghomerestorationmontana.vercel.app/",
            "url": "https://loghomerestorationmontana.vercel.app/",
            "telephone": "(380) 266-0944",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Main St",
              "addressLocality": "Bozeman",
              "addressRegion": "MT",
              "postalCode": "59715",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "45.6770",
              "longitude": "-111.0429"
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
            "serviceType": "Log Home Restoration & Maintenance",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Montana Log Home Restoration Pros"
            },
            "areaServed": {
              "@type": "State",
              "name": "Montana"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Log Home Restoration Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Log Home Chinking & Sealing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cob Blasting & Surface Prep" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Professional Log Staining" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Log Rot Repair & Replacement" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="log home restoration montana (380) 266-0944 | Montana Log Home Restoration Pros" />
        <meta property="og:description" content="Expert log home restoration in Montana. Professional repair, staining, and chinking. Call (380) 266-0944!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://loghomerestorationmontana.vercel.app/" />
        <meta property="og:image" content="/2.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              LOG HOME <br />
              <span className="text-white drop-shadow-sm uppercase text-nowrap">RESTORATION MONTANA</span>
            </>
          }
          subtitle="Montana's premier log home restoration specialists providing expert repair, staining, and maintenance services. Our local Montana team ensures your log home remains beautiful and protected from the elements 24/7. Trusted by Montana homeowners for quality and precision."
          image="/2.jpeg"
          overlayImage="/4.jpeg"
          badge="MONTANA LOG HOME RESTORATION"
          phone="3802660944"
          features={[
            { icon: Home, text: "Structural Restoration" },
            { icon: Trees, text: "Natural Finish Care" },
            { icon: ShieldCheck, text: "All-Weather Protection" }
          ]}
        />
        <Services />
        <WhyUs />
        <TrenchlessInfo />
        <Contact />
        <FAQ />

        <section className="bg-white py-12 border-t text-center">
          <div className="container mx-auto px-4 text-nowrap">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 uppercase tracking-tight">Our Professional Resource Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
              <a href="https://earwigexterminatordenver.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Earwig Exterminator Denver</a>
              <a href="https://centipederepellenthawaii.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Centipede Repellent Hawaii</a>
              <a href="https://pestcontrolsouthpointohio.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Pest Control South Point Ohio</a>
              <a href="https://rodentcontrolcorvallisoregon.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Rodent Control Corvallis Oregon</a>
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
