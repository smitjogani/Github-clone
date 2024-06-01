const Explore = () => {
  return (
    <div className="px-4 flex justify-center">
      <div className="bg-glass mx-auto max-w-2xl px-4 py-2 rounded-md">
        <h1 className="text-xl font-bold text-center">
          Explore Popular Repositories
        </h1>
        <div className="flex flex-wrap gap-2 my-1 justify-center">
          <img
            src="/javascript.svg"
            alt="JavaScript ogo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
          />
          <img
            src="/typescript.svg"
            alt="TypeScript logo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
          />
          <img
            src="/c++.svg"
            alt="C++ logo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
          />
          <img
            src="/python.svg"
            alt="Python logo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
          />
          <img
            src="/java.svg"
            alt="Java logo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
