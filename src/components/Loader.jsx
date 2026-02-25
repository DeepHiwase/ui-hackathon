import img3 from "../assets/cfmachine2frontside.jpeg";

export const Loader = () => {
  return (
    <section className="container mx-auto">
      <div className="min-h-screen w-full flex flex-col gap-y-2 items-center justify-center">
        <img src={img3} alt="Loader Image" className="h-100 object-fill" />
        <h2 className="font-mono text-3xl inline-block mr-2">
          Continental Coffee
        </h2>
        <div className="w-full flex items-center justify-center gap-2">
          <div className="animate-pulse bg-amber-900 size-4 inline-block rounded-full" />
          <div className="animate-pulse bg-amber-900 size-4 inline-block rounded-full" />
          <div className="animate-pulse bg-amber-900 size-4 inline-block rounded-full" />
        </div>
      </div>
    </section>
  );
};
