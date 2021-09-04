import React from "react";
import AppProvider from "./components/context";
import Header from "./components/Header";
import Side from "./components/Side";
import Anime from "./components/Anime";
import Card from "./components/Card";
import { Button } from "@material-ui/core";

function App() {
  return (
    <>
      <Button color="primary">Hello World</Button>
      <main>
        <Header />
        <div style={{ display: "flex", width: "100%" }}>
          <Side />
          <Card />
        </div>
      </main>
    </>
  );
}

export default App;
