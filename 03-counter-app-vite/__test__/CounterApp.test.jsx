import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp.jsx";

describe("Pruebas en <CounterApp />", () => {
  const valor = 100;
  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={valor} />);

    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el valor inicial de 100", () => {
    render(<CounterApp value={100} />);

    expect(screen.getByText(100)).toBeTruthy();

    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      "100"
    );
  });

  test("debe de increemtnar con el boton +1 ", () => {
    //1. inicializamos el sujeto de pruebas
    render(<CounterApp value={10} />);
    //2. simulamos un click en el text +1
    fireEvent.click(screen.getByText("+1"));
    //3. esperamos encontrar un 11 en pantalla. etonces pregunto si existe al incrementar.
    expect(screen.getByText("11")).toBeTruthy();
  });

  test("debe de decrementar con el boton -1 ", () => {
    render(<CounterApp value={10} />);

    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("9")).toBeTruthy();
  });

  test("debe de mostrar el valor inicial con boton reset", () => {
    render(<CounterApp value={10} />);

    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    //screen.debug(); //aca podemos ver en la consola que ya subimos a 13 el contador.
    //fireEvent.click(screen.getByText("Reset"));

    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText("10")).toBeTruthy();
  });
});
