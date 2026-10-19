import { logo } from "@/assets";
import Image from "next/image";
import { format } from "date-fns";


const Header = () => {
    return (
        <div className="flex flex-col items-center my-10 space-y-3" >
            <Image src={logo} alt='Dragon news logo' className=""/>

            <p className="text-slate-500 text-lg ">Journalism Without Fear or Favour</p>


           <p className="">
            {format(new Date(), "EEEE, MMMM dd, yyyy")}
           </p>


        </div>
    );
};

export default Header;