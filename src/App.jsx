import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/NavBar/Navbar";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <div className="bg-white dark:bg-slate-900">
        <Navbar />
        <Hero />
        <Services />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
