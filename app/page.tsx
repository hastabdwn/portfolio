import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import ContactFooter from "./components/ContactFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-hidden">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6">
        <Hero />
        <About />
        <FeaturedProjects />
        <ContactFooter />
      </main>
    </div>
  );
}
