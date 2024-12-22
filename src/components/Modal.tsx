import { useNavigate } from "react-router-dom";
import {
  book,
  cloud,
  code,
  cross,
  gear,
  home2,
  Logo,
  phone,
  signout,
} from "../lib";

const Modal = ({ isOpen, onClose }: any) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  if (!isOpen) return null;

  return (
    <div className="fixed w-full h-full flex flex-col justify-start bg-black bg-opacity-50">
      <div className="bg-white py-5 px-3 w-full">
        <div className="flex items-center justify-between">
          <div className="w-40 flex">
            <img src={Logo} alt="Logo" className="w-7 h-7" />
            <span className="text-xl font-normal ml-2">CodeAnt AI</span>
          </div>
          <div className="mx-1" onClick={onClose}>
            <img src={cross} alt="Phone" className="w-3.5 h-3.5" />
          </div>
        </div>
        <div className="border flex items-center justify-center rounded-md h-9 mt-5">
          <select
            name="Doropdown"
            className="h-8 w-full mx-2 bg-white font-normal text-gray-900 outline-none"
            id="Dropdown"
          >
            <option value="name" className="text-md font-medium">
              User's Name
            </option>
          </select>
        </div>
        <div className="font-medium text-gray-900 ml-3 mt-4 h-8 cursor-pointer">
          <img src={home2} alt="Phone" className="w-4 h-3.5 inline mr-3" />
          Repositories
        </div>
        <div className="font-medium text-gray-900 ml-3 mt-1 h-8 cursor-pointer">
          <img src={code} alt="Phone" className="w-4 h-3.5 inline mr-3" />
          AI Code Review
        </div>
        <div className="font-medium text-gray-900 ml-3 mt-1 h-8 cursor-pointer">
          <img src={cloud} alt="Phone" className="w-4 h-3.5 inline mr-3" />
          Cloud Security
        </div>
        <div className="font-medium text-gray-900 ml-3 mt-1 h-8 cursor-pointer">
          <img src={book} alt="Phone" className="w-3.5 h-3.5 inline mr-3" />
          How to Use
        </div>
        <div className="font-medium text-gray-900 ml-3 mt-1 h-8 cursor-pointer">
          <img src={gear} alt="Phone" className="w-3.5 h-3.5 inline mr-3" />
          Settings
        </div>
        <div className="font-medium text-gray-900 ml-3 mt-1 h-8 cursor-pointer">
          <img src={phone} alt="Phone" className="w-3.5 h-3.5 inline mr-3" />
          Support
        </div>
        <div
          className="font-medium text-gray-900 ml-3 mt-1 h-8 cursor-pointer"
          onClick={handleLogout}
        >
          <img src={signout} alt="Phone" className="w-3.5 h-3.5 inline mr-3" />
          Logout
        </div>
      </div>
    </div>
  );
};

export default Modal;
