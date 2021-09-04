import React, { useState ,useEffect} from "react";
import Anime from "./Anime";
import AnimeList from "./AnimeList";

const Card = () => {
  const [name, setName] = useState("");
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const fetchAnime = async (event) => {
    if (event.keyCode === 13) {
      try {
        setLoad(true);
        const response = await fetch(
          `https://api.jikan.moe/v3/search/anime?q=${name||"full"}&order_by=title&sort=asc&limit=10`
        );
        const data = await response.json();
        setData(data.results);
      } catch (e) {
        console.log(e);
      } finally {
        setLoad(false);
      }
    }
  };
  useEffect(()=>{
    fetchAnime({keyCode:13});
  },[])
  return (
    <div style={{ width: "100%",
    position:'relative',
    top:'50px'
    }}>
      <Anime
        name={name}
        handleNameChange={handleNameChange}
        handleKeyDown={fetchAnime}
      />
      <AnimeList data={data} isLoading={load} />
    </div>
  );
};

export default Card;
