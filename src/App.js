import Hero from "./components/Hero";
import Second from "./components/parts/Second";
import Listings from "./components/Listings-card";
import Third from "./components/parts/Third";
import Slider from "./components/parts/Slider";
import Fourth from "./components/parts/Fourth";
import Fifth from "./components/parts/Fifth";
import Sixth from "./components/parts/Sixth";
import FAQs from "./components/parts/FAQs";
import { Box } from "@mui/material";
function App() {
  return (
    <>
      <Box>
        <Hero />
        <Second />
        <Listings />
        <Third />
        <Slider />
        <Fourth />
        <Fifth />
        <Sixth />
        <FAQs />
      </Box>
    </>
  );
}

export default App;
