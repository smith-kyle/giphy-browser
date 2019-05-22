import React from "react";
import { connect } from "react-redux";
import {
  gifsSelector,
  windowWidthSelector,
  windowHeightSelector
} from "../../redux/selectors";
import { fetchGifs, setIsLoading, setSelectedGif } from "../../redux/actions";
import Gallery from "../presentational/Gallery";

const mapStateToProps = state => ({
  gifs: gifsSelector(state),
  windowHeight: windowHeightSelector(state),
  windowWidth: windowWidthSelector(state)
});

const mapDispatchToProps = dispatch => ({
  getNextPage: () => {
    dispatch(setIsLoading(true));
    dispatch(fetchGifs);
  },
  onClickImage: id => dispatch(setSelectedGif(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(props => (props.gifs.length > 0 ? <Gallery {...props} /> : null));
