import React, { useEffect } from "react";
import { useContext, useState, useRef } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [top, setTop] = useState([]);
  const getTop = async () => {
    try {
      setLoading(true);
      const respone = await fetch(
        "https://api.jikan.moe/v3/top/anime/1/bypopularity"
      );
      const data = await respone.json();

      setTop(data.top.slice(0, 5));
      //return data.top.slice(0,5);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AppContext.Provider
      value={{
        getTop,
        top,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
