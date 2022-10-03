import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp />", () => {
  const title = "Hola, Soy Goku";
  const subTitle = "Soy un subtitulo";

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el mensaje "Hola, Soy Goku', () => {
    render(<FirstApp title={title} />);

    expect(screen.getByText(title)).toBeTruthy();
    //screen.debug(); <-- para ver el objeto
  });

  test("debe de mostrar el titulo en un h1", () => {
    render(<FirstApp title={title} />);

    // intenta buscar un H1 (heading level 1) que contenga el titulo guardado en la variable title. si cambio el h1 por un h2 va a tirar error.
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    render(<FirstApp title={title} subTitle={subTitle} />);

    //devuelve un array y buscamos tener una cantidad de subtitulos que sea igual a 1. Cualquier otro valor tirara error.
    expect(screen.getAllByText(subTitle).length).toBe(1);
  });
});
