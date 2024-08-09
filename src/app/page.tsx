import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroBanner from "@/components/hero-banner";
import Results from "@/components/results";
import Services from "@/components/services";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <Results />
      <Services />
      <Footer />
    </main>
  );
}
