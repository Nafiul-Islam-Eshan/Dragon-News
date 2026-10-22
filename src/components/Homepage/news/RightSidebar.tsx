import { FaGithub, FaGoogle } from "react-icons/fa";


const RightSidebar = () => {
    return (
        <div className='flex flex-col gap-2 items-start'>

            <h2 className="text-lg font-semibold">Login With</h2>

            <button className="flex gap-2 items-center py-1 justify-center w-full border border-blue-700 text-blue-700 rounded-sm">
                 <FaGoogle/> Login with Google
            </button>

            <button className="flex gap-2 py-1 rounded-sm items-center justify-center w-full border border-gray-900"> 
                <FaGithub/> Login with Github
            </button>

        </div>
    );
};

export default RightSidebar;