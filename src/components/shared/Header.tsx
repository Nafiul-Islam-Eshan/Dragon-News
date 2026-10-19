import { logo } from "@/assets";
import Image from "next/image";


const Header = () => {
    return (
        <div className="flex flex-col items-center my-10" >
            <Image src={logo} alt='Dragon news logo' className="mb-5"/>

            <p className="text-slate-500 text-lg mb-2.5">Journalism Without Fear or Favour</p>


            <p className="font-medium text-xl">Sunday ,
                <span className="text-slate-500"> November 27, 2025</span>
            </p>


        </div>
    );
};

export default Header;