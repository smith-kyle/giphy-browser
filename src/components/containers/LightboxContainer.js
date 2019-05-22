import { connect } from "react-redux";

import {
  selectedGifSelector,
  selectedGifUrlSelector
} from "../../redux/selectors";
import Lightbox from "../presentational/Lightbox";
import { setSelectedGif, setSelectedGifUrl } from "../../redux/actions";

const mapStateToProps = state => ({
  gif: selectedGifSelector(state),
  gifUrl: selectedGifUrlSelector(state)
});

const mapDispatchToProps = dispatch => ({
  close: () => {
    dispatch(setSelectedGif(null));
    dispatch(setSelectedGifUrl(null));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lightbox);
