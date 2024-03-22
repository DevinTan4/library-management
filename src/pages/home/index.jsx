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
        <div className="h-[376px] bg-[#003060]"></div>
      </footer>
    </div>
  );
};

export default HomePage;
