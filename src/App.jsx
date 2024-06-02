import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import LoginV2 from "./pages/login-v2";
import HomePage from "./pages/home";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Fragment>
  );
};

export default App;
