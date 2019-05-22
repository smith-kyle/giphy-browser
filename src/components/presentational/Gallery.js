import React, { useRef, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";

import { QUERY_BAR_HEIGHT } from "../../constants";
import LoadingContainer from "../containers/LoadingContainer";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "scroll",
    justifyContent: "flex-start"
  },
  li: {
    width: "31%",
    height: 164,
    listStyle: "none",
    padding: "1%"
  },
  imageWrapper: {
    overflow: "hidden",
    cursor: "pointer",
    height: "100%",
    display: "block",
    position: "relative"
  },
  image: {
    top: "50%",
    position: "relative",
    transform: "translateY(-50%)",
    width: "100%"
  }
};

const Gallery = ({
  classes,
  gifs,
  getNextPage,
  onClickImage,
  windowHeight,
  windowWidth
}) => {
  const galleryEl = useRef(null);
  useEffect(() => {
    const handleScroll = ({
      target: { scrollTop, scrollHeight, clientHeight }
    }) => {
      if (scrollTop + clientHeight >= scrollHeight) {
        getNextPage();
      }
    };
    let lastSeenGalleryEl;
    if (galleryEl.current) {
      lastSeenGalleryEl = galleryEl.current;
      lastSeenGalleryEl.addEventListener("scroll", handleScroll);
    }
    return () =>
      lastSeenGalleryEl
        ? lastSeenGalleryEl.removeEventListener("scroll", handleScroll)
        : null;
  });
  return (
    <div
      className={classes.root}
      ref={galleryEl}
      style={{
        width: windowWidth,
        height: windowHeight - QUERY_BAR_HEIGHT
      }}
    >
      {gifs.map(gif => (
        <li className={classes.li} key={gif.id}>
          <div
            className={classes.imageWrapper}
            onClick={() => onClickImage(gif.id)}
          >
            <img
              className={classes.image}
              src={gif.images.fixed_height_small.url}
              style={{}}
              alt={gif.title}
            />
          </div>
        </li>
      ))}
      <LoadingContainer />
    </div>
  );
};

export default withStyles(styles)(Gallery);
