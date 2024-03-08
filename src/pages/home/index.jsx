import { Link } from "react-router-dom";
import { homeImg, schoolLogoImg } from "../../assets/images";
import { RxMixerHorizontal } from "react-icons/rx";
import { HiMagnifyingGlass } from "react-icons/hi2";

const HomePage = () => {
  return (
    <div className="bg-[#F6EEE1] h-full w-screen font-inter">
      {/* Navbar */}
      <header>
        <nav>
          <div className="h-[75px] bg-[#F6EEE1] w-full px-[60px] flex justify-center items-center space-x-[465px]">
            {/* Left side (logo) */}
            <div>
              <img src={schoolLogoImg} alt="School Logo" />
            </div>
            {/* Middle (title) */}
            <div>
              <p className="text-[40px] font-normal font-dmSerif text-[#26486D] leading-[54.84px] cursor-default">
                LIBRARY
              </p>
            </div>
            {/* Right side (login button) */}
            <div>
              <Link to="/login">
                <button className="font-inter text-xl leading-[24.2px] font-semibold text-[#003060] border rounded-3xl border-[#003060] px-[29.5px] py-[10.5px] hover:bg-[#003060] hover:text-white hover:transition hover:duration-300 active:bg-white active:text-[#003060] active:transition-none active:border-none">
                  Log in
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main>
        {/* Home cover */}
        <article>
          <div>
            <img src={homeImg} alt="Home Cover" />
          </div>
        </article>
        {/* Search bar */}
        <section>
          <div className="h-[148px] w-full flex justify-center items-center">
            <div className="w-[743px] h-[65px] flex items-center bg-white rounded-full pl-[45px] pr-[13px]">
              {/* Search input */}
              <input
                type="text"
                placeholder="Search Any Book..."
                className="font-inter text-lg text-[#26486D] placeholder:text-[#26486D] placeholder:opacity-60 bg-transparent w-full outline-none"
              />
              {/* Filter button */}
              <div className="w-20 h-[45px] flex justify-center items-center text-[#26486D] cursor-default mr-[23px] hover:opacity-70 hover:transition hover:duration-200 pl-1">
                <RxMixerHorizontal className="size-5" />
                <span className="ml-2 text-lg font-medium">Filter</span>
              </div>
              {/* Search button */}
              <div className="flex items-center justify-center w-[150px] h-[45px] bg-[#E95B0A] rounded-full justify-items-end text-white cursor-pointer hover:bg-[#FF8300] hover:transition hover:duration-300 active:bg-[#E95B0A] active:transition-none">
                <HiMagnifyingGlass className="size-5 stroke-[0.5px]" />
                <span className="text-base font-light pl-0.5">Search</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer>
        <div className="h-[376px] bg-[#003060]"></div>
      </footer>
    </div>
  );
};

export default HomePage;
