"use client";

import { useEffect } from "react";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import ProblemSection from "../../components/ProblemSection";
import SolutionSection from "../../components/SolutionSection";
import BenefitsSection from "../../components/BenefitsSection";
import FrontierVisionSection from "../../components/FrontierVisionSection";
import AboutSection from "../../components/AboutSection";
import TestimonialSection from "../../components/TestimonialSection";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-background text-foreground">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <FrontierVisionSection />
      <AboutSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
