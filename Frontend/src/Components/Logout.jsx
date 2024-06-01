import { MdLogout } from "react-icons/md";

const Logout = () => {
  return (
    <>
      <img src={"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"} className="w-9 h-9 rounded-full border border-gray-800" />
      <div className="flex cursor-pointer items-center p-2 rounded-lg bg-glass mt-auto mb-2">
        <MdLogout size={22}/>
      </div>
    </>
  );
};

export default Logout;
