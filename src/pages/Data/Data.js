import { Link, useLoaderData, useNavigation } from "react-router-dom";

// Example: https://www.youtube.com/watch?v=z0vaVoxMoSA&ab_channel=PedroTech

const Data = () => {
  const dogURL = useLoaderData();
  const navigate = useNavigation();

  if (navigate.state === "loading") {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="data">
      <div className="container">
        <img src={dogURL} alt="Random dog" width="400px" />
        <Link to="/data">Home Page</Link>
        <h2>Data Page</h2>
        <h2>Data Page</h2>
        <h2>Data Page</h2>
        <h2>Data Page</h2>
        <h2>Data Page</h2>
        <h2>Data Page</h2>
        <h2>Data Page</h2>
        <h2>Data Page</h2>
      </div>
    </div>
  );
};

export const dataLoader = async () => {
  const res = await fetch("https://random.dog/woof.json");
  const dog = await res.json();
  return dog?.url;
};

export default Data;
