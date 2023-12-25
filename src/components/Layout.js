import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

function Layout({ currentPage }) {
  return (
    <div>
      <Nav currentPage={currentPage} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
