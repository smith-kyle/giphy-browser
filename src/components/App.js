import React, { useEffect } from "react";
import "./App.css";
import QueryBarContainer from "./containers/QueryBarContainer";
import LoadingContainer from "./containers/LoadingContainer";
import GalleryContainer from "./containers/GalleryContainer";
import { SET_WINDOW_DIMS } from "../redux/actionTypes";
import debounce from "lodash.debounce";
import store from "../redux/store";
import { fetchGifs } from "../redux/actions";
import LightboxContainer from "./containers/LightboxContainer";

const bootstrap = () => {
  const handleResize = debounce(
    () =>
      store.dispatch({
        type: SET_WINDOW_DIMS,
        payload: { height: window.innerHeight, width: window.innerWidth }
      }),
    100
  );
  store.dispatch(fetchGifs);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
};

function App() {
  useEffect(bootstrap, []);
  return (
    <div className="App">
      <QueryBarContainer>
        <div className="App-results">
          <GalleryContainer />
          <LoadingContainer />
        </div>
      </QueryBarContainer>
      <LightboxContainer />
    </div>
  );
}

export default App;
