import React from "react";
import "./App.css";
import QueryBarContainer from "./containers/QueryBarContainer";
import LoadingContainer from "./containers/LoadingContainer";
import GalleryContainer from "./containers/GalleryContainer";

function App() {
  return (
    <div className="App">
      <QueryBarContainer>
        <div className="App-results">
          <GalleryContainer />
          <LoadingContainer />
        </div>
      </QueryBarContainer>
    </div>
  );
}

export default App;
