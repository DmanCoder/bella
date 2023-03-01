import { RouterProvider } from "react-router-dom";

// Routes
import router from "./routes";

// Styles
import "./styles/main.scss";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
