import { IoEyeOutline, IoPersonOutline } from "react-icons/io5";
import { bannerImg } from "../../assets/images";
import { SlLock } from "react-icons/sl";
import { useEffect, useRef, useState } from "react";

const LoginV2 = () => {
  const [emailInputSize, setEmailInputSize] = useState(27);
  const [passwordInputSize, setPasswordInputSize] = useState(25);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth === 425) {
        setEmailInputSize(31);
        setPasswordInputSize(29);
      } else if (screenWidth >= 1024 && screenWidth < 1280) {
        setEmailInputSize(53);
        setPasswordInputSize(50);
      } else if (screenWidth >= 1280 && screenWidth < 1536) {
        setEmailInputSize(18);
        setPasswordInputSize(15);
      } else if (screenWidth >= 1536 && screenWidth < 1920) {
        setEmailInputSize(30);
        setPasswordInputSize(26);
      } else if (screenWidth >= 1920) {
        setEmailInputSize(47);
        setPasswordInputSize(44);
      } else {
        setEmailInputSize(27);
        setPasswordInputSize(25);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="h-dvh overflow-x-hidden xl:flex">
      {/* Banner */}
      <div className="xl:w-1/2">
        <img
          src={bannerImg}
          alt="Banner Image"
          className="w-full h-[422px] object-cover object-left lg:h-[683px] xl:h-full"
        />
      </div>

      {/* Login Form */}
      <div className="bg-[#003161] w-full h-[422px] px-[30px] py-10 text-white lg:h-[683px] lg:px-[171px] lg:py-16 flex flex-col lg:gap-[50px] xl:w-1/2 xl:h-full xl:py-[200px] xl:justify-center">
        {/* Title */}
        <div className="mb-10 lg:flex lg:flex-col lg:gap-7 xl:gap-2 2xl:gap-4">
          <h1 className="font-bold text-3xl lg:text-[64px] xl:text-5xl 2xl:text-[64px]">
            Welcome Back!
          </h1>
          <p className="font-light text-[15px] lg:text-xl">
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        {/* Form */}
        <form action="" className="flex flex-col gap-5 mb-[23px]">
          {/* Email / Username */}
          <div className="border-b flex flex-1 gap-4 leading-9 items-center pl-[7px] lg:h-[58px] lg:py-2">
            <span className="w-[18px]">
              <IoPersonOutline className="lg:size-[25px]" />
            </span>

            <input
              type="email"
              placeholder="Email / Username"
              size={emailInputSize}
              className="placeholder:text-white bg-transparent outline-none placeholder:opacity-50 placeholder:font-light placeholder:text-[15px] lg:text-xl lg:placeholder:text-xl lg:placeholder:font-light"
            />
          </div>

          {/* Password */}
          <div className="border-b flex gap-4 leading-9 items-center pl-[7px] lg:h-[58px] lg:py-2">
            <div>
              <span className="w-[18px]">
                <SlLock className="lg:size-[25px]" />
              </span>
            </div>

            <div className="flex items-center w-full justify-between">
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  size={passwordInputSize}
                  className="placeholder:text-white bg-transparent outline-none placeholder:opacity-50 placeholder:font-light placeholder:text-[15px] lg:text-xl lg:placeholder:text-xl lg:placeholder:font-light"
                />
              </div>

              <div>
                <span className="w-[18px]">
                  <IoEyeOutline className="lg:size-7" />
                </span>
              </div>
            </div>
          </div>

          {/* Forgot your password and remember me */}
          <div className="flex justify-between items-center mb-[54px] lg:m-0">
            <div className="font-light text-xs text-[#22608E] hover:underline cursor-pointer lg:text-[18px]">
              Forgot Your Password?
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-[5px] cursor-pointer lg:size-[19px]"
                id="remember-me"
              />
              <label
                className="font-light text-[15px] cursor-default lg:text-[18px]"
                htmlFor="remember-me"
              >
                Remember me
              </label>
            </div>
          </div>
        </form>

        {/* Login Button */}
        <div className="flex justify-center">
          <button className="w-[100px] h-[35px] border border-white rounded-2xl font-semibold text-[15px] cursor-pointer hover:bg-[#E95B0A] hover:border-none active:bg-white active:text-[#E95B0A] hover:transition hover:duration-[400ms] active:transition-none lg:w-[200px] lg:h-[60px] lg:rounded-full lg:text-2xl lg:font-semibold">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginV2;
