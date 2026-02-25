import { useState } from "react";
import { MdCoffeeMaker } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import { Hero } from "../components/Hero";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-[#6E5034] text-white font-serif shadow-md">
        <div className="max-w-7xl mx-auto h-[60px] flex items-center px-6">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <MdCoffeeMaker />
            <span>Comfy Co</span>
          </div>

          <ul className="hidden md:flex text-lg ml-auto">
            <li className="cursor-pointer hover:text-yellow-300 transition">
              Home
            </li>
          </ul>

          <div className="ml-auto md:hidden text-3xl cursor-pointer">
            {isOpen ? (
              <HiX onClick={() => setIsOpen(false)} />
            ) : (
              <HiMenu onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-[#6E5034] border-t border-[#8B6B4A]">
            <ul className="flex flex-col px-6 py-4 text-lg">
              <li className="cursor-pointer hover:text-yellow-300 transition">
                Home
              </li>
            </ul>
          </div>
        )}
      </nav>
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
              <span className="hidden group-hover:inline">Features</span>
            </div>

            <div className="flex items-center gap-4 cursor-pointer hover:text-[#6E5034]">
              <GrGallery size={24} />
              <span className="hidden group-hover:inline">Gallery</span>
            </div>

            <div className="flex items-center gap-4 cursor-pointer hover:text-[#6E5034]">
              <IoIosCall size={24} />
              <span className="hidden group-hover:inline">Call To Action</span>
            </div>
          </div>
        </aside>

        <Hero />
      </div>
    </>
  );
};
