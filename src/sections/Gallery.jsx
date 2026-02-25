import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/cfmachine.jpeg";
import img2 from "../assets/cfmachine1backside.jpeg";
import img3 from "../assets/cfmachine2frontside.jpeg";
import img4 from "../assets/cfmachine3sideview.jpeg";
import img5 from "../assets/cfmachine4sideview.jpeg";

export const Gallery = () => {
  return (
    <section className="h-250 flex items-center justify-center max-w-lg container mx-auto">
      <Carousel className="" autoPlay infiniteLoop useKeyboardArrows transitionTime={1.5}>
        <div className="">
          <img
            src={img1}
            alt="Coffee image"
            style={{ width: "400px", height: "300px", objectFit: "cover" }}
          />
          <p>First Look</p>
        </div>
        <div>
          <img
            src={img2}
            alt="Coffee image"
            style={{ width: "400px", height: "300px", objectFit: "cover" }}
          />
          <p>Backside</p>
        </div>
        <div>
          <img
            src={img3}
            alt="Coffee image"
            style={{ width: "400px", height: "300px", objectFit: "cover" }}
          />
          <p>Frontside</p>
        </div>
        <div>
          <img
            src={img4}
            alt="Coffee image"
            style={{ width: "400px", height: "300px", objectFit: "cover" }}
          />
          <p>Sideview</p>
        </div>
        <div>
          <img
            src={img5}
            alt="Coffee image"
            style={{ width: "400px", height: "300px", objectFit: "cover" }}
          />
          <p>Another Sideview</p>
        </div>
      </Carousel>
    </section>
  );
};
