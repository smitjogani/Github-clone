import { useState } from "react";
import toast from "react-hot-toast";
import Repos from "../Components/Repos";
import Spinner from "../Components/Spinner"

const Explore = () => {

  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [selectedLanguae, setSelectedLanguage] = useState('');

  const exploreRepos = async (language) => {
    setLoading(true);
    setRepos([]);
    try {
      const res = await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=25`, {
        headers: {
          authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
        }
      });
      const data = await res.json();
      setRepos(data.items);
      setSelectedLanguage(language);
    } catch (error) {
      toast.error(error.message);
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <div className="px-4 flex justify-center">
      <div className="bg-glass mx-auto max-w-2xl px-4 py-2 rounded-md">
        <h1 className="text-xl font-bold text-center">
          Explore Popular Repositories
        </h1>
        <div className="flex flex-wrap gap-2 my-1 justify-center">
          <img
            src="/html.svg"
            alt="HTML logo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos('html')}
          />
          <img
            src="/css.svg"
            alt="CSS logo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos('css')}
          />
          <img
            src="/javascript.svg"
            alt="JavaScript ogo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos('javascript')}
          />
          <img
            src="/typescript.svg"
            alt="TypeScript logo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos('typescript')}
          />
          <img
            src="/node.svg"
            alt="Nodejs logo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos('node')}
          />
          <img
            src="/c++.svg"
            alt="C++ logo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos('c++')}
          />
          <img
            src="/python.svg"
            alt="Python logo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos('python')}
          />
          <img
            src="/java.svg"
            alt="Java logo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos('java')}
          />
          <img
            src="/swift.svg"
            alt="Swift logo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos('swift')}
          />
        </div>

        {repos.length > 0 && (
          <h2 className='text-lg font-semibold text-center my-4'>
            <span className='bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full'>
              {selectedLanguae.toUpperCase()}{" "}
            </span>
            Repositories
          </h2>
        )}
        {!loading && repos.length > 0 && <Repos repos={repos} alwaysFullWidth />}
        {loading && <Spinner />}
      </div>
    </div >
  );
};

export default Explore;
