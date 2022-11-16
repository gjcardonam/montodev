import React from "react";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Portfolio from "../components/Portfolio/Portfolio";
import Skills from "../components/Skills/Skills";

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  return (
    <section>
      <Header />
      <Banner />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </section>
  );
};

export default HomePage;
