
const ServicesSection = () => (
  <section id="services" className="py-20 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Custom Metal Forming</h3>
          <p>Precision and efficiency for your custom needs.</p>
        </div>
        <div className="bg-white shadow-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Consulting Services</h3>
          <p>Expert advice to optimize your processes.</p>
        </div>
        <div className="bg-white shadow-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Production Lines</h3>
          <p>High-performance production lines tailored for you.</p>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
