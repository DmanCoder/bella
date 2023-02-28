import { Link, Outlet } from "react-router-dom";

// const Root = () => {
//   return <Outlet />;
// };
const Root = () => {
  return (
    <>
      {/* Add navigation bar here */}
      <div>
        <Link to="/data">Data Page</Link>
        <Link to="/about">About Page</Link>
        <br />
      </div>

      {/* Outlet - this renders sites */}
      <Outlet />
    </>
  );
};

export default Root;
