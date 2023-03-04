import Hero from "../../components/Hero/Hero";

// Styles
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <div style={{ height: "100vh", backgroundColor: "red" }}></div>
      <div style={{ height: "100vh", backgroundColor: "pink" }}></div>
      <div style={{ height: "100vh", backgroundColor: "yellow" }}></div>
    </div>
  );
};

export default Home;
