"use client";
import Hero from "./components/hero";
import Project from "./components/project";
import Experience from "./components/experience";
import About from "./components/about";
import Footer from "./components/footer";
import NavbarPortfolio from "./components/navbar";

export default function Home() {
  return (
    <div className=" overflow-x-hidden h-screen">
      <main className="p-4 container flex flex-col mx-auto overflow-y-visible ">
        <NavbarPortfolio />
        <Hero />
        <Project />
        <Experience />
        <About />
        <Footer />
      </main>
    </div>
  );
}
