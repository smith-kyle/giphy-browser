import React from "react";
import { connect } from "react-redux";
import { querySelector } from "../../redux/selectors";
import { setQuery } from "../../redux/actions";
import QueryBar from "../presentational/QueryBar";

const mapStateToProps = state => ({
  query: querySelector(state)
});

const mapDispatchToProps = {
  onChange: setQuery
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(props => <QueryBar {...props} />);
