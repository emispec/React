import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    //pregunta si la categoria existe. si existe retorna, y sino se agrega la nueva categoria.
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
    //categories.push("Valorant"); NO USAR PUSH porque genera una mutacion. debemos crear un nuevo arreglo. no mutar un arr ya existente.
    //forma 1 de hacerlo:
    //setCategories([...categories, "valorant"]); //extendemos el arr categories y le sumamos el nuevo elemento.
    //forma 2:
    //setCategories((cat) => [...cat, "Valorant"]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory //setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
        // es lo mismo que poner { onAddCategory }
        //value o event, cualquier nombre no importa.
      />
      {/* Listado de gif */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* Gif item */}
    </>
  );
};
