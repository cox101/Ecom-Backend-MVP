import React from "react";

import Footer from "../components/Footer";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
