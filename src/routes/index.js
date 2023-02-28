import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Pages
import Root from "./root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Data, { dataLoader } from "../pages/Data/Data";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />,
      <Route path="/about" element={<About />} />,
      <Route path="/contact" element={<Contact />} />
      <Route path="/data" element={<Data />} loader={dataLoader} />
    </Route>
  )
);

export default router;
