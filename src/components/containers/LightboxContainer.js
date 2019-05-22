import React from "react";
import { connect } from "react-redux";
import { selectedGifSelector } from "../../redux/selectors";
import Lightbox from "../presentational/Lightbox";
import { setSelectedGif } from "../../redux/actions";

const mapStateToProps = state => ({
  gif: selectedGifSelector(state)
});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(setSelectedGif(null))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(props => <Lightbox {...props} />);
