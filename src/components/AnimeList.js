import React from "react";

const AnimeList = ({ data, isLoading }) => {
  if (isLoading) return <h1>Loading....</h1>;
  return (
    <div className="card-main">
      {data.map((datas) => {
        const { image_url, title, episodes, url, mal_id } = datas;
        return (
          <div key={mal_id} className="card">
            <div class="imgBx">
              <a href={url} target="_blank" rel="noreferrer">
                <img src={image_url} alt={title} />
              </a>
            </div>
            <div className="container">
              <h4>
                <b>{title}</b>
              </h4>

              <p>Episodes :{episodes}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeList;
