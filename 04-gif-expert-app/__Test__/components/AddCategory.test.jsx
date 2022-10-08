import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("pruebas en <AddCategory />", () => {
  test("debe de cambiar el valor de la caja de texto", () => {
    //se crea el sujeto de pruebas
    render(<AddCategory onNewCategory={() => {}} />);
    //screen.debug();
    //extraemos el input
    const input = screen.getByRole("textbox");
    //disparamos el evento
    fireEvent.input(input, { target: { value: "Saitama" } });
    //Verificamos lo que ocurra al ejecutar el evento
    expect(input.value).toBe("Saitama");
  });

  test("debe de llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "Saitama";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    //screen.debug() <-- puedo chequear que estableci el valor.
    fireEvent.submit(form);
    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("no debe llamar onNewCategory con input vacio", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");

    fireEvent.submit(form);

    //aplicamos negacion de toBeCalled
    expect(onNewCategory).not.toBeCalled();
    //expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});
