import { logoutIcon, logoutWhiteIcon } from "../../../../assets/icons";
import Icon from "../../_atoms/Icon";
import Typography from "../../_atoms/Typography";

const LogoutButton = ({ isSidebarOpen, onMouseDown, onMouseUp, isActive }) => {
  return (
    <div className="w-full px-[30px]">
      <div
        className={`w-[127px] h-10 bg-white rounded-full flex justify-center items-center gap-2 text-orange font-dmSans font-medium text-[15px] hover:opacity-75 transition-all duration-300 active:bg-orange active:text-white cursor-pointer ${
          isSidebarOpen ? `lg:w-full lg:h-[70px]` : `lg:size-[70px]`
        }`}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <Icon
          isActive={isActive}
          src={isActive ? logoutWhiteIcon : logoutIcon}
          alt="Logout Icon"
          className="size-[22px] lg:size-[38px]"
        />
        <Typography
          variant="span"
          className={`lg:text-xl ${isSidebarOpen ? `block` : `hidden`}`}
        >
          Logout
        </Typography>
      </div>
    </div>
  );
};

export default LogoutButton;
