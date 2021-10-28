import '@testing-library/jest-dom';

describe('Pruebas en el archivo demo.test.js', () => {
  test('deben de ser iguales los string', () => {
    // 1. inicialización
    const message = 'Hola Mundo';
    // 2. estímulo
    const message2 = `Hola Mundo`;
    // 3. Observar el comportamiento
    expect(message).toBe(message2);
  });
});

// Comparar si dos objetos tienen las misma propiedades y valor es toEqual
// Por que el toBe analiza con === pero la igualdad es por referencia en objetos y arreglos
// {} === {} return false
// Cuando se prueban promesas se usan done de parametro y se manda a llamar para indicar
// que ya termino el proceso (done)  => done();
// Cuando se usa el async usa antespara esperar el await async () => const url await getImagen() ... luego el expect
