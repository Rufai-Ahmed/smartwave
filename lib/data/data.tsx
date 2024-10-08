import Button from "@/app/__components/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  iDropdown,
  iHeading,
  iInput,
  iProduct,
  iReview,
  iSidebar,
} from "@/interfaces";
import {
  Download,
  Gamepad2,
  Hand,
  Home,
  LogIn,
  LogOut,
  LogOutIcon,
  Settings,
} from "lucide-react";
import { BsBag, BsPerson, BsQuestionCircle } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
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

export const buyInput: iInput[] = [
  {
    label: "Name",
    placeholder: "Mike Chess",
    name: "name",
    type: "text",
  },
  {
    label: "Phone Number",
    placeholder: "08084845119",
    name: "number",
    type: "text",
  },
  {
    label: "Email Address",
    placeholder: "user@gmail.com",
    name: "email",
    type: "email",
  },
  {
    label: "Quantity",
    placeholder: "2",
    name: "quantity",
    type: "number",
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

export const dropData: iDropdown[] = [
  {
    icon: <BsPerson size={18} />,
    label: "My Profile",
  },
  {
    icon: <GrTransaction size={18} />,
    label: "Transactions",
  },
  {
    icon: <LogIn size={18} />,
    label: "Sign in as vendor",
  },
  {
    icon: <LogOutIcon size={18} />,
    label: "Logout",
  },
];

export const headingData: iHeading[] = [
  {
    path: "/dashboard",
    b: "Overview",
    p: "Winners Mike",
    rightComp: (
      <div className="px-4 font-light py-2 bg-gray-200 dark:bg-[#191919] flex items-center gap-3 rounded-md cursor-pointer">
        <Hand size={18} />

        <p className="hidden md:block">Lorem ipsum dolor sit.</p>
      </div>
    ),
  },
  {
    path: "/dashboard/marketplace",
    b: "Marketplace",
    p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    rightComp: (
      <DropdownMenu>
        <div className="md:flex hidden items-center gap-4">
          {Array.from({ length: 2 }).map((el: unknown, i: number) => (
            <DropdownMenuTrigger key={i}>
              <Button className="bg-[#191919] text-[17px] md:text-[17px] md:h-auto py-2 w-full md:w-full px-4 gap-3 2xl:w-full">
                Lorem, ipsum.
                <FaAngleDown size={17} />
              </Button>
            </DropdownMenuTrigger>
          ))}
          <DropdownMenuContent className="w-44 p-2 rounded-[10px] z-20 bg-[#191919]">
            <DropdownMenuGroup>
              <DropdownMenuItem className="flex items-center py-2 px-2 cursor-pointer text-[14px] font-light hover:bg-[#6E18BB]  rounded-[10px] duration-300 gap-3">
                el.iconel.label&quot;
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </div>
      </DropdownMenu>
    ),
  },
  {
    path: `/dashboard/marketplace/0`,
    b: "Product Details",
    p: "All you need to know about the product",
  },
];

export const mainObject: iProduct = {
  img: "/assets/images/diff_winter.jpg",
  name: "Different Winter",
  short: "Unknown Short",
  underShort: "Lorem ipsum dolor sit.",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus dolor, nostrum ratione voluptatum debitis id quibusdam quam esse? Nam provident eaque ad. Ullam recusandae provident fuga fugiat dolores odit expedita deserunt similique facere eveniet magnam labore, debitis sequi placeat, ipsam sapiente architecto eos consequuntur veritatis inventore. Laudantium eum possimus pariatur?",
  price: "N10,000",
  commission: "N1,000",
  star: 4,
};

export const items: any[] = Array(20).fill(mainObject);

export const reviewData: iReview[] = [
  {
    left: "Product Name",
    right: "Different Winter",
  },
  {
    left: "Category",
    right: "Mike Dillan",
  },
  {
    left: "Product Type",
    right: "Book",
  },
  {
    left: "Email",
    right: "user@gmail.com",
  },
  {
    left: "Phone Number",
    right: "07085742642",
  },
];
