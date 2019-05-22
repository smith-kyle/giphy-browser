import React, { useEffect } from "react";
import { connect } from "react-redux";
import debounce from "lodash.debounce";
import { withStyles } from "@material-ui/core/styles";

import QueryBarContainer from "./containers/QueryBarContainer";
import GalleryContainer from "./containers/GalleryContainer";
import { SET_WINDOW_DIMS } from "../redux/actionTypes";
import { fetchGifs, setIsLoading } from "../redux/actions";
import LightboxContainer from "./containers/LightboxContainer";

const mapDispatchToProps = dispatch => ({
  onComponentDidMount: () => {
    const handleResize = debounce(
      () =>
        dispatch({
          type: SET_WINDOW_DIMS,
          payload: { height: window.innerHeight, width: window.innerWidth }
        }),
      100
    );

    dispatch(setIsLoading(true));
    dispatch(fetchGifs);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }
});

const styles = {
  results: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    zIndex: 1
  }
};

const App = ({ classes, onComponentDidMount }) => {
  useEffect(onComponentDidMount, []);
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

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(App));
