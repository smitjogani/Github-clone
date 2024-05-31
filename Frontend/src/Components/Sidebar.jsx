import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";

const Sidebar = () => {
  const authUser = true;

  return (
    <aside className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen pt-4 overflow-y-auto border-r bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 hover:bg-gray-600/10 border-gray-800 text-white">
      <nav className="h-full flex flex-col items-center gap-2">
        <Link to="/" className="flex justify-center mb-4">
          <img src="/github.svg" alt="LOGO" className="h-8" />
        </Link>

        <Link
          to="/"
          className="flex justify-center transition-colors p-2 duration-200 rounded-lg hover:bg-gray-800"
        >
          <IoHomeSharp size={20} />
        </Link>

        {authUser && (
          <>
            <Link
              to="/likes"
              className="flex justify-center transition-colors p-2 duration-200 rounded-lg hover:bg-gray-800"
            >
              <FaHeart size={20} />
            </Link>
            <Link
              to="/explore"
              className="flex justify-center transition-colors p-2 duration-200 rounded-lg hover:bg-gray-800"
            >
              <MdOutlineExplore size={25} />
            </Link>
          </>
        )}

        {!authUser && (
          <>
            <Link
              to="/explore"
              className="flex justify-center transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
            >
              <MdEditDocument size={25} />
            </Link>

            <Link
              to="/likes"
              className="flex justify-center transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
            >
              <PiSignInBold size={20} />
            </Link>
          </>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
