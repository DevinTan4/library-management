const Feature = () => {
  return (
    <div className="flex mb-[75px] justify-between">
      <div className="font-light text-[15px] text-[#22608E] hover:underline cursor-pointer">
        Forgot Your Password?
      </div>
      <div className="flex align-middle">
        <input
          type="checkbox"
          className="mr-[5px] cursor-pointer"
          id="remember-me"
        />
        <label
          className="font-light text-[15px] cursor-default"
          htmlFor="remember-me"
        >
          Remember me
        </label>
      </div>
    </div>
  );
};

export default Feature;
