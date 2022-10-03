import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp />", () => {
  // test("debe de hacer match con el snapshot", () => {
  //   const title = "Hola, titulo desde el test";
  //   const { container } = render(<FirstApp title={title} />);

  //   expect(container).toMatchSnapshot();
  // });

  test("debe mostrar el titulo en un h1", () => {
    const title = " Hola, probando test 2";
    const { container, getByTestId } = render(<FirstApp title={title} />);

    // expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toContain(title);

    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    const title = "Hola, Soy Goku";
    const subTitle = "Soy un subtitulo";
    const { getAllByText, getByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );

    //espero que exista
    expect(getByText(title)).toBeTruthy();
    //espero que haya 1 elementos subtitulo (el getallbytext devuelve un array entonces por eso le hago length.)
    expect(getAllByText(subTitle).length).toBe(1);
  });
});
