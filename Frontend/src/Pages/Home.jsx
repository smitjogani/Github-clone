import Repos from "../Components/Repos"
import Search from "../Components/Search"
import SortRepo from "../Components/SortRepo"
import ProfileInfo from "../Components/ProfileInfo"
import { useCallback, useEffect, useState } from "react"
import Spinner from "../Components/Spinner";
import toast from "react-hot-toast"

const Home = () => {

  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState("recents");


  const getUserProfileAndRepos = useCallback(
    async (username = "smitjogani") => {
      setLoading(true);
      try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`,{
          headers:{
            authorization:`token ${import.meta.env.VITE_GITHUB_API_KEY}`,
          }
        });
        const userProfile = await userResponse.json();
        setUserProfile(userProfile);

        const repoRes = await fetch(userProfile.repos_url);
        const repos = await repoRes.json();

        repos.sort((a,b) => new Date(b.created_at) - new Date(a.created_at));

        setRepos(repos);
        return { userProfile, repos }

      } catch (error) {
        toast.error(error.message);
      }
      finally {
        setLoading(false);
      }
    }, [])

  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos])

  const onSearch = async (e, username) => {
    e.preventDefault();
    setLoading(true);
    setRepos([]);
    setUserProfile(null);

    const { userProfile, repos } = await getUserProfileAndRepos(username);
    setUserProfile(userProfile);
    setRepos(repos);
    setLoading(false);
    setSortType("recent");
  }

  const onSort = (sortType) => {  
    if(sortType === "recent"){
      repos.sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
    }
    else if(sortType === "stars"){
      repos.sort((a,b) => b.stargazers_count - a.stargazers_count);
    }
    else if(sortType === "forks"){
      repos.sort((a,b) => b.forks_count - a.forks_count);
    }
    setSortType(sortType);
    setRepos([...repos])
  }

  return (
    <div className="m-4">
      <Search onSearch={onSearch}/>
      {repos.length > 0 && <SortRepo onSort={onSort} sortType={sortType} />}

      <div className="flex gap-4 flex-col lg:flex-row justify-center">
        {userProfile && !loading && <ProfileInfo className='sticky' userProfile={userProfile} />}
        {!loading && !loading && <Repos repos={repos} />}
        {loading && <Spinner />}
      </div>
    </div>
  )
}

export default Home