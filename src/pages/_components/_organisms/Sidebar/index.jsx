import {
  book2Icon,
  closeSidebarIcon,
  homeIcon,
  logPaperIcon,
} from "../../../../assets/icons";
import { schoolLogoImg } from "../../../../assets/images";
import Image from "../../_atoms/Image";
import Logo from "../../_atoms/Logo";
import LogoutButton from "../../_molecules/LogoutButton";
import SidebarMenu from "../../_molecules/SidebarMenu";

const menuItems = [
  {
    path: "/admin-dashboard",
    src: homeIcon,
    alt: "Home Icon",
    label: "Home",
  },
  {
    path: "/admin-buku",
    src: book2Icon,
    alt: "Book Icon",
    label: "Buku",
  },
  {
    path: "/admin-log-peminjaman",
    src: logPaperIcon,
    alt: "Log Peminjaman Icon",
    label: "Log Peminjaman",
  },
];

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isActive,
  setIsActive,
}) => {
  return (
    <aside
      className={`fixed top-0 left-0 flex flex-col items-center justify-between min-h-screen py-6 overflow-hidden bg-blue transition-all duration-300 z-20 lg:w-[125px] lg:pt-[31px] ${
        isSidebarOpen ? `w-[200px] lg:w-[300px]` : `w-0`
      }`}
    >
      {/* Close button */}
      <Image
        src={closeSidebarIcon}
        alt="Close Sidebar Icon"
        className={`absolute top-4 right-4 size-[10px] cursor-pointer transform transition-transform duration-700 ${
          isSidebarOpen ? `rotate-90` : `opacity-0`
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* School logo */}
      <Logo src={schoolLogoImg} alt="Tarakanita Logo" />

      {/* Sidebar menu */}
      <div className="font-medium font-dmSans text-orange text-[15px] w-full flex flex-col gap-5 lg:gap-[33px]">
        {menuItems.map((item) => (
          <SidebarMenu
            key={item.path}
            isSidebarOpen={isSidebarOpen}
            path={item.path}
            src={item.src}
            alt={item.alt}
          >
            {item.label}
          </SidebarMenu>
        ))}
      </div>
      {/* Logout button */}
      <LogoutButton
        isSidebarOpen={isSidebarOpen}
        isActive={isActive}
        onMouseUp={() => setIsActive(false)}
        onMouseDown={() => setIsActive(true)}
      />
    </aside>
  );
};

export default Sidebar;
