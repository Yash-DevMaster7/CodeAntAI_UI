import { useNavigate } from "react-router-dom";

function Authbutton({ icon, authType }: any) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/dashboard");
      }}
      className="border border-gray-300 rounded-lg w-4/5 md:w-3/5 h-12 flex justify-center items-center hover:bg-gray-50"
    >
      <img className="" src={icon} alt="Icon" />
      <h6 className="ml-3 font-semibold">Sign in with {authType}</h6>
    </button>
  );
}

export default Authbutton;
