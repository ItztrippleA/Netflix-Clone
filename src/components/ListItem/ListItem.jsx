import "./listItem.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import {
  Add,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setmovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzIzMWFmYTY0MDgzNTNjZmNmZmJhZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDcyNzE4NSwiZXhwIjoxNjMxMTU5MTg1fQ.1976pCJGVadwS_BeOEn1V-r0FLXmNib4eS6Ploc6hKU",
          },
        });
        setmovie(res.data);
        // console.log(res);
      } catch (e) {
        console.log(e);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="" />
        {isHovered && (
          <>
            {console.log(movie)}
            <video src={movie.trailer} autoPlay={true} />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrowIcon className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default ListItem;
