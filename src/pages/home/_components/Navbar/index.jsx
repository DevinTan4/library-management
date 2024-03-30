import { Link, useNavigate } from "react-router-dom";
import { schoolLogoImg } from "../../../../assets/images";
import Logo from "./_components/Logo";
import Title from "./_components/Title";
import Button from "./_components/Button";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <header>
      <nav>
        <div className="h-[47px] bg-[#F6EEE1] w-full px-4 flex justify-between items-center">
          {/* Left side (logo) */}
          <div>
            <Logo src={schoolLogoImg} classname="w-[21px] h-[29px]" />
          </div>

          {/* Middle (title) */}
          <div>
            <Title>LIBRARY</Title>
          </div>

          {/* Right side (login button) */}
          <div>
            <Button onClick={handleLogin}>
              <RxHamburgerMenu className="size-5" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
