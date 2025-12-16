import FAQs from "./sections/FAQs";
import Features from "./sections/features";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <FAQs />
    </main>
  );
};

export default App;
