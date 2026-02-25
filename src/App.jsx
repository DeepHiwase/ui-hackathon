import { CallToAction } from "./sections/Call-To-Action";
import { Features } from "./sections/Features";
import { Gallery } from "./sections/Gallery";
import { Header } from "./sections/Header";

function App() {
  return (
    <div>
      <Header />
      <Features />
      <Gallery />
      <CallToAction />
    </div>
  );
}

export default App;
