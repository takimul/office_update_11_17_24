"use client";
import AboutUsSection from "@/Components/HomePageComponents/AboutUsSection";
import HeroSection from "@/Components/HomePageComponents/HeroSection";
import OurServices from "@/Components/HomePageComponents/OurServices";
import PortfolioSection from "@/Components/HomePageComponents/PortfolioSection";
import PricingSection from "@/Components/HomePageComponents/PricingSection";
import TestimonialSection from "@/Components/HomePageComponents/TestimonialSection";
import TouchSection from "@/Components/HomePageComponents/TouchSection";
import Trysection from "@/Components/HomePageComponents/Trysection";
import MainLayout from "@/Layout/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection></HeroSection>
      <OurServices></OurServices>
      <PortfolioSection></PortfolioSection>
      {/* <Trysection></Trysection> */}
      <PricingSection></PricingSection>
      <AboutUsSection></AboutUsSection>
      <TestimonialSection></TestimonialSection>
      <TouchSection></TouchSection>
    </MainLayout>
  );
};

export default HomePage;
