import { profileBlueIcon } from "../../../../assets/icons";
import Icon from "../../_atoms/Icon";
import Typography from "../../_atoms/Typography";

const Profile = () => {
  return (
    <div className="flex gap-[17px] items-center">
      <Icon
        src={profileBlueIcon}
        alt="Profile Icon"
        className="cursor-pointer size-5 lg:size-8"
      />
      <Typography
        variant="span"
        className="hidden font-medium text-orange lg:block font-dmSans !text-[22px]"
      >
        Devin Tan
      </Typography>
    </div>
  );
};

export default Profile;
