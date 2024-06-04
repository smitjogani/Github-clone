import Repo from "./Repo";

const Repos = ({ repos }) => {
  // console.log("Repos: ", repos);
  return (
    <div className="lg:w-2/3 w-full bg-glass rounded-lg px-8 py-6">
      <ul className="relative border-s border-gray-200">
        {repos.map((repo) => (
          <Repo key={repo.id} repo={repo}/>
        ))}
        {repos.length === 0 &&
          <p className="flex items-center justify-center h-[52vh]">
            No Repos Found
          </p>}
      </ul>
    </div>
  );
};

export default Repos;
