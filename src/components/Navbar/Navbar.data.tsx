import { RiHome4Line, RiAccountPinCircleLine, RiServerLine, RiBriefcase2Line, RiChatPollLine } from "react-icons/ri";
import { GiTechnoHeart, GiSuitcase } from "react-icons/gi";
import { LiaSuitcaseSolid } from "react-icons/lia";

export const dataNavbar = [
  {
    name: "home",
    path: "/",
    icon: <RiHome4Line size="30" />,
  },
  {
    name: "about",
    path: "/about",
    icon: <RiAccountPinCircleLine size="30" />,
  },
  {
    name: "technologies",
    path: "/technologies",
    icon: <GiTechnoHeart size="30" />,
  },
  {
    name: "projects",
    path: "/projects",
    icon: <LiaSuitcaseSolid size="30" />,
  },

];
