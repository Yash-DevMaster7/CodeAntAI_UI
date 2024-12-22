import {
  azuredevopsIcon,
  bitbucketIcon,
  githubIcon,
  gitlabIcon,
  key,
  Logo,
  subtract,
  vector,
} from "../lib/index";
import Authbutton from "../components/Authbutton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [active, setActive] = useState("saas");
  return (
    <div className="w-screen h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-center items-center">
        <div className="w-full max-w-md h-1/2">
          <div className="bg-white h-1/2 mb-6 rounded-xl shadow-xl">
            <div className="flex items-center border-b h-2/5 px-4">
              <img src={Logo} alt="CodeAnt AI Logo" className="w-6 h-6" />
              <span className="text-lg font-semibold ml-2">
                AI to Detect & Autofix Bad Code
              </span>
            </div>
            <div className="grid grid-cols-3 h-1/2 py-4">
              <div className="text-center">
                <div className="font-bold text-xl">30+</div>
                <div className="text-sm text-gray-600 font-normal">
                  Language Support
                </div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl">10K+</div>
                <div className="text-sm text-gray-600 font-normal">
                  Developers
                </div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl">100K+</div>
                <div className="text-sm text-gray-600 font-normal">
                  Hours Saved
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl h-2/5 shadow-xl border w-1/2 ml-48 -translate-y-10">
            <div className="h-1/2 flex justify-between items-center">
              <div className="ml-6 bg-purple-200 p-3 rounded-full">
                <img src={vector} alt="Vector" className="w-5 h-5" />
              </div>
              <div className="mr-5 p-1">
                <div className="text-blue-900 font-bold">
                  <span className="text-xl">↑</span> 14%
                </div>
                <div className="text-sm">This Week</div>
              </div>
            </div>
            <div className="h-1/2 font-semibold ml-6 leading-4 text-sm">
              Issues Fixed
              <div className="text-2xl font-bold">500K+</div>
            </div>
          </div>
        </div>
        <img
          className="absolute bottom-0 left-0 w-1/6"
          src={subtract}
          alt="Subtract_Img"
          style={{ zIndex: -1 }}
        />
      </div>
      <div className="bg-gray-100 w-full h-full flex flex-col justify-center items-center">
        <div className="border border-gray-300 bg-white w-11/12 md:w-10/12 h-4/5 flex flex-col rounded-md shadow-md">
          <div className="h-2/5 w-full flex flex-col justify-evenly border-b-2 border-gray-300">
            <div className="items-center justify-center flex">
              <img className="h-9 w-9" src={Logo} alt="Logo" />
              <h1 className="text-2xl mx-2 font-light">CodeAnt AI</h1>
            </div>
            <div className="text-center text-xl md:text-3xl font-medium">
              Welcome to CodeAnt AI
            </div>
            <div className="flex justify-evenly h-1/6 md:h-1/4">
              <button
                onClick={() => {
                  setActive("saas");
                }}
                className="w-2/5 bg-blue-600 font-medium text-white rounded-md hover:bg-blue-700"
              >
                SAAS
              </button>
              <button
                onClick={() => {
                  setActive("selfhosted");
                }}
                className="w-2/5 bg-gray-200 rounded-md font-medium text-gray-700 hover:bg-gray-300"
              >
                Self Hosted
              </button>
            </div>
          </div>
          {active === "saas" ? (
            <div className="h-3/5 w-full flex flex-col justify-evenly items-center">
              <Authbutton icon={githubIcon} authType="Github" />
              <Authbutton icon={bitbucketIcon} authType="Bitbucket" />
              <Authbutton icon={azuredevopsIcon} authType="Azure Deveops" />
              <Authbutton icon={gitlabIcon} authType="GitLab" />
            </div>
          ) : (
            <div className="h-1/3 w-full flex flex-col justify-evenly items-center">
              <button
                onClick={() => {
                  navigate("/dashboard");
                }}
                className="border border-gray-300 rounded-lg w-4/5 md:w-3/5 h-12 flex justify-center items-center hover:bg-gray-50"
              >
                <img className="" src={gitlabIcon} alt="Icon" />
                <h6 className="ml-3 font-semibold">Self hosted GitLab</h6>
              </button>
              <Authbutton icon={key} authType="SSO" />
            </div>
          )}
        </div>
        <div className="mt-5 font-normal">
          By signing up you agree to{" "}
          <span className="font-bold hover:border-b border-black">
            Privacy Policy.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
