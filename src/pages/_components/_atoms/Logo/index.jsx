const Logo = ({ src, alt, className }) => {
  return (
    <div className="bg-white size-[45px] rounded-full flex justify-center items-center cursor-pointer lg:size-[72px]">
      <img
        src={src}
        alt={alt}
        className={`w-7 h-[42px] lg:w-[45px] lg:h-[68px] ${className}`}
      />
    </div>
  );
};

export default Logo;
