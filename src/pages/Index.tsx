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
import { ShieldCheck, Bug, Target, Search, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>centipedes treatment kapolei (323) 880-1224 | Kapolei Centipede Control Pros</title>
        <meta name="description" content="Professional centipedes treatment kapolei. (323) 880-1224. Expert Hawaii pest control, centipede nest removal, and home protection. Free Kapolei estimates." />
        <meta name="keywords" content="centipedes treatment kapolei, Hawaii centipede control, Kapolei pest control centipedes, centipede exterminator Kapolei, Hawaii centipede nest removal" />
        <link rel="canonical" href="https://centipedestreatmentkapolei.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Kapolei Centipede Control Pros",
            "image": "/4.jpeg",
            "@id": "https://centipedestreatmentkapolei.vercel.app/",
            "url": "https://centipedestreatmentkapolei.vercel.app/",
            "telephone": "(323) 880-1224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kapolei, HI",
              "addressLocality": "Kapolei",
              "addressRegion": "HI",
              "postalCode": "96707",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "21.3358",
              "longitude": "-158.0792"
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
            "serviceType": "Centipede Treatment and Control",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Kapolei Centipede Control Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Kapolei, HI"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Centipede Control Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Centipede Nest Removal" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior Perimeter Treatment" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Centipede Control" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Preventative Pest Barrier" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="centipedes treatment kapolei (323) 880-1224 | Kapolei Centipede Control Pros" />
        <meta property="og:description" content="Expert centipede treatment in Kapolei, HI. Professional Hawaii pest control solutions. Call (323) 880-1224!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://centipedestreatmentkapolei.vercel.app/" />
        <meta property="og:image" content="/4.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              CENTIPEDE TREATMENT <br />
              <span className="text-white drop-shadow-sm uppercase text-nowrap">IN KAPOLEI Hawaii</span>
            </>
          }
          subtitle="Kapolei's premier specialists in Hawaii centipede control and eradication. We use advanced, safe, and effective methods to protect your home from invasive centipede populations. Our localized treatments target nesting sites and create a lasting defensive barrier."
          image="/4.jpeg"
          overlayImage="/2.jpeg"
          badge="KAPOLEI CENTIPEDE EXPERTS"
          phone="3238801224"
          features={[
            { icon: Search, text: "Nest Identification" },
            { icon: Target, text: "Precision Targeting" },
            { icon: ShieldCheck, text: "24/7 Home Barrier" }
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
              <a href="https://centipederepellenthawaii.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Centipede repellent Hawaii</a>
              <a href="https://rodentcontrolcorvallisoregon.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Rodent control Corvallis Oregon</a>
              <a href="https://earwigexterminatordenver.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Earwig exterminator Denver</a>
              <a href="https://pestcontrolsouthpointohio.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Pest control South Point Ohio</a>
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
