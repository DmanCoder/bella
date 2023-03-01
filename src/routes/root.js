import { Outlet } from "react-router-dom";

// Components
import TopNavigation from "../components/TopNavigation/TopNavigation";

const Root = () => {
  return (
    <>
      {/* Add navigation bar here */}
      <TopNavigation />

      {/* Outlet - this renders sites */}
      <Outlet />
    </>
  );
};

export default Root;
