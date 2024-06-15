import { useState } from "react";
import {
  book2Icon,
  bookIcon,
  borrowedBookIcon,
  closeSidebarIcon,
  hamburgerMenuBlueIcon,
  homeIcon,
  logPaperIcon,
  logoutIcon,
  logoutWhiteIcon,
  profileBlueIcon,
  rightArrowIcon,
  searchBlackIcon,
  upAndDownArrowIcon,
} from "../../../assets/icons";
import { schoolLogoImg } from "../../../assets/images";
import { useLocation } from "react-router-dom";

const AdminDashboardPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="w-full min-h-screen bg-cream font-dmSans">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 flex flex-col items-center justify-between min-h-screen py-6 overflow-hidden bg-blue transition-all duration-300 z-20 ${
          isSidebarOpen ? `w-[200px]` : `w-0`
        }`}
      >
        {/* Close button */}
        <img
          src={closeSidebarIcon}
          alt="Close Sidebar Icon"
          className="absolute top-4 right-4 size-[10px]"
          onClick={() => setIsSidebarOpen(false)}
        />
        {/* School logo */}
        <div className="bg-white size-[45px] rounded-full flex justify-center items-center cursor-pointer">
          <img
            src={schoolLogoImg}
            alt="Tarakanita Logo"
            className="w-7 h-[42px]"
          />
        </div>
        {/* Sidebar menu */}
        <div className="font-medium text-orange text-[15px] w-full flex flex-col gap-5">
          {/* Sidebar menu - Home */}
          <div
            className={`flex gap-5 items-center hover:bg-blue-hover cursor-pointer border-l-[10px] border-transparent px-[15px] py-5 active:border-orange active:bg-white transition duration-100 ${
              location.pathname === `/admin-dashboard`
                ? `bg-white border-l-[10px] border-orange`
                : ``
            }`}
          >
            <img src={homeIcon} alt="Home Icon" className="size-5" />
            <span>Home</span>
          </div>
          {/* Sidebar menu - Buku*/}
          <div className="flex gap-5 items-center hover:bg-blue-hover cursor-pointer border-l-[10px] border-transparent px-[15px] py-5 active:border-orange active:bg-white transition duration-100">
            <img src={book2Icon} alt="Book Icon" className="size-5" />
            <span>Buku</span>
          </div>
          {/* Sidebar menu - Log penyimpanan */}
          <div className="flex gap-5 items-center hover:bg-blue-hover cursor-pointer border-l-[10px] border-transparent px-[15px] py-5 active:border-orange active:bg-white transition duration-100">
            <img
              src={logPaperIcon}
              alt="Log Peminjaman Icon"
              className="size-5"
            />
            <span>Log Peminjaman</span>
          </div>
        </div>
        {/* Logout button */}
        <div
          className="w-[127px] h-10 bg-white rounded-full flex justify-center items-center gap-2 text-orange font-dmSans font-medium text-[15px] hover:opacity-75 transition-all duration-100 active:bg-orange active:text-white cursor-pointer"
          onMouseDown={() => setIsActive(true)}
          onMouseUp={() => setIsActive(false)}
        >
          <img
            src={isActive ? logoutWhiteIcon : logoutIcon}
            alt="Logout Icon"
            className="size-[22px]"
          />
          <span>Logout</span>
        </div>
      </aside>

      {/* Navbar */}
      <nav className={`h-12 bg-white fixed top-0 justify-between w-full z-10`}>
        <div className="flex items-center justify-between h-full px-[15px]  w-full">
          {/* Hamburger menu */}
          <img
            src={hamburgerMenuBlueIcon}
            alt="Hamburger Menu Icon"
            className="cursor-pointer size-5"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
          {/* Title */}
          <h1 className="text-xl cursor-pointer text-blue font-dmSerif">
            LIBRARY
          </h1>
          {/* Account profile */}
          <img
            src={profileBlueIcon}
            alt="Profile Icon"
            className="cursor-pointer size-5"
          />
        </div>
      </nav>

      {/* Main */}
      <main className="py-6 pt-[72px] desktop:pl-[347px]">
        <div className="w-full h-full flex flex-col gap-[15px] text-white px-[15px]">
          {/* Total buku tersedia */}
          <div className="flex">
            <div className="size-[114px] bg-blue flex justify-center items-center">
              <img src={bookIcon} alt="Book Icon" />
            </div>
            <div className="w-[246px] h-[114px] bg-pastel-orange pl-[25px] py-[14px]">
              <h1 className="text-lg font-medium">Buku di Perpustakaan</h1>
              <div>
                <span className="text-6xl font-medium">820</span>
                <span className="text-xs font-bold opacity-60">buku</span>
              </div>
            </div>
          </div>

          {/* Total buku dipinjam */}
          <div className="flex">
            <div className="size-[114px] bg-blue flex justify-center items-center">
              <img src={borrowedBookIcon} alt="Book Icon" />
            </div>
            <div className="w-[246px] h-[114px] bg-pastel-orange pl-[25px] py-[14px]">
              <h1 className="text-lg font-medium">Buku Dipinjam</h1>
              <div>
                <span className="text-6xl font-medium">160</span>
                <span className="text-xs font-bold opacity-60">buku</span>
              </div>
            </div>
          </div>

          {/* Log peminjaman buku */}
          <div className="w-full h-full bg-white px-[21px] py-[15px]">
            <h1 className="text-blue font-bold text-[25px]">Log Peminjaman</h1>
            {/* Search bar */}
            <div className="w-full h-[29px] border border-slate-400 flex items-center justify-between px-[13px] gap-2">
              <input
                type="text"
                placeholder="Cari"
                className="flex-grow text-sm text-black focus:border-none focus:outline-none focus:ring-0 placeholder:text-sm"
              />
              <img
                src={searchBlackIcon}
                alt="Search Icon"
                className="opacity-50 cursor-pointer size-4"
              />
            </div>

            {/* Log peminjaman table */}
            <div className="text-black mt-[15px]">
              <table className="w-full">
                <thead>
                  <tr className="text-xs font-medium">
                    <th className="bg-slate-200">
                      <div className="flex px-[10px] py-3 justify-between items-center">
                        <span>No</span>
                        <img
                          src={upAndDownArrowIcon}
                          alt="upAndDownArrowIcon"
                        />
                      </div>
                    </th>
                    <th className="bg-slate-200">
                      <div className="flex px-[10px] py-3 justify-between items-center">
                        <span>Judul Buku</span>
                        <img
                          src={upAndDownArrowIcon}
                          alt="upAndDownArrowIcon"
                        />
                      </div>
                    </th>
                    <th className="bg-slate-200">
                      <div className="flex px-[10px] py-3 justify-between items-center">
                        <span>Peminjam</span>
                        <img
                          src={upAndDownArrowIcon}
                          alt="upAndDownArrowIcon"
                        />
                      </div>
                    </th>
                    <th className="bg-slate-200">
                      <div className="flex px-[10px] py-3 justify-between items-center">
                        <span>Status</span>
                        <img
                          src={upAndDownArrowIcon}
                          alt="upAndDownArrowIcon"
                        />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  <tr className="border-t border-black h-[60px]">
                    <td className="text-center">01.</td>
                    <td className="text-center">Atomic Habits</td>
                    <td className="text-center">Ariya Panna</td>
                    <td className="text-center">Dikembalikan</td>
                  </tr>
                  <tr className="border-t border-black h-[60px]">
                    <td className="text-center">01.</td>
                    <td className="text-center">Atomic Habits</td>
                    <td className="text-center">Ariya Panna</td>
                    <td className="text-center">Dikembalikan</td>
                  </tr>
                  <tr className="border-t border-black h-[60px]">
                    <td className="text-center">01.</td>
                    <td className="text-center">Atomic Habits</td>
                    <td className="text-center">Ariya Panna</td>
                    <td className="text-center">Dikembalikan</td>
                  </tr>
                  <tr className="border-t border-black h-[60px]">
                    <td className="text-center">01.</td>
                    <td className="text-center">Atomic Habits</td>
                    <td className="text-center">Ariya Panna</td>
                    <td className="text-center">Dikembalikan</td>
                  </tr>
                </tbody>
              </table>

              {/* Results Number */}
              <div className="flex justify-between">
                <span className="text-[10px] opacity-50">
                  Showing 5 of 160 results
                </span>
                <button className="text-[10px] opacity-50 flex items-center gap-2 border border-black px-4 py-1">
                  Selengkapnya
                  <img
                    src={rightArrowIcon}
                    alt="Right Arrow Icon"
                    className="w-1 h-2"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Detail peminjam */}
          <div className="px-[21px] py-[15px] bg-white w-full h-full text-black flex flex-col gap-[26px]">
            <h1 className="text-blue font-bold text-[25px]">Detail Peminjam</h1>
            {/* Peminjam */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white size-[35px] rounded-full flex items-center justify-center shadow-md">
                  <img
                    src={profileBlueIcon}
                    alt="Profile Icon"
                    className="opacity-20 size-6"
                  />
                </div>
                {/* Nama peminjam */}
                <div className="flex flex-col leading-4">
                  <span className="text-[15px]">Ariya Panna</span>
                  <span className="text-xs opacity-50">
                    Tenggat 1 hari lagi
                  </span>
                </div>
              </div>
              {/* Jumlah buku yang dipinjam */}
              <div className="text-[15px]">1 buku</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white size-[35px] rounded-full flex items-center justify-center shadow-md">
                  <img
                    src={profileBlueIcon}
                    alt="Profile Icon"
                    className="opacity-20 size-6"
                  />
                </div>
                {/* Nama peminjam */}
                <div className="flex flex-col leading-4">
                  <span className="text-[15px]">Ariya Panna</span>
                  <span className="text-xs opacity-50">
                    Tenggat 1 hari lagi
                  </span>
                </div>
              </div>
              {/* Jumlah buku yang dipinjam */}
              <div className="text-[15px]">2 buku</div>
            </div>
          </div>
        </div>
              
      </main>
    </div>
  );
};

export default AdminDashboardPage;
