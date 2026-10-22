import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";


const RightSidebar = () => {
    return (
        <div className='flex flex-col gap-2 items-start'>

            <h2 className="text-lg font-semibold">Login With</h2>

            <Button className="flex gap-2 items-center py-1 justify-center w-full bg-white border border-blue-700 text-blue-700 rounded-sm hover:bg-cyan-100 transition-all duration-300">
                 <FaGoogle/> Login with Google
            </Button>

            <Button className="flex bg-white text-black gap-2 py-1 rounded-sm items-center justify-center w-full border border-gray-900 hover:bg-gray-200 transition-all duration-300"> 
                <FaGithub/> Login with Github
            </Button>

        </div>
    );
};

export default RightSidebar;