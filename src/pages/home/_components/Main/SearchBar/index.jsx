import { RxMixerHorizontal } from "react-icons/rx";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Input from "./_components/Input";

const SearchBar = () => {
  return (
    <section>
      <div className="h-[148px] w-full flex justify-center items-center">
        <div className="w-[743px] h-[65px] flex items-center bg-white rounded-full pl-[45px] pr-[13px]">
          {/* Search input */}
          <Input type="text" placeholder="Search Any Book..." />
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
  );
};

export default SearchBar;
