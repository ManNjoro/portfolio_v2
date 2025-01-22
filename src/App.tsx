import { Button, Grid, HStack } from "@chakra-ui/react";
import TiltedScroll from "./components/TiltedScroll";
import Navbar from "./components/Navbar";
import { WaveBackground } from "./components/WaveBackground";
import About from "./components/About";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white relative">
      <Navbar />
      <WaveBackground />
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <About />
        <TiltedScroll />
      </div>
    </div>
  );
}

export default App;
