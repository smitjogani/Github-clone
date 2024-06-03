import Repos from "../Components/Repos"
import Search from "../Components/Search"
import SortRepo from "../Components/SortRepo"
import ProfileInfo from "../Components/ProfileInfo"
import { useEffect, useState } from "react"

const Home = () => {

  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, swetSortType] = useState("forks");

  useEffect(() => {
    
  },[])

  return (
    <div className="m-4">
      <Search/>
      <SortRepo/>

      <div className="flex gap-4 flex-col lg:flex-row justify-center">
        <ProfileInfo className='sticky'/>
        <Repos/>
      </div>
    </div>
  )
}

export default Home