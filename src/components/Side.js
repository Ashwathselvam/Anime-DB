import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "./context";
const Side = () => {
  const { getTop, top, loading } = useGlobalContext();
  useEffect(() => {
    getTop();
    console.log(top);
  }, [top.length]);
  if (loading) {
    return (
      <main>
        <h3>Loading....</h3>
      </main>
    );
  }

  return (
    <div className="content-wrap">
      <h3>Top Anime</h3>
      <aside className="top">
        {top.map((anime) => {
          return (
            <a
              href={anime.url}
              target="_blank"
              key={anime.mal_id}
              rel="noreferrer"
            >
              {anime.title}
            </a>
          );
        })}
      </aside>
    </div>
  );
};

export default Side;
