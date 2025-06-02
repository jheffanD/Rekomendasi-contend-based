import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-primary py-4">
      <div className="flex items-center justify-between px-10 flex-wrap">
        <div className="flex items-center space-x-4">
          <img src={Logo} className="h-16s w-16" alt="Logo" />
        </div>
        <p className="text-white text-sm text-center w-full mt-2 md:mt-0 md:w-auto">
          &copy; {new Date().getFullYear()} Movie Recommendation App
        </p>
      </div>
    </footer>
  );
}
