import { connect } from "react-redux";
import {
  gifsSelector,
  windowWidthSelector,
  windowHeightSelector
} from "../../redux/selectors";
import { fetchGifs, setIsLoading, selectGif } from "../../redux/actions";
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
  onClickImage: id => dispatch(selectGif(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
