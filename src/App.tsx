import { ToastContainer } from "react-toastify";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TiltedScroll from "./components/TiltedScroll";
import { WaveBackground } from "./components/WaveBackground";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white relative">
      <ToastContainer />
      <Navbar />
      <WaveBackground />
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <About />
        <TiltedScroll />
      </div>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
