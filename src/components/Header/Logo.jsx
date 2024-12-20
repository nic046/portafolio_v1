import { logo } from "../../images";
function Logo() {
  return (
    <div className="flex items-center space-x-2 max-h-20">
      <a href="#" className="flex items-center space-x-2">
        <img
          src={logo}
          alt="logo"
          className=" bg-white rounded-full m-1 h-auto max-w-20"
        />
        <span className="text-2xl font-bold text-gray-800 dark:text-white font-Pixelify tracking-widest">
          NICO.ME
        </span>
      </a>
    </div>
  );
}

export default Logo;
