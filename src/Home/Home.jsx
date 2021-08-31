import Navbar from "../components/Navbar.jsx";
import "./Home.scss";
import ado from "../images/Ado.jpg";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img src={ado} alt="" width="100%" />
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem nihil
      facere cumque natus ipsam iure exercitationem beatae dignissimos molestiae
      officia ex facilis ducimus nostrum, eveniet nesciunt delectus, non neque
      dolores! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Voluptatem nihil facere cumque natus ipsam iure exercitationem beatae
      dignissimos molestiae officia ex facilis ducimus nostrum, eveniet nesciunt
      delectus, non neque dolores! Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Voluptatem nihil facere cumque natus ipsam iure
      exercitationem beatae dignissimos molestiae officia ex facilis ducimus
      nostrum, eveniet nesciunt delectus, non neque dolores!
    </div>
  );
};

export default Home;
