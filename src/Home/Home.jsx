import Navbar from "../components/Navbar.jsx";
import "./Home.scss";
import Featured from "../components/featured/Featured";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
    </div>
  );
};

export default Home;
