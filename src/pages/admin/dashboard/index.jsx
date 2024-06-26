import {
  bookIcon,
  borrowedBookIcon,
  profileBlueIcon,
  rightArrowIcon,
  searchBlackIcon,
  upAndDownArrowIcon,
} from "../../../assets/icons";
import AdminLayout from "../../_components/_templates/AdminLayout";

const AdminDashboardPage = () => {
  return (
    <div className="w-full min-h-screen bg-cream font-dmSans">
      {/* Sidebar & Navbar */}
      <AdminLayout />

      {/* Main */}
      <main className="py-6 pt-[72px] lg:pl-[168px] lg:pt-[130px] px-[15px] font-dmSans desktop:pl-[343px] desktop:pb-[43px]">
        <div className="w-full h-full flex flex-col gap-[15px] text-white desktop:flex-row desktop:gap-[55px]">
          <div className="desktop:w-[1065px] desktop:h-[708px]">
            <div className="flex flex-col gap-[15px] lg:flex-row lg:gap-[26px] desktop:h-[178px]">
              {/* Total buku tersedia */}
              <div className="flex flex-grow">
                <div className="size-[114px] bg-blue flex justify-center items-center flex-grow desktop:h-full desktop:max-w-[178px]">
                  <img
                    src={bookIcon}
                    alt="Book Icon"
                    className="desktop:w-[108px] desktop:h-[96px]"
                  />
                </div>
                <div className="w-[246px] h-[114px] bg-pastel-orange pl-[25px] py-[14px] flex-grow desktop:h-full">
                  <h1 className="text-lg font-medium desktop:text-2xl">
                    Buku di Perpustakaan
                  </h1>
                  <div>
                    <span className="text-6xl font-medium desktop:text-[90px]">
                      820
                    </span>
                    <span className="text-xs font-bold opacity-60 desktop:text-xl">
                      buku
                    </span>
                  </div>
                </div>
              </div>

              {/* Total buku dipinjam */}
              <div className="flex flex-grow">
                <div className="size-[114px] bg-blue flex justify-center items-center flex-grow desktop:h-full desktop:max-w-[178px]">
                  <img
                    src={borrowedBookIcon}
                    alt="Book Icon"
                    className="desktop:w-[74px] desktop:h-[95px]"
                  />
                </div>
                <div className="w-[246px] h-[114px] bg-pastel-orange pl-[25px] py-[14px] flex-grow desktop:h-full">
                  <h1 className="text-lg font-medium desktop:text-2xl">
                    Buku Dipinjam
                  </h1>
                  <div>
                    <span className="text-6xl font-medium desktop:text-[90px]">
                      160
                    </span>
                    <span className="text-xs font-bold opacity-60 desktop:text-xl">
                      buku
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Log peminjaman buku */}
            <div className="w-full h-full bg-white px-[21px] py-[15px] font-dmSans">
              <div className="flex flex-col w-full pointer-events-auto lg:flex-row lg:items-center">
                <h1 className="text-blue font-bold text-[25px] lg:text-[40px] lg:flex-1">
                  Log Peminjaman
                </h1>
                {/* Search bar */}
                <div className="w-full h-[29px] border border-slate-400 flex items-center justify-between px-[13px] gap-2 lg:flex-1 lg:h-[35px]">
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
              </div>

              {/* Log peminjaman table */}
              <div className="text-black mt-[15px]">
                <table className="w-full">
                  <thead>
                    <tr className="text-xs font-medium lg:text-lg">
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
                  <tbody className="text-xs lg:text-base">
                    <tr className="border-t border-black h-[60px]">
                      <td className="pl-3">01.</td>
                      <td className="pl-3">Atomic Habits</td>
                      <td className="pl-3">Ariya Panna</td>
                      <td className="pl-3">Dikembalikan</td>
                    </tr>
                    <tr className="border-t border-black h-[60px]">
                      <td className="pl-3">01.</td>
                      <td className="pl-3">Atomic Habits</td>
                      <td className="pl-3">Ariya Panna</td>
                      <td className="pl-3">Dikembalikan</td>
                    </tr>
                    <tr className="border-t border-black h-[60px]">
                      <td className="pl-3">01.</td>
                      <td className="pl-3">Atomic Habits</td>
                      <td className="pl-3">Ariya Panna</td>
                      <td className="pl-3">Dikembalikan</td>
                    </tr>
                    <tr className="border-t border-black h-[60px]">
                      <td className="pl-3">01.</td>
                      <td className="pl-3">Atomic Habits</td>
                      <td className="pl-3">Ariya Panna</td>
                      <td className="pl-3">Dikembalikan</td>
                    </tr>
                  </tbody>
                </table>

                {/* Results Number */}
                <div className="flex justify-between">
                  <span className="text-[10px] opacity-50 lg:text-base">
                    Showing 5 of 160 results
                  </span>
                  <button className="text-[10px] opacity-50 flex items-center gap-2 border border-black px-4 py-1 lg:text-base">
                    Selengkapnya
                    <img
                      src={rightArrowIcon}
                      alt="Right Arrow Icon"
                      className="w-1 h-2 lg:h-[10px]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Detail peminjam */}
          <div className="px-[21px] py-[15px] bg-white h-full text-black flex flex-col gap-[26px] desktop:w-[404px]">
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
