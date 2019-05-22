import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0, 0.7)",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    height: "100%",
    width: "100%",
    top: 0
  },
  image: {
    display: "block",
    maxWidth: "80%",
    maxHeight: "90%",
    width: "auto",
    height: "auto"
  }
};

const Lightbox = ({ classes, gif, close }) => {
  if (!gif) return null;
  return (
    <div className={classes.root} onClick={close}>
      <img
        alt={gif.title}
        className={classes.image}
        onClick={event => event.stopPropagation()}
        src={gif.images.original.url}
        width={gif.images.original.width}
        height={gif.images.original.height}
      />
    </div>
  );
};

export default withStyles(styles)(Lightbox);
