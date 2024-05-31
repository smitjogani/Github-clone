import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Explore from "./Pages/Explore";
import Likes from "./Pages/Likes";

import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/likes" element={<Likes />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;