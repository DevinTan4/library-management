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
        {/* Sidebar menu - Home */}
        <SidebarMenu
          isSidebarOpen={isSidebarOpen}
          src={homeIcon}
          alt="Home Icon"
          className={`
            ${
              location.pathname === "/admin-dashboard"
                ? "border-l-[10px] border-orange bg-white pl-[15px]"
                : ""
            }
            ${isSidebarOpen ? "lg:pl-10" : ""}`}
        >
          Home
        </SidebarMenu>
        {/* Sidebar menu - Buku*/}
        <SidebarMenu
          isSidebarOpen={isSidebarOpen}
          src={book2Icon}
          alt="Book Icon"
        >
          Buku
        </SidebarMenu>
        {/* Sidebar menu - Log penyimpanan */}
        <SidebarMenu
          isSidebarOpen={isSidebarOpen}
          src={logPaperIcon}
          alt="Log Peminjaman Icon"
        >
          Log Peminjaman
        </SidebarMenu>
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
