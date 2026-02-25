export const CallToAction = () => {
  return (
    <section id="call-to-action" className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">
          Brew Barista-Quality Coffee at Home ☕
        </h2>

        <p className="text-lg mb-6 text-amber-100">
          Experience rich aroma, perfect crema, and café-level taste — all in
          under 60 seconds.
        </p>

        <div className="mb-6">
          <span className="text-3xl font-bold">₹6,999</span>
          <span className="ml-3 line-through text-amber-200">₹8,999</span>
          <span className="ml-3 bg-white text-amber-900 px-3 py-1 rounded-full text-sm font-semibold">
            22% OFF
          </span>
        </div>

        <a
          href="#buy"
          className="inline-block bg-white text-amber-900 font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 hover:bg-amber-100 transition-all duration-300"
        >
          Buy Now
        </a>

        <p className="mt-4 text-sm text-amber-200">
          Free Shipping | 30-Day Money Back Guarantee
        </p>
      </div>
    </section>
  );
};
