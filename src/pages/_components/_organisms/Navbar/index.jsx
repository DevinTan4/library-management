import { hamburgerMenuBlueIcon } from "../../../../assets/icons";
import Icon from "../../_atoms/Icon";
import Typography from "../../_atoms/Typography";
import Profile from "../../_molecules/Profile";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <nav
      className={`h-12 bg-white fixed top-0 justify-between w-full z-10 lg:pl-[167px] px-[15px] lg:h-[85px] lg:px-11`}
    >
      <div className="flex items-center justify-between w-full h-full">
        {/* Hamburger menu */}
        <Icon
          src={hamburgerMenuBlueIcon}
          alt="Hamburger Menu Icon"
          className="cursor-pointer size-5 lg:w-6 lg:h-7"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        {/* Title */}
        <Typography
          variant="h4"
          className="font-normal cursor-pointer text-blue font-dmSerif lg:text-[40px]"
        >
          LIBRARY
        </Typography>
        {/* Account profile */}
        <Profile />
      </div>
    </nav>
  );
};

export default Navbar;
