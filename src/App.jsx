import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import AdminDashboardPage from "./pages/admin/dashboard";
import AdminBukuPage from "./pages/admin/buku";
import AdminLogPeminjamanPage from "./pages/admin/logPeminjaman";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin-buku" element={<AdminBukuPage />} />
        <Route
          path="/admin-log-peminjaman"
          element={<AdminLogPeminjamanPage />}
        />
      </Routes>
    </Fragment>
  );
};

export default App;
