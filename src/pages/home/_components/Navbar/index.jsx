import { Link, useNavigate } from "react-router-dom";
import { schoolLogoImg } from "../../../../assets/images";
import Logo from "./_components/Logo";
import Title from "./_components/Title";
import Button from "./_components/Button";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <header>
      <nav>
        <div className="h-[75px] bg-[#F6EEE1] w-full px-[60px] flex justify-center items-center space-x-[465px]">
          {/* Left side (logo) */}
          <Logo src={schoolLogoImg} />
          {/* Middle (title) */}
          <Title>LIBRARY</Title>
          {/* Right side (login button) */}
          <Button onClick={handleLogin} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
