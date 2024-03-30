import Main from "./_components/Main";
import Navbar from "./_components/Navbar";

const HomePage = () => {
  return (
    <div className="bg-[#F6EEE1] h-full w-screen font-inter">
      {/* Navbar */}
      <Navbar />
      {/* Main */}
      <Main />
      {/* Footer */}
      <footer>
        <div className="h-[372px] bg-[#003060] p-[60px]">
          <div className="bg-slate-600">
            {/* Left section */}
            <div>
              <h2 className="font-bold text-white text-2xl">
                YAYASAN TARAKANITA
              </h2>
            </div>
            {/* Middle section */}
            <div></div>
            {/* Right section */}
            <div></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
