import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Loading from "./Loading";

const styles = {
  root: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0, 0.7)",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    height: "100%",
    width: "100%",
    top: 0,
    zIndex: 3
  },
  image: {
    display: "block",
    maxWidth: "80%",
    maxHeight: "90%",
    width: "auto",
    height: "auto"
  }
};

const Lightbox = ({ classes, gif, gifUrl, close }) => {
  if (!gif) return null;
  return (
    <div className={classes.root} onClick={close}>
      {gifUrl ? (
        <img
          alt={gif.title}
          className={classes.image}
          onClick={event => event.stopPropagation()}
          src={gifUrl}
          width={gif.images.original.width}
          height={gif.images.original.height}
        />
      ) : (
        <Loading color="secondary" isLoading />
      )}
    </div>
  );
};

export default withStyles(styles)(Lightbox);
