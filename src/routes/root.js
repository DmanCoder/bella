import { Outlet } from "react-router-dom";
import BackgroundFill from "../components/BackgroundFill/BackgroundFill";

// Components
import TopNavigation from "../components/TopNavigation/TopNavigation";

const Root = () => {
  return (
    <>
      {/* Add navigation bar here */}
      <TopNavigation />

      {/* Background Fill */}
      <BackgroundFill />

      {/* Outlet - this renders sites */}
      <Outlet />
    </>
  );
};

export default Root;
