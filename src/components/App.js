import React from "react";
import "./App.css";
import QueryBarContainer from "./containers/QueryBarContainer";
import LoadingContainer from "./containers/LoadingContainer";
import GalleryContainer from "./containers/GalleryContainer";

function App() {
  return (
    <div className="App">
      <QueryBarContainer />
      <GalleryContainer />
      <LoadingContainer />
    </div>
  );
}

export default App;
