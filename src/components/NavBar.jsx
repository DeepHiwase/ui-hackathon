import { MdCoffeeMaker } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-[#6E5034] text-white font-serif shadow-md">
        <div className="max-w-7xl mx-auto h-[60px] flex items-center px-6">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <MdCoffeeMaker />
            <span>Comfy Co</span>
          </div>

          <ul className="hidden md:flex text-xxl ml-auto">
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
    </>
  );
};
