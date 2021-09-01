import Navbar from "../../components/Navbar/Navbar.jsx";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import List from "../../components/List/List.jsx";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
