import { getGifs } from "../../src/helpers/getGifs";

describe("pruebas en getGifs()", () => {
  test("debe retornar un arreglo de gif", async () => {
    const gifs = await getGifs("Dragon Ball");
    //nos aseguramos que el array que se retorna es mayor a 0.
    expect(gifs.length).toBeGreaterThan(0);
    //y aca preguntamos el formato de lo que llega
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
