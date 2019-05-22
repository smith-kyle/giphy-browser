import { connect } from "react-redux";

import { isLoadingSelector } from "../../redux/selectors";
import Loading from "../presentational/Loading";

const mapStateToProps = state => ({
  isLoading: isLoadingSelector(state)
});

export default connect(mapStateToProps)(Loading);
