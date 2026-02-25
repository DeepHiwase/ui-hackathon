export const Features = () => {
  const features = [
    {
      icon: "⚡",
      title: "Fast Brewing",
      description: "Enjoy rich, aromatic coffee in under 60 seconds.",
    },
    {
      icon: "🌡️",
      title: "Smart Temperature Control",
      description: "Adjust temperature for the perfect espresso or latte.",
    },
    {
      icon: "☕",
      title: "Multiple Brew Modes",
      description: "Espresso, Cappuccino, Latte, and more at one touch.",
    },
    {
      icon: "🧼",
      title: "Self-Cleaning System",
      description: "Automatic cleaning keeps your machine fresh and hygienic.",
    },
    {
      icon: "📱",
      title: "App Connectivity",
      description: "Control your brew settings directly from your smartphone.",
    },
    {
      icon: "🔇",
      title: "Low Noise Operation",
      description: "Brew peacefully without loud machine sounds.",
    },
  ];

  return (
    <section id="features" className="bg-amber-800 py-20">
      <div className="container mx-auto max-w-2xl h-full flex justify-center items-center">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
