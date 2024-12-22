import { useState } from "react";
import Modal from "../components/Modal";
import Repo_list_cards from "../components/Repo_list_cards";
import Sidebar from "../components/Sidebar";
import { dummy_repos } from "../DummyData/Dummy_repos";
import { hamburger, Logo, plus, refresh, search } from "../lib";

function Dashboard() {
  const [ismodalopen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-screen h-screen flex justify-between bg-gray-100">
      <Sidebar />
      <div className="w-full bg-white md:m-3 rounded-xl md:border">
        <div className="h-14 lg:hidden flex justify-between">
          <div className="flex items-center justify-center px-3">
            <img src={Logo} alt="Logo" className="w-7 h-7" />
            <span className="text-xl font-normal ml-2">CodeAnt AI</span>
          </div>
          <div className="w-10 pt-4" onClick={handleOpenModal}>
            <img src={hamburger} alt="Hamburger" className="w-5 h-5" />
          </div>
          <Modal isOpen={ismodalopen} onClose={handleCloseModal} />
        </div>
        <div className="w-full h-1/5 md:grid grid-cols-2">
          <div className="w-full pl-4 pt-2">
            <h1 className="text-xl md:text-2xl font-medium ">Repositories</h1>
            <h6 className="text-xs md:text-sm mt-1 text-gray-800">
              33 total repositories
            </h6>
          </div>
          <div className="flex justify-start md:justify-end md:mr-4 items-center h-1/3 md:h-5/6">
            <div
              className="rounded-md flex items-center justify-center border w-1/4 md:w-32 h-3/5 md:h-4/6 mx-4 cursor-pointer hover:bg-gray-100"
              onClick={handleLoading}
            >
              <img src={refresh} alt="Home" className="w-3 h-3 mr-2" />
              <span className="font-normal text-gray-800 text-xs md:text-sm">
                Refresh All
              </span>
            </div>
            <div className="border bg-blue-600 rounded-md flex items-center justify-center w-1/3 md:w-40 h-3/5 md:h-4/6 cursor-pointer hover:bg-blue-700">
              <img src={plus} alt="Home" className="w-3 h-3 mr-2" />{" "}
              <span className="text-white font-normal text-xs md:text-sm">
                Add Repository
              </span>
            </div>
          </div>
          <div
            className={`h-1/4 md:h-5/6 w-full ${
              ismodalopen ? null : "relative"
            }`}
          >
            <img
              src={search}
              alt="Search"
              className={`w-4 h-4 left-7 top-6 transform -translate-y-3 absolute ${
                ismodalopen ? "hidden" : null
              }`}
            />
            <input
              type="text"
              name="searchbar"
              placeholder="Search Repositories"
              className="w-11/12 md:w-3/5 h-9 ml-4 rounded-md border shadow-sm border-gray-300 pl-9 placeholder-gray-800 outline-none placeholder:text-sm md:placeholder:text-base"
            />
          </div>
        </div>
        {loading ? (
          <div className="flex flex-col justify-center items-center h-4/5">
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-gray-200 animate-spin fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="h-4/5 overflow-auto scrollable-div">
            {dummy_repos.map((repo) => {
              return (
                <Repo_list_cards
                  key={repo.repo_id}
                  repoName={repo.repo_name}
                  repoType={repo.repo_type}
                  repoSize={repo.repo_size}
                  repoLanguage={repo.repo_language}
                  repoDateUpdated={repo.repo_date_updated}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
