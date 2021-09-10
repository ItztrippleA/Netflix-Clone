import "./featured.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import axios from "axios";
import { useState, useEffect } from "react";

const Featured = ({ type }) => {
  const [content, setcontent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzIzMWFmYTY0MDgzNTNjZmNmZmJhZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDcyNzE4NSwiZXhwIjoxNjMxMTU5MTg1fQ.1976pCJGVadwS_BeOEn1V-r0FLXmNib4eS6Ploc6hKU",
          },
        });
        setcontent(res.data[0]);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
