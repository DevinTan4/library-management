import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import AdminDashboardPage from "./pages/admin/dashboard";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
      </Routes>
    </Fragment>
  );
};

export default App;
