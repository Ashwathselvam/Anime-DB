import React from "react";
import Loader from "react-loader-spinner";
const AnimeList = ({ data, isLoading }) => {
  if (isLoading) return (
    <div className="loader">
      <Loader
        type="Rings"
        color="#00BFFF"
        height={300}
        width={300}
      />
    </div>
  );
  if (!isLoading && data === undefined) {
    return (
      <div className="result">
        <h1>Result doesn't exist</h1>
      </div>
    );
  }
  return (
    <div className="card-main">
      {data?.map((datas) => {
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
