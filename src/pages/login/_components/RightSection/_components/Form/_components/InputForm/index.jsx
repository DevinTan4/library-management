const InputForm = ({ type, placeholder, size, icon, iconRight }) => {
  return (
    <div className="border-b flex flex-1 gap-4 leading-9 items-center pl-[7px]">
      <span className="max-w-[18px]">{icon}</span>

      <input
        type={type}
        placeholder={placeholder}
        size={size}
        className="placeholder:text-white bg-transparent outline-none placeholder:opacity-50 placeholder:font-light placeholder:text-lg text-white"
      />

      <span className="max-w-[18px]">{iconRight}</span>
    </div>
  );
};

export default InputForm;
