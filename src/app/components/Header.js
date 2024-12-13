import Link from 'next/link';
// import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 fixed top-0 left-0 w-full z-10">  
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* <Image src="/logo.png" alt="Logo" width={50} height={50} /> */}
          <h1 className="text-xl font-bold ml-2">My Portfolio</h1>
        </div>
        <nav className="flex space-x-4">
          <Link href="#home" className="hover:text-yellow-500">Home</Link>
          <Link href="#home" className="hover:text-yellow-500">Activities</Link>
          <Link href="#about" className="hover:text-yellow-500">About</Link>
          <Link href="#projects" className="hover:text-yellow-500">Projects</Link>
          <Link href="#contact" className="hover:text-yellow-500">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
