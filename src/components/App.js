import React, { useEffect } from "react";
import QueryBarContainer from "./containers/QueryBarContainer";
import GalleryContainer from "./containers/GalleryContainer";
import { SET_WINDOW_DIMS } from "../redux/actionTypes";
import debounce from "lodash.debounce";
import store from "../redux/store";
import { fetchGifs, setIsLoading } from "../redux/actions";
import LightboxContainer from "./containers/LightboxContainer";
import { withStyles } from "@material-ui/core/styles";

const bootstrap = () => {
  const handleResize = debounce(
    () =>
      store.dispatch({
        type: SET_WINDOW_DIMS,
        payload: { height: window.innerHeight, width: window.innerWidth }
      }),
    100
  );

  store.dispatch(setIsLoading(true));
  store.dispatch(fetchGifs);

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
};

const styles = {
  results: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    zIndex: 1
  }
};

const App = ({ classes }) => {
  useEffect(bootstrap, []);
  return (
    <div>
      <QueryBarContainer>
        <div className={classes.results}>
          <GalleryContainer />
        </div>
      </QueryBarContainer>
      <LightboxContainer />
    </div>
  );
};

export default withStyles(styles)(App);
