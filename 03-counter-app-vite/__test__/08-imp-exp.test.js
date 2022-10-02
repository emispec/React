import {
  getHeroeById,
  getHeroesByOwner,
} from "../src/base-pruebas/08-imp-exp.js";

describe("pruebas en 08-imp-exp", () => {
  test("getHeroeById debe de retornar un heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);
    //console.log(hero);

    //toEqual porque estamos comparando un objeto.
    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });

    //Ahora le mandamos un ID inexistente y esperamos q devuelva un null/undefined/false.

    const id2 = 100;
    const hero2 = getHeroeById(id2);

    expect(hero2).toBeFalsy();
  });

  test("getHeroesByOwner regresa heroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual([
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ]);
  });
});
