import { iInput, iSidebar } from "@/interfaces";
import { Download, Gamepad2, Home, LogOut, Settings } from "lucide-react";
import { BsBag, BsQuestionCircle } from "react-icons/bs";
import { FaRegCircle, FaTrademark } from "react-icons/fa6";
import { FcRegisteredTrademark } from "react-icons/fc";
import { GrTransaction } from "react-icons/gr";
import { MdGroups } from "react-icons/md";
import { PiTrademarkRegisteredLight } from "react-icons/pi";

export const loginInput: iInput[] = [
  {
    label: "Email Address",
    placeholder: "user@gmail.com",
    name: "email",
    type: "email",
  },
  {
    label: "Password",
    placeholder: "***********",
    name: "password",
    type: "password",
    otherType: "text",
    bottomAction: "Forgot Password",
  },
];
export const registerInput: iInput[] = [
  {
    label: "Full Name",
    placeholder: "Sam Obi Franklin",
    name: "email",
    type: "email",
  },
  {
    label: "Email Address",
    placeholder: "user@gmail.com",
    name: "email",
    type: "email",
  },
  {
    label: "Password",
    placeholder: "***********",
    name: "password",
    type: "password",
    otherType: "text",
  },
  {
    label: "Confirm Password",
    placeholder: "***********",
    name: "password",
    type: "password",
    otherType: "text",
  },
  {
    label: "Referral Code (Optional)",
    placeholder: "....",
    name: "code",
    type: "text",
  },
];

export const benefitsData: string[] = [
  "Amazing commission up to 50% on every sale.",
  "Earn up to N10,000 on the every Business registration",
  "Earn N5,000 on every referrals.",
  "Earn additional N50,000 on every 25 referrals gained.",
  "Instant withdrawal on all Commission or Bonus.",
];

export const sidebarData: iSidebar[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <Home size={18} />,
  },
  {
    path: "/dashboard/marketplace",
    icon: <BsBag size={18} />,
    name: "Marketplace Portal",
  },
  {
    path: "/dashboard/register",
    name: "Register A business",
    icon: <PiTrademarkRegisteredLight size={18} />,
  },
  {
    path: "/dashboard/withdraw",
    name: "withdraw",
    drop: true,
    icon: <Download size={18} />,
  },
  {
    path: "/dashboard/transactions",
    icon: <GrTransaction size={18} />,
    name: "transactions",
  },
  {
    path: "/dashboard/play",
    icon: <Gamepad2 size={18} />,
    name: "play to win",
  },
  {
    path: "/dashboard/refer",
    icon: <MdGroups size={18} />,
    name: "refer to earn",
  },
  {
    path: "/dashboard/settings",
    icon: <Settings size={18} />,
    name: "account settings",
  },
  {
    path: "/dashboard/support",
    icon: <BsQuestionCircle size={18} />,
    name: "support",
  },
  {
    path: "/dashboard/logout",
    icon: <LogOut size={18} />,
    name: "logout",
  },
];
