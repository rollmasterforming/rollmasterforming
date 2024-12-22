
import Link from 'next/link';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Lotos Forming</h1>
      <nav>
        <Link href="#about"><a className="px-4">About</a></Link>
        <Link href="#contact"><a className="px-4">Contact</a></Link>
      </nav>
    </div>
  </header>
);

export default Header;
