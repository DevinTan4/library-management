import { useState } from "react";
import Sidebar from "../../_organisms/Sidebar";
import Navbar from "../../_organisms/Navbar";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      {/* Aside */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isActive={isActive}
        setIsActive={setIsActive}
      ></Sidebar>

      {/* Navbar */}
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      ></Navbar>
    </div>
  );
};

export default AdminLayout;
