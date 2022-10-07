import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Hasbulla"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <div className="header">
        <h1>The GIF App</h1>
        <img
          src="https://imageup.me/images/hasb.png"
          alt="hasb"
          className="hasb"
        />
      </div>

      {/* Input */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {/* Listado de gif */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* Gif item */}
    </>
  );
};
