import { FaHeart } from "react-icons/fa";

const Likes = () => {
  return (
    <div className="relative overflow-x-auto px-4 flex justify-center">
      <table
        className="text-sm text-left rounded-lg rtl:text-right overflow-hidden backdrop-filter backdrop-blur-md bg-opacity-10 
		bg-gray-600/20 border-b border-white text-white"
      >
        <thead className="text-xs uppercase bg-glass border-b ">
          <tr>
            <th className="p-4" scope="col">
              <div className="flex items-center">No</div>
            </th>
            <th className="px-6 py-3" scope="col">
              Username
            </th>
            <th className="px-6 py-3" scope="col">
              Date
            </th>
            <th className="px-6 py-3" scope="col">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            className="cursor-pointer bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		bg-gray-600/30 hover:bg-gray-600/20  border-t border-gray-800 text-white"
          >
            <td className="w-4 p-4">
              <div className="flex items-center">
                <span>1</span>
              </div>
            </td>
            <th
              scope="row"
              className="flex items-center px-6 py-4 whitespace-nowrap "
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://img.freepik.com/free-photo/portrait-boy-with-backpack-3d-rendering_1142-38959.jpg?t=st=1717223240~exp=1717226840~hmac=e154105e10f9390404f8026329c0140754fd78bb9aac8bbf087ffeebec983572&w=740"
                alt="User Avatar"
              />
              <div className="ps-3">
                <div className="text-base font-semibold">Smit00</div>
              </div>
            </th>
            <td className="px-6 py-2">01-05-2024</td>
            <td className="px-6 py-2">
              <div className="flex items-center">
                <FaHeart size={20} className="text-red-500 mx-2" />
                Liked your profile
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Likes;
