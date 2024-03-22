const Button = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="font-inter text-xl leading-[24.2px] font-semibold text-[#003060] border rounded-3xl border-[#003060] px-[29.5px] py-[10.5px] hover:bg-[#003060] hover:text-white hover:transition hover:duration-300 active:bg-white active:text-[#003060] active:transition-none active:border-none"
      >
        Log in
      </button>
    </div>
  );
};

export default Button;
