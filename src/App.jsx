import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./assets/svg/ButtonGradient";
import Services from "./components/Services";
import Roadmap from "./components/Roadmap";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>; */}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {/* <Button className="mt-10" href="#login">
          Something
        </Button> */}
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
