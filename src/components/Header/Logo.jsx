import { logo } from "../../images";
function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <a href="#" className="flex items-center space-x-2">
        <img
          src={logo}
          alt="logo"
          className="w-[4em] h-[4em] bg-white rounded-full m-1"
        />
        <span className="text-2xl font-bold text-gray-800 dark:text-white font-Pixelify tracking-widest">
          NICO.ME
        </span>
      </a>
    </div>
  );
}

export default Logo;
