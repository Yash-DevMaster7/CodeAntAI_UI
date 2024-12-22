import { db } from "../lib";

interface Repo_list_cardsProps {
  repoName: string;
  repoType: string;
  repoLanguage: string;
  repoSize: string;
  repoDateUpdated: string;
}

const Repo_list_cards: React.FC<Repo_list_cardsProps> = ({
  repoName,
  repoType,
  repoSize,
  repoDateUpdated,
  repoLanguage,
}) => {
  return (
    <div className="border-t border-gray-200 h-24 md:h-1/6 hover:bg-gray-50">
      <div className="w-full md:w-3/6 lg:w-96 h-full ">
        <div className="w-64 h-2/5 lg:h-1/2 flex justify-start mt-2 md:mt-1 ">
          <h1 className="flex flex-col justify-center font-medium text-base pr-2 ml-4 hover:underline cursor-pointer">
            {repoName}
          </h1>
          <button className="rounded-3xl h-2/5 md:h-1/2 mt-3 text-xs px-2 bg-blue-50 text-blue-600 border border-blue-600">
            {repoType}
          </button>
        </div>
        <div className="h-1/3 pl-4 flex justify-start items-center text-sm">
          <div className="mr-2 flex justify-start items-center">
            {repoLanguage}{" "}
            <span className="bg-blue-600 text-blue-600 rounded-full w-1.5 h-1.5 ml-2">
              .
            </span>
          </div>
          <div className="flex justify-around items-center w-20 mx-3">
            <img src={db} alt="Size" className="w-3 h-3" />
            {repoSize}
          </div>
          <div className="w-36 text-center text-gray-800">
            {repoDateUpdated}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repo_list_cards;
