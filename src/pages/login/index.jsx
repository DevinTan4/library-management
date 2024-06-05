import { useNavigate } from "react-router-dom";
import { emailIcon, passwordIcon, visibleIcon } from "../../assets/icons";
import { bannerMobileImg } from "../../assets/images";

const LoginPage = () => {
  const navigate = useNavigate();

  // Handle login
  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-full lg:h-[1366px] desktop:w-[1920px] desktop:h-[993px] desktop:flex">
      {/* Banner */}
      <div className="w-full h-1/2 desktop:w-1/2 desktop:h-full">
        <img
          src={bannerMobileImg}
          alt="bannerImg"
          className="object-cover lg:w-full lg:h-full"
        />
      </div>

      {/* Form */}
      <div className="text-white font-inter h-1/2 w-full bg-blue px-[39px] py-[56px] flex flex-col gap-[14px] lg:px-[171px] lg:gap-[90px] lg:justify-center desktop:w-1/2 desktop:h-full">
        {/* Title */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold lg:text-[64px]">Welcome Back</h1>
          <p className="font-light lg:text-xl">Lorem ipsum dolor sit amet.</p>
        </div>

        {/* Form */}
        <div>
          <form action="" className="flex flex-col gap-[14px] lg:gap-[31px]">
            {/* Email */}
            <div className="flex items-center w-full border-b gap-[15px]">
              <img
                src={emailIcon}
                alt="profileIcon"
                className="size-[15px] lg:size-5"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full h-[50px] bg-transparent placeholder:font-light focus:border-none focus:outline-none focus:ring-0 lg:placeholder:text-xl"
              />
            </div>
            {/* Password */}
            <div className="flex items-center w-full border-b gap-[15px]">
              <img
                src={passwordIcon}
                alt="passwordIcon"
                className="size-[15px] lg:size-5"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full h-[50px] bg-transparent placeholder:font-light focus:border-none focus:outline-none focus:ring-0 lg:placeholder:text-xl"
              />
              <img
                src={visibleIcon}
                alt="visibleIcon"
                className="size-[22px] lg:size-8"
              />
            </div>

            {/* Forgot password and remember me */}
            <div className="flex justify-between">
              <p className="font-light text-[13px] text-text-blue lg:text-[18px]">
                Forgot Password?
              </p>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="lg:size-[19px]" />
                <label
                  htmlFor=""
                  className="font-extralight text-[13px] lg:text-[18px]"
                >
                  Remember me
                </label>
              </div>
            </div>

            {/* Login button */}
            <div className="flex justify-center w-full mt-[42px] lg:mt-[59px]">
              <button
                className="bg-transparent border w-[134px] h-[37px] rounded-2xl font-semibold hover:bg-orange hover:border-none duration-500 lg:text-2xl lg:w-[200px] lg:h-[60px] lg:rounded-full"
                onClick={handleLogin}
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
