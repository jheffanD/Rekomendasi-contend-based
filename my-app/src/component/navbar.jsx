import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8   text-black">
      <a className="text-xl font-bold " href="/">
        <img src={Logo} alt="Logo" className="h-24 w-auto" />
      </a>

      {/* Menu di tengah */}
      <ul className="flex gap-10 text-xl font-bold font-bebas">
        <li className="hover:underline cursor-pointer"> RECOMEND</li>
        <li className="hover:underline cursor-pointer">LIST</li>
        <li className="hover:underline cursor-pointer">ABOUT</li>
      </ul>

      {/* Kosongkan kanan jika tidak perlu tombol */}
      <div></div>
    </nav>
  );
};

export default Navbar;
