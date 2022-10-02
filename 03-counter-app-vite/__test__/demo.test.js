describe("Pruebas en <DemoComponente />", () => {
  test("esta prueba no debe de fallar", () => {
    //1.inicializacion
    const msg1 = "hola mundo";

    //2.estimulo
    const msg2 = msg1.trim();

    //3.observar comportamiento esperado
    expect(msg1).toBe(msg2);
  });
});
