export const GifGrid = ({ category }) => {
  return (
    <>
      <h3>{category}</h3>
      {GifGrid.map((gif) => (
        <p>{gif}</p>
      ))}
    </>
  );
};
