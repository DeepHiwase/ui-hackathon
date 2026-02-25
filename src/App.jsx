import { useEffect, useState } from "react";
import { Loader } from "./components/Loader";
import { CallToAction } from "./sections/Call-To-Action";
import { Features } from "./sections/Features";
import { Gallery } from "./sections/Gallery";
import { Header } from "./sections/Header";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="scroll-smooth">
      <Header />
      <Features />
      <Gallery />
      <CallToAction />
    </div>
  );
}

export default App;
