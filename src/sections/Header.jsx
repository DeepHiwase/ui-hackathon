import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import { Hero } from "../components/Hero";
import { NavBar } from "../components/NavBar";

export const Header = () => {
  return (
    <>
      <NavBar />
      <div className="flex">
        <aside
          className="group 
               h-[calc(100vh-60px)] 
               w-[60px] hover:w-[250px] 
               bg-[#C9B59C] shadow-md 
               transition-all duration-300 ease-in-out"
        >
          <div className="flex flex-col gap-8 p-4 font-serif text-lg">
            <div className="flex items-center gap-4 cursor-pointer hover:text-[#6E5034]">
              <MdOutlineFeaturedPlayList size={24} />
              <span className="hidden group-hover:inline">
                <a href="#features">Features</a>
              </span>
            </div>

            <div className="flex items-center gap-4 cursor-pointer hover:text-[#6E5034]">
              <GrGallery size={24} />
              <span className="hidden group-hover:inline">
                <a href="#gallery">Gallery</a>
              </span>
            </div>

            <div className="flex items-center gap-4 cursor-pointer hover:text-[#6E5034]">
              <IoIosCall size={24} />
              <span className="hidden group-hover:inline">
                <a href="#call-to-action">Buy now</a>
              </span>
            </div>
          </div>
        </aside>

        <Hero />
      </div>
    </>
  );
};
