import { useEffect, useState } from "react";
import Sidebar from "../../_organisms/Sidebar";
import Navbar from "../../_organisms/Navbar";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Sidebar open by default in desktop size
  const handleSidebarResize = () => {
    if (window.innerWidth >= 1920) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    handleSidebarResize();
    window.addEventListener("resize", handleSidebarResize);

    return () => {
      window.removeEventListener("resize", handleSidebarResize);
    };
  }, []);

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
