import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import FeaturedProducts from "../sections/FeaturedProducts";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;
