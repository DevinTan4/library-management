import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import {
  editIcon,
  rightArrowIcon,
  searchBlackIcon,
} from "../../../assets/icons";
import {
  bookChartImg,
  bookCover1Img,
  bookCover2Img,
  bookCover3Img,
  borrowedBookChartImg,
} from "../../../assets/images";
import Icon from "../../_components/_atoms/Icon";
import Image from "../../_components/_atoms/Image";
import Typography from "../../_components/_atoms/Typography";
import AdminLayout from "../../_components/_templates/AdminLayout";

const AdminBukuPage = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  const handleDropdown = () => setIsDropdown(!isDropdown);

  return (
    <div className="w-full min-h-screen bg-cream">
      {/* Sidebar & Navbar */}
      <AdminLayout />

      {/* Main */}
      <main className="pt-[63px] px-[15px] font-dmSans flex flex-col gap-3 pb-96">
        {/* Chart - Total buku di perpustakaan */}
        <div className="px-[30px] py-5 bg-white text-blue flex flex-col gap-[15px]">
          <Typography variant="h5" className="!font-bold">
            Total buku di perpustakaan
          </Typography>
          {/* Statistik buku */}
          <div className="flex justify-between">
            <div className="flex flex-col gap-[15px]">
              <div>
                {/* Data */}
                <div className="flex items-end gap-2">
                  <Typography variant="h1">820</Typography>
                  <Typography variant="span" className="font-bold">
                    buku
                  </Typography>
                </div>
                {/* Latest data date */}
                <Typography className="text-[10px] opacity-60 tracking-wider">
                  Data per Februari 2024
                </Typography>
              </div>
              {/* Keterangan chart */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-[14px] bg-[#3C72ED] rounded-full"></div>
                  <div className="flex gap-1">
                    <Typography className="font-bold text-[12px]">
                      80%
                    </Typography>
                    <Typography className="text-[12px]">Total buku</Typography>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-[14px] bg-[#81A1F3] rounded-full"></div>
                  <div className="flex gap-1">
                    <Typography className="font-bold text-[12px]">
                      20%
                    </Typography>
                    <Typography className="text-[12px]">
                      Buku dipinjam
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            {/* Chart image */}
            <Image src={bookChartImg} alt="Chart Image" />
          </div>
        </div>

        {/* Chart - Total buku dipinjam */}
        <div className="px-[30px] py-5 bg-white text-blue flex flex-col gap-[15px]">
          <Typography variant="h5" className="!font-bold">
            Total buku di perpustakaan
          </Typography>
          {/* Statistik buku */}
          <div className="flex justify-between">
            <div className="flex flex-col gap-[15px]">
              <div>
                {/* Data */}
                <div className="flex items-end gap-2">
                  <Typography variant="h1">160</Typography>
                  <Typography variant="span" className="font-bold">
                    buku
                  </Typography>
                </div>
                {/* Latest data date */}
                <Typography className="text-[10px] opacity-60 tracking-wider">
                  Data per Februari 2024
                </Typography>
              </div>
              {/* Keterangan chart */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-[14px] bg-[#F2D17A] rounded-full"></div>
                  <div className="flex gap-1">
                    <Typography className="font-bold text-[12px]">
                      89%
                    </Typography>
                    <Typography className="text-[12px]">Total buku</Typography>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-[14px] bg-[#F5B212] rounded-full"></div>
                  <div className="flex gap-1">
                    <Typography className="font-bold text-[12px]">
                      11%
                    </Typography>
                    <Typography className="text-[12px]">
                      Buku dipinjam
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            {/* Chart image */}
            <Image src={borrowedBookChartImg} alt="Chart Image" />
          </div>
        </div>

        {/* Card buku */}
        <div className="mt-[13px] flex flex-col gap-[15px]">
          <div className="flex justify-between">
            {/* Title */}
            <Typography variant="h4">Buku</Typography>
            {/* Tampilkan semua button */}
            <div className="flex items-center justify-between gap-[18px]">
              <Typography className="text-[12px]">Tampilkan semua</Typography>
              <Image src={rightArrowIcon} alt="Arrow Icon" className="size-2" />
            </div>
          </div>

          {/* Card */}
          <div className="grid grid-cols-2 gap-x-14 gap-y-[33px]">
            <div className="w-[153px] h-[272px] flex flex-col gap-[10px] cursor-pointer">
              <Image
                src={bookCover1Img}
                alt="Book Cover"
                className="w-full h-[230px]"
              />
              <div className="flex items-start justify-between w-full gap-[10px]">
                <Typography className="font-medium text-[12px] flex-1 break-words">
                  Principles: Life and Work
                </Typography>
                <Image src={editIcon} alt="Edit Icon" />
              </div>
            </div>
            <div className="w-[153px] h-[272px] flex flex-col gap-[10px]">
              <Image
                className="w-full h-[230px]"
                src={bookCover2Img}
                alt="Book Cover"
              />
              <div className="flex items-start justify-between w-full gap-[10px]">
                <Typography className="font-medium text-[12px] flex-1 break-words">
                  Murtagh: The World of Eragon
                </Typography>
                <Image src={editIcon} alt="Edit Icon" />
              </div>
            </div>
            <div className="w-[153px] h-[272px] flex flex-col gap-[10px]">
              <Image
                className="w-full h-[230px]"
                src={bookCover3Img}
                alt="Book Cover"
              />
              <div className="flex items-start justify-between w-full gap-[10px]">
                <Typography className="font-medium text-[12px] flex-1 break-words">
                  The Lioness
                </Typography>
                <Image src={editIcon} alt="Edit Icon" />
              </div>
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex justify-between w-full h-10 gap-2 bg-white px-[30px] py-[10px] items-center">
          <input
            type="text"
            placeholder="Ini Search Bar"
            className="w-full placeholder:text-[15px] focus:outline-none"
          />
          <Icon src={searchBlackIcon} alt="Search Icon" className="size-5" />
        </div>

        {/* Kategori buku */}
        <div className="mt-[3px]">
          <Typography variant="h4" className="text-blue">
            Kategori
          </Typography>
          <div
            className="w-full bg-white h-[72px] mt-[22px] flex items-center justify-between px-5 py-[26px] cursor-pointer "
            onClick={handleDropdown}
          >
            <Typography className="font-bold text-[15px]">Umum</Typography>
            <HiChevronDown
              className={`size-6 transition-transform duration-500 transform ${
                isDropdown ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <div
            className={`transition-[max-height] duration-300 overflow-hidden ${
              isDropdown ? "max-h-96" : "max-h-0"
            }`}
          >
            <ul className="overflow-y-auto bg-white max-h-60">
              {Array.from({ length: 10 }, (_, index) => (
                <li key={index} className="p-5 hover:bg-gray-100">
                  Option {index + 1}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminBukuPage;
