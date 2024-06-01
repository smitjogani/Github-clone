import Repo from "./Repo";

const Repos = () => {
  return (
    <div className="lg:w-2/3 w-full bg-glass rounded-lg px-8 py-6">
      <ul className="relative border-s border-gray-200">
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
      </ul>
    </div>
  );
};

export default Repos;
