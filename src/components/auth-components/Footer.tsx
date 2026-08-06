import { FaGlobe } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex items-center justify-between bg-white px-12 py-5">
      <p className="text-sm text-gray-500">
        &copy; 2024 APEX Financial
      </p>

      <div className="flex items-center gap-2">
        <FaGlobe className="text-lg text-gray-500" />

        <select className="cursor-pointer border-none bg-transparent text-sm text-gray-500 outline-none">
          <option>ENG</option>
        </select>
      </div>
    </footer>
  );
}

export default Footer;