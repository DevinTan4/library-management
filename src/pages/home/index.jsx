import { useNavigate } from "react-router-dom";
import {
  facebookIcon,
  filterIcon,
  hamburgerMenuIcon,
  instagramIcon,
  searchIcon,
  twitterIcon,
  youtubeIcon,
} from "../../assets/icons";
import { homeImg, schoolLogoImg } from "../../assets/images";

const HomePage = () => {
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="h-full bg-cream">
      {/* Header */}
      <header>
        {/* Navbar */}
        <nav>
          <div className="w-full h-10 px-[15px] py-[5px] flex items-center justify-between lg:h-[75px]">
            <img
              src={schoolLogoImg}
              alt="Tarakanita Logo"
              className="w-[21px] h-[29px] lg:w-[39px] lg:h-[59px] cursor-pointer"
            />
            <h1 className="font-dmSerif text-[#26486D] text-xl lg:text-[40px] cursor-pointer">
              LIBRARY
            </h1>
            <div>
              <img
                src={hamburgerMenuIcon}
                alt="hamburgerMenu"
                className="lg:hidden"
              />
              <button
                className="hidden text-xl font-semibold border lg:block border-blue w-[118px] h-[45px] text-blue rounded-full hover:bg-blue hover:text-white duration-300"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main>
        {/* Home banner */}
        <img
          src={homeImg}
          alt="Home Image"
          className="h-[559px] object-cover object-center w-full lg:h-[1000px] desktop:h-[771px]"
        />
        {/* Search area */}
        <div className="h-[122px] p-[41px] flex flex-col justify-center items-center lg:h-48 desktop:h-[147px]">
          <div className="flex items-center w-full h-full gap-3 bg-white rounded-full p-[5px] pl-5 lg:w-[612px] lg:h-[65px] lg:pl-[45px] lg:justify-between desktop:w-[743px]">
            {/* Search input */}
            <input
              type="text"
              placeholder="Search any book..."
              className="w-2/3 focus:border-none focus:outline-none focus:ring-0 lg:placeholder:text-lg desktop:text-lg"
            ></input>
            {/* Filter button */}
            <div className="flex w-1/3 gap-1 lg:h-[26px] lg:w-[77px] cursor-pointer">
              <img
                src={filterIcon}
                alt="filterIcon"
                className="lg:size-[26px]"
              />
              <span className="text-[#26486D] font-inter font-normal text-lg desktop:text-lg">
                Filter
              </span>
            </div>
            {/* Search button */}
            <div className="size-[30px] bg-orange rounded-full min-w-[30px] min-h-[30px] flex items-center justify-center lg:w-[114px] lg:h-[45px] lg:py-[10px] lg:gap-1 cursor-pointer hover:bg-[#FF8300] duration-300">
              <img src={searchIcon} alt="Search Icon" />
              <span className="hidden text-lg text-white lg:block desktop:text-lg">
                Search
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-white">
        <div className="w-full h-full bg-blue px-12 py-[82px] flex flex-col items-center">
          <div className="w-full h-full lg:w-[656px] flex flex-col gap-[59px] desktop:flex-row desktop:justify-between desktop:w-full">
            {/* Footer title and description */}
            <div className="flex flex-col items-center w-full gap-8 desktop:items-start desktop:w-2/5">
              <h1 className="text-xl font-bold lg:text-3xl">
                YAYASAN TARAKANITA
              </h1>
              <p className="text-[13px] text-center opacity-60 lg:text-base desktop:text-start">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                eaque impedit temporibus ducimus assumenda veritatis, esse nihil
                tempore praesentium aut! Porro dolorem voluptatum odit aut
                tempora nostrum accusamus, error at deleniti quia saepe
                molestias incidunt explicabo debitis repellat. Repudiandae
                consectetur impedit ratione quisquam eveniet incidunt veritatis
                ea eum, excepturi at.
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center gap-[13px] desktop:w-2/5">
              <h1 className="w-full font-semibold text-center lg:text-3xl desktop:text-start">
                CONTACT US
              </h1>
              <div className="text-[13px] text-center flex flex-col items-center gap-[15px] opacity-60 lg:text-base">
                <p className="w-full desktop:text-start">
                  tarpus_yys@yahoo.com
                </p>
                <p className="w-full desktop:text-start">(021) 3908836</p>
                <p className="w-full desktop:text-start">
                  Jl. Salemba Tengah No.23, RT.9/RW.3, Paseban, Kec. Senen, Kota
                  Jakarta Pusat Daerah Khusus Ibukota Jakarta 10440
                </p>
              </div>
            </div>

            {/* Social media */}
            <div className="flex flex-col w-full gap-5 desktop:w-1/5">
              <h1 className="w-full font-semibold text-center lg:text-3xl desktop:text-start">
                FOLLOW US
              </h1>
              <div className="flex justify-center w-full gap-2 lg:gap-3 desktop:justify-start">
                <div className="size-[53px] rounded-full bg-[#0F4478] flex justify-center items-center lg:size-[76px]">
                  <img
                    src={twitterIcon}
                    alt="X Logo"
                    className="size-[25px] lg:size-10"
                  />
                </div>
                <div className="size-[53px] rounded-full bg-[#0F4478] flex justify-center items-center lg:size-[76px]">
                  <img
                    src={instagramIcon}
                    alt="Instagram Logo"
                    className="size-[29px] lg:size-10"
                  />
                </div>
                <div className="size-[53px] rounded-full bg-[#0F4478] flex justify-center items-center lg:size-[76px]">
                  <img
                    src={youtubeIcon}
                    alt="Youtube Logo"
                    className="size-[29px] lg:size-[42px]"
                  />
                </div>
                <div className="size-[53px] rounded-full bg-[#0F4478] flex justify-center items-center lg:size-[76px]">
                  <img
                    src={facebookIcon}
                    alt="Facebook Logo"
                    className="size-[29px] lg:size-[42px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Copyright text */}
          <div className="flex flex-col items-center w-full gap-[34px] lg:gap-5 mt-[42px] lg:mt-[68px] desktop:mt-[58px]">
            <hr className="mt-[22px] h-1 bg-[#002143] w-full border-none opacity-50" />
            <h1 className="font-medium text-[10px] lg:text-base w-full flex justify-center desktop:justify-end opacity-80">
              Copyright &#169; 2024 Yayasan Tarakanita. All Rights Reserved.
            </h1>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
