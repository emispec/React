import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("pruebas en <GifGrid />", () => {
  const category = "One punch";

  test("debe mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    //screen.debug();
    expect(screen.getByText("Loading ..."));
    expect(screen.getByText(category));
  });

  test("debe mostrar items cuando se cargan las imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://local.com/sait.jpg",
      },
      {
        id: "333",
        title: "Goku",
        url: "https://local.com/goku.jpg",
      },
    ];
    //cuando ya tenemos las imagenes, isloading esta en false !
    //le insertamos data ficticia al arreglo gifs
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);

    //screen.debug();

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
