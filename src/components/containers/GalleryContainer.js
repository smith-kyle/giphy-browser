import { connect } from "react-redux";

import {
  uniqueGifsSelector,
  windowWidthSelector,
  windowHeightSelector
} from "../../redux/selectors";
import { fetchGifs, setIsLoading, selectGif } from "../../redux/actions";
import Gallery from "../presentational/Gallery";

const mapStateToProps = state => ({
  gifs: uniqueGifsSelector(state),
  windowHeight: windowHeightSelector(state),
  windowWidth: windowWidthSelector(state)
});

const mapDispatchToProps = dispatch => ({
  getNextPage: () => {
    dispatch(setIsLoading(true));
    dispatch(fetchGifs);
  },
  onClickImage: id => dispatch(selectGif(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
