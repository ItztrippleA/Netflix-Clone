import Navbar from "../../components/Navbar/Navbar.jsx";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import List from "../../components/List/List.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setlists] = useState([]);
  const [genre, setgenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}&${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzIzMWFmYTY0MDgzNTNjZmNmZmJhZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDcyNzE4NSwiZXhwIjoxNjMxMTU5MTg1fQ.1976pCJGVadwS_BeOEn1V-r0FLXmNib4eS6Ploc6hKU",
            },
          }
        );
        // console.log(res);
        setlists(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getRandomList();
  }, [genre, type]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list, i) => {
        return <List list={list} key={i} />;
      })}
    </div>
  );
};

export default Home;
