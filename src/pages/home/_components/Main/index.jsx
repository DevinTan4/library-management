import { homeImg } from "../../../../assets/images";
import Cover from "./Cover";
import SearchBar from "./SearchBar";

const Main = () => {
  return (
    <main>
      {/* Home cover */}
      <Cover src={homeImg} />
      {/* Search bar */}
      <SearchBar />
    </main>
  );
};

export default Main;
