import Footer from "@/components/footer";
import Header from "@/components/header/page";
import HeroBanner from "@/components/hero-banner";
import Partners from "@/components/partners";
import Results from "@/components/results";
import Services from "@/components/services";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <Results />
      <Services />
      <Partners />
      <Footer />
    </main>
  );
}
