import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    minHeight: 100
  }
};

const Loading = ({ classes, color, isLoading }) => (
  <div className={classes.root}>
    {isLoading ? <CircularProgress color={color} /> : null}
  </div>
);

export default withStyles(styles)(Loading);
