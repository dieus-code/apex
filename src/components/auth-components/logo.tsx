import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

interface NavbarProps {
  text: string;
  linkText: string;
  linkTo: string;
}

function Navbar({ text, linkText, linkTo }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between bg-white px-12 py-5">
      <img
        src={logo}
        alt="Logo"
        className="h-[45px] w-[45px] object-contain"
      />

      <div className="flex items-center gap-1 text-[15px] text-gray-500">
        <span>{text}</span>

        <Link
          to={linkTo}
          className="font-semibold text-blue-600 hover:underline"
        >
          {linkText}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;