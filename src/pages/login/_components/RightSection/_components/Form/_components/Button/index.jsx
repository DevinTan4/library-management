const Button = ({ onClick }) => {
  return (
    <div className="flex justify-center mb-[126px]">
      <button
        onClick={onClick}
        className="w-[190px] h-[43px] border border-white rounded-3xl font-semibold text-xl cursor-pointer hover:bg-[#E95B0A] hover:border-none active:bg-white active:text-[#E95B0A] hover:transition hover:duration-[400ms] active:transition-none"
      >
        Log in
      </button>
    </div>
  );
};

export default Button;
