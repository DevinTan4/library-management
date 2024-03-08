import { Link } from "react-router-dom";
import { banner2Img, banner3Img, bannerImg } from "../../assets/images";
import { IoEyeOutline } from "react-icons/io5";
import { SlLock } from "react-icons/sl";

const LoginPage = () => {
  return (
    <div className="flex text-white font-inter">
      {/* Left side */}
      <div className="w-1/2">
        {/* Banner */}
        <img src={banner3Img} alt="Banner" className="h-full" />
      </div>

      {/* Right side */}
      <div className="w-1/2 bg-[#003161] pt-[79px] px-[63px] pb-[66px] h-screen">
        {/* Header */}
        <header className="mb-[61px]">
          <h2 className="text-[40px] font-bold leading-[48.41px]">
            {" "}
            Welcome Back!
          </h2>
          <p className="text-xl font-light leading-[24.2px]">
            Lorem ipsum dolor sit amet.
          </p>
        </header>
        {/* Form */}
        <form action="">
          {/* Email / Username */}
          <div>
            <span className="ml-[7.04px]">
              <i className="fa-regular fa-user"></i>
            </span>
            <input
              type="email"
              placeholder="Email / Username"
              size="52"
              className="placeholder:text-white bg-transparent outline-none ml-[16.06px] placeholder:opacity-50 placeholder:font-light leading-[21.78px] placeholder:text-lg text-white"
            />
          </div>
          <hr className="mt-2.5 mb-5" />
          {/* Password */}
          <div className="flex align-middle">
            <SlLock className="ml-[7.04px] mt-0.5" />
            <input
              type="password"
              placeholder="Password"
              size="49"
              className="placeholder:text-white bg-transparent outline-none ml-[16.06px] placeholder:opacity-50 placeholder:font-light leading-[21.78px] placeholder:text-lg mr-1 text-white"
            />
            <span className="">
              <IoEyeOutline className="justify-end cursor-pointer size-6" />
            </span>
          </div>
          <hr className="mt-[11px] mb-[26px]" />
          {/* Forgot your password and remember me */}
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
          {/* Login button */}
          <div className="flex justify-center mb-[83px]">
            <Link to="/">
              <button className="w-[190px] h-[43px] border border-white rounded-3xl font-semibold text-xl cursor-pointer hover:bg-[#E95B0A] hover:border-none active:bg-white active:text-[#E95B0A] hover:transition hover:duration-[400ms] active:transition-none">
                Log in
              </button>
            </Link>
          </div>
        </form>
        {/* Footer */}
        <footer>
          <div className="text-center font-light">
            Tidak memiliki akun?{" "}
            <span className="font-bold">
              <Link to="/register">Sign Up</Link>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
