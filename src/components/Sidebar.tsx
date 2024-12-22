import { useNavigate } from "react-router-dom";
import { book, cloud, code, gear, home, Logo, phone, signout } from "../lib";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="border-r w-64 h-full lg:flex flex-col justify-between bg-white hidden">
      <div className="w-full h-3/5 flex flex-col">
        <div className="h-1/3 flex flex-col justify-evenly">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="Logo" className="w-7 h-7" />
            <span className="text-2xl font-normal ml-2">CodeAnt AI</span>
          </div>
          <div className="border flex items-center justify-center rounded-md h-9 mx-12">
            <select
              name="Doropdown"
              className="px-2 h-8 font-normal text-gray-900 outline-none"
              id="Dropdown"
            >
              <option value="name" className="text-md font-medium">
                User's Name
              </option>
            </select>
          </div>
        </div>
        <div className="h-2/3 flex flex-col justify-evenly">
          <div className="h-10 border bg-blue-600 mx-8 rounded-md flex items-center cursor-pointer hover:bg-blue-700">
            <img src={home} alt="Home" className="w-4 h-4 mx-2" />{" "}
            <span className="text-white font-semibold">Repositories</span>
          </div>
          <div className="h-10 mx-8 rounded-md flex items-center cursor-pointer">
            <img src={code} alt="Home" className="w-5 h-4 mx-2" />
            <span className="font-medium text-gray-900">AI Code Review</span>
          </div>
          <div className="h-10 mx-8 rounded-md flex items-center cursor-pointer">
            <img src={cloud} alt="Home" className="w-5 h-4 mx-2" />
            <span className="font-medium text-gray-900">Cloud Security</span>
          </div>
          <div className="h-10 mx-8 rounded-md flex items-center cursor-pointer">
            <img src={book} alt="Home" className="w-4 h-4 mx-2" />
            <span className="font-medium text-gray-900">How to Use</span>
          </div>
          <div className="h-10 mx-8 rounded-md flex items-center cursor-pointer">
            <img src={gear} alt="Home" className="w-4 h-4 mx-2" />
            <span className="font-medium text-gray-900">Settings</span>
          </div>
        </div>
      </div>
      <div className="w-full h-1/6 flex flex-col justify-evenly">
        <div className="font-medium text-gray-900 ml-4 cursor-pointer">
          <img src={phone} alt="Phone" className="w-4 h-4 inline mr-3" />
          Support
        </div>
        <div
          className="font-medium text-gray-900 ml-4 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={signout} alt="Phone" className="w-4 h-4 inline mr-3" />
          Logout
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
