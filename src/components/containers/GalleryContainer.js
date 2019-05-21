import React from "react";
import { connect } from "react-redux";
import { gifsStateSelector } from "../../redux/selectors";
import Gallery from "../presentational/Gallery";

const mapStateToProps = state => ({
  gifs: gifsStateSelector(state)
});

export default connect(mapStateToProps)(props => <Gallery {...props} />);
