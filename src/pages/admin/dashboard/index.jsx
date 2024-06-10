import {
  bookIcon,
  borrowedBookIcon,
  hamburgerMenuBlueIcon,
  profileBlueIcon,
  rightArrowIcon,
  searchBlackIcon,
  upAndDownArrowIcon,
} from "../../../assets/icons";

const AdminDashboardPage = () => {
  return (
    <div className="w-full h-full bg-cream font-dmSans">
      {/* Header */}
      <header>
        {/* Navbar */}
        <nav>
          <div className="flex items-center justify-between w-full h-12 bg-white px-[15px] py-[17px] fixed">
            <img
              src={hamburgerMenuBlueIcon}
              alt="Hamburger Menu"
              className="w-[17px] h-[14px] cursor-pointer"
            />
            <h1 className="text-xl cursor-pointer text-blue font-dmSerif">
              LIBRARY
            </h1>
            <img
              src={profileBlueIcon}
              alt="Profile Icon"
              className="cursor-pointer size-5"
            />
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="py-6 pt-[72px]">
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
