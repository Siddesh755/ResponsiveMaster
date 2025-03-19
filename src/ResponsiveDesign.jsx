import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ResponsiveGrid from "./components/ResponsiveGrid";
import Help from "./components/Help";
import About from "./components/About";
import TextCursorComponent from "./components/TextCursorComponent";

export default function ResponsiveDesign() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <TextCursorComponent/>
      <ResponsiveGrid />
      <Help />
      <About/>
    </div>
  );
}
