import { IoEyeOutline } from "react-icons/io5";
import { SlLock } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import InputForm from "./_components/InputForm";
import Feature from "./_components/Feature";
import Button from "./_components/Button";

const Form = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <form action="" className="flex flex-col gap-4">
      {/* Email / Username */}
      <InputForm
        type="email"
        placeholder="Email / Username"
        size="52"
        icon={<IoPersonOutline />}
      />
      {/* Password */}
      <InputForm
        type="password"
        placeholder="Password"
        size="48"
        icon={<SlLock size="18" />}
        iconRight={<IoEyeOutline />}
      />
      {/* Forgot password and remember me */}
      <Feature />
      {/* Login button */}
      <Button onClick={handleLogin} />
    </form>
  );
};

export default Form;
