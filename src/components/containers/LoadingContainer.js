import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import { isLoadingSelector } from "../../redux/selectors";

const Loading = ({ isLoading }) => {
  return <div>{isLoading ? <CircularProgress /> : null}</div>;
};

const mapStateToProps = state => ({
  isLoading: isLoadingSelector(state)
});

export default connect(mapStateToProps)(props => <Loading {...props} />);
