import React from "react";
import { useState } from "react";
const Anime = ({ name, handleNameChange, handleKeyDown }) => {
  return (
    <div className="form">
      <label className="label" htmlFor="search" name="search">
        Search
      </label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="death  Note"
        value={name}
        onChange={handleNameChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Anime;
