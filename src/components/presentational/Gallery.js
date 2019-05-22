import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { withStyles } from "@material-ui/core/styles";
import { QUERY_BAR_HEIGHT } from "../../redux/constants";

const NUM_COLS = 3;

const Gallery = ({ gifs, windowHeight, windowWidth }) => (
  <div className="Gallery">
    <GridList
      cellHeight={160}
      cols={NUM_COLS}
      style={{
        width: windowWidth,
        height: windowHeight - QUERY_BAR_HEIGHT
      }}
    >
      {gifs.map(gif => (
        <GridListTile key={gif.id} cols={1}>
          <img src={gif.images.fixed_height_small.url} alt={gif.title} />
        </GridListTile>
      ))}
    </GridList>
  </div>
);

export default Gallery;
