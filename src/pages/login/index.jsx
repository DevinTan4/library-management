import Banner from "./_components/Banner";
import RightSection from "./_components/RightSection";

const LoginPage = () => {
  return (
    <div className="flex text-white font-inter overflow-hidden">
      {/* Left side */}
      <Banner />

      {/* Right side */}
      <RightSection />
    </div>
  );
};

export default LoginPage;
