import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

function MenuToggle({ toggleDarkMode, isDarkMode, language, toggleLanguage }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative flex items-center">
        <input
          type="checkbox"
          name="color-scheme"
          id="darkmode-toggle"
          onChange={toggleDarkMode}
          checked={isDarkMode}
          className="hidden"
        />
        <label
          htmlFor="darkmode-toggle"
          className="cursor-pointer flex items-center space-x-1 text-gray-600 dark:text-gray-300 "
        >
          <span className="bg-white rounded-full m-2 p-1 ">
            {isDarkMode ? (
              <FaMoon className="text-blue-500 hover:text-blue-700" />
            ) : (
              <FaSun className="text-yellow-500 hover:text-yellow-700" />
            )}
          </span>
        </label>
      </div>

      <div className="relative flex items-center">
        <button
          onClick={toggleLanguage}
          className="bg-white dark:bg-gray-700 font-Pixelify px-4 py-1 rounded-full shadow-md text-gray-600 dark:text-gray-300 hover:border-2"
        >
          {language}
        </button>
      </div>
    </div>
  );
}

export default MenuToggle;
