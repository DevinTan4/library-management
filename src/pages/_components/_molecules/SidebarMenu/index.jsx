import useActivePath from "../../../../hooks/useActivePath";
import Image from "../../_atoms/Image";
import Typography from "../../_atoms/Typography";

const SidebarMenu = ({
  isSidebarOpen,
  className,
  children,
  src,
  alt,
  path,
}) => {
  const isActive = useActivePath(path);

  return (
    <div
      className={`flex gap-5 items-center hover:bg-blue-hover cursor-pointer py-5 active:border-orange active:bg-white transition duration-100 px-[25px] ${
        isSidebarOpen
          ? `px-[15px] lg:justify-normal lg:pl-[50px]`
          : `lg:justify-center`
      }
      ${isActive ? "border-l-[10px] border-orange bg-white pl-[15px]" : ""}
      ${isSidebarOpen && isActive ? "lg:pl-[40px]" : ""}
      } ${className}`}
    >
      <Image src={src} alt={alt} className="size-5 lg:w-6 lg:h-7" />
      <Typography
        variant="span"
        className={`lg:text-xl ${isSidebarOpen ? `block` : `hidden`}`}
      >
        {children}
      </Typography>
    </div>
  );
};

export default SidebarMenu;
