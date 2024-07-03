import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import AdminDashboardPage from "./pages/admin/dashboard";
import AdminBukuPage from "./pages/admin/buku";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin-buku" element={<AdminBukuPage />} />
      </Routes>
    </Fragment>
  );
};

export default App;
