import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 scroll-smooth flex items-center justify-between px-8 text-black ">
      <a className="text-xl font-bold " href="#Home">
        <img src={Logo} alt="Logo" className="h-24 w-auto" />
      </a>

      {/* Menu di tengah */}
      <ul className="flex gap-10 text-xl font-bold font-bebas">
        <li>
          <a
            href="#recomend"
            className="hover:underline cursor-pointer text-black"
          >
            RECOMEND
          </a>
        </li>
        <li>
          <a href="#list" className="hover:underline cursor-pointer text-black">
            SINOPSIS
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="hover:underline cursor-pointer text-black"
          >
            ABOUT
          </a>
        </li>
      </ul>

      <div></div>
    </nav>
  );
};

export default Navbar;
