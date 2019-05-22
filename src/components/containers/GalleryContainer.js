import React from "react";
import { connect } from "react-redux";
import {
  gifsStateSelector,
  windowWidthSelector,
  windowHeightSelector
} from "../../redux/selectors";
import Gallery from "../presentational/Gallery";

const mapStateToProps = state => ({
  gifs: gifsStateSelector(state),
  windowHeight: windowHeightSelector(state),
  windowWidth: windowWidthSelector(state)
});

export default connect(mapStateToProps)(props =>
  props.gifs.length > 0 ? <Gallery {...props} /> : null
);
