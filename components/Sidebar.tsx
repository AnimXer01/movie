import {
  FaHouse,
  FaClapperboard,
  FaDisplay,
  FaCircleInfo,
  FaGear,
} from "react-icons/fa6";
import { IoLogoOctocat } from "react-icons/io";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import SideBarIcon from "./SideBarIcon";
import Link from "next/link";
const SideBar = () => {
  return (
    <div
      className="sm:fixed sm:top-32 sm:gap-5 sm:left-2 sm:h-screen sm:w-16 flex sm:flex-col
                   shadow-lg fixed flex-row bottom-2 w-screen h-16 left-0 z-20 justify-center sm:justify-normal bg-slate-700/80 rounded-3xl pt-1 sm:bg-transparent"
    >
  
    
  
        <SideBarIcon icon={<FaClapperboard size="16" />} text="Movies" link={'/movie'} />
  
    
        <SideBarIcon icon={<FaDisplay size="16" />} text="Tv Series" link={'/tv'} />
        <SideBarIcon icon={<IoLogoOctocat size="16" />} text="Anime" link={'/anime'} />


        <SideBarIcon icon={<FaCircleInfo size="16"/>} text="Info" link={'/info'}/>
        
      
      
      <ThemeSwitcher />
    </div>
  );
};

export default SideBar;
