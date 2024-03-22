const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="font-inter text-lg text-[#26486D] placeholder:text-[#26486D] placeholder:opacity-60 bg-transparent w-full outline-none"
    />
  );
};

export default Input;
