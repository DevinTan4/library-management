import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import AdminHomePage from "./pages/admin/home";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-home" element={<AdminHomePage />} />
      </Routes>
    </Fragment>
  );
};

export default App;
