import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";

const Repo = () => {
  return (
    <li className="mb-10 ms-7">
      <span
        className="absolute flex items-center justify-center w-6 h-6 bg-blue-100
    rounded-full -start-3 ring-8 ring-white"
      >
        <FaCodeBranch className="w-5 h-5 text-blue-800" />
      </span>
      <div className="flex gap-2 items-center flex-wrap">
      <a
					// href={repo.html_url}
					target='_blank'
					rel='noreferrer'
					className='flex items-center gap-2 text-lg font-semibold'
				>
					{/* {repo.name} */}Chat-app
				</a>
				<span
					className='bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5
        py-0.5 rounded-full flex items-center gap-1'
				>
					<FaRegStar /> 
          {/* {Repo.stargazers_count} */}12
				</span>
				<span
					className='bg-purple-100 text-purple-800 text-xs font-medium
         px-2.5 py-0.5 rounded-full flex items-center gap-1'
				>
					<FaCodeFork />
           {/* {repo.forks_count} */}11
				</span>
				<span
					// onClick={() => handleCloneClick(repo)}
					className='cursor-pointer bg-green-100 text-green-800 text-xs
        font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1'
				>
					<FaCopy /> Clone
				</span>
      </div>
      <time
				className='block my-1 text-xs font-normal leading-none
     text-gray-400'
			>
				{/* Released on {formattedDate} */}
        1-6-2024
			</time>
			<p className='mb-4 text-base font-normal text-gray-500'>
				{/* {repo.description ? repo.description.slice(0, 500) : "No description provided"} */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas mollitia, autem unde voluptates fuga, ullam necessitatibus ipsa sit error architecto possimus consectetur voluptatibus! Ipsam, ut! Cumque aut alias molestias voluptatibus maxime, blanditiis ad ut!
			</p>
    </li>
  );
};

export default Repo;
