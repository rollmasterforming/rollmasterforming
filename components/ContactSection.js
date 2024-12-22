
const ContactSection = () => (
  <section id="contact" className="py-20 bg-blue-500 text-white">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="mb-6">Have questions? Reach out to us for more information.</p>
      <form className="max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="w-full mb-4 p-2 rounded" />
        <input type="email" placeholder="Your Email" className="w-full mb-4 p-2 rounded" />
        <textarea placeholder="Your Message" className="w-full mb-4 p-2 rounded" rows="4"></textarea>
        <button type="submit" className="bg-white text-blue-500 px-6 py-2 rounded">Submit</button>
      </form>
    </div>
  </section>
);

export default ContactSection;
