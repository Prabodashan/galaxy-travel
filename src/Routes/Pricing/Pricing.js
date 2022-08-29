import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import PricingCard from "../../Components/PricingCard/PricingCard";
import HeroImage from "../../Components/HeroImage/HeroImage";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="PRICING." text="Choose your trip." />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Pricing;
