
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSchool from "../components/AboutSchool";
import OwnerSection from "../components/OwnerSection";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSchool />
      <OwnerSection />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
