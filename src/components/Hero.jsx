import img from "../assets/cfmachine.jpeg";

export const Hero = () => {
  return (
    <>
      <main className="flex-1 p-8 bg-[#ECE7D1] min-h-[calc(100vh-60px)] flex">
        <div className="max-w-[700px] ">
          <h1 className="text-7xl font-bold mb-4 mt-30 ml-10 font-display">
            “Because every great day begins with great coffee.” ☕
          </h1>

          <p className="text-gray-600 max-w-xl font-Georgia text-xl font-serif ml-10">
            Discover machines that turn simple mornings into unforgettable
            rituals.Precision engineering meets timeless design — made for true
            coffee enthusiasts.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl ml-40 mt-3 w-[600px] h-[600px]">
          <img
            src={img}
            alt="coffee-machine"
            className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
          />
        </div>
      </main>
    </>
  );
};
