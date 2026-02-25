import img from "../assets/landing-page-coofee-machine.png";

export const Hero = () => {
  return (
    <>
      <main className="flex-1 p-8 bg-[#ECE7D1] min-h-[calc(100vh-60px)] ">
        <div className="max-w-[500px]">
          <h1 className="text-5xl font-bold mb-4 mt-10 font-display">
            “Because every great day begins with great coffee.” ☕
          </h1>

          <p className="text-gray-600 max-w-xl font-Georgia text- xl font-serif">
            Discover machines that turn simple mornings into unforgettable
            rituals.Precision engineering meets timeless design — made for true
            coffee enthusiasts.
          </p>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </main>
    </>
  );
};
