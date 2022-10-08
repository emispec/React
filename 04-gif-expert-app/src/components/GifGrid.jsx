import PropTypes from "prop-types";

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

//Functional component
export const GifGrid = ({ category }) => {
  //custom hook
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading ? <h2>Loading ...</h2> : null}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
