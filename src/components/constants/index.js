import { CiCircleCheck, CiCalendar, CiClock2, CiSettings } from "react-icons/ci";
import { MdOutlineHome } from "react-icons/md";
export const sidebarItems = [
{ name: "Dashboard", icon: MdOutlineHome, route: "/" },
  { name: "Tasks", icon: CiCircleCheck, route: "/tasks" },
  { name: "Habits", icon: CiCalendar, route: "/habits" },
  { name: "Pomodoro", icon: CiClock2, route: "/pomodoro" },
  { name: "Settings", icon: CiSettings, route: "/settings" },
];
