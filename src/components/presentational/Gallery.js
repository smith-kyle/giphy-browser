import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const Gallery = ({ gifs }) => (
  <div className="Gallery">
    <GridList
      cellHeight={160}
      cols={3}
      style={{
        width: 500,
        height: 450
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
