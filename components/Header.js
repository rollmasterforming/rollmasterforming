
import Link from 'next/link';

const Header = () => (
  <header className="bg-gray-800 text-white p-4 fixed w-full z-10">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">RollMaster Roll Forming</h1>
      <nav className="flex space-x-4">
        <Link href="#hero" className="hover:underline">Home</Link>
        <Link href="#about" className="hover:underline">About</Link>
        <Link href="#services" className="hover:underline">Services</Link>
        <Link href="#contact" className="hover:underline">Contact</Link>
      </nav>
    </div>
  </header>
);

export default Header;
