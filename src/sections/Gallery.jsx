import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/cfmachine.jpeg";
import img2 from "../assets/cfmachine1backside.jpeg";
import img3 from "../assets/cfmachine2frontside.jpeg";
import img4 from "../assets/cfmachine3sideview.jpeg";
import img5 from "../assets/cfmachine4sideview.jpeg";

export const Gallery = () => {
  return (
    <section id="gallery" className="w-full h-[700px]">
      <Carousel
        autoPlay
        infiniteLoop
        useKeyboardArrows
        showThumbs={false}
        showStatus={false}
        interval={3000}
      >
        {[img1, img2, img3, img4, img5].map((image, index) => (
          <div key={index} className="h-[700px]">
            <img
              src={image}
              alt="Coffee Machine"
              className="w-full h-[700px] object-cover"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};
