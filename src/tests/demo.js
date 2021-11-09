// import React from 'react';

// import '@testing-library/jest-dom';
// import { shallow } from 'enzyme';

// describe('Pruebas en el archivo demo.test.js', () => {
//   test('deben de ser iguales los string', () => {
//     // 1. inicialización
//     const message = 'Hola Mundo';
//     // 2. estímulo
//     const message2 = `Hola Mundo`;
//     // 3. Observar el comportamiento
//     expect(message).toBe(message2);
//   });
// });

// // Comparar si dos objetos tienen las misma propiedades y valor es toEqual
// // Por que el toBe analiza con === pero la igualdad es por referencia en objetos y arreglos
// // {} === {} return false
// // Cuando se prueban promesas se usan done de parametro y se manda a llamar para indicar
// // que ya termino el proceso (done)  => done();
// // Cuando se usa el async usa antespara esperar el await async () => const url await getImagen() ... luego el expect

// // Testing with Ezyme
// describe('Pruebas en <PrimeraApp />', () => {
//   let wrapper = shallow(<CounterApp />); //intellisense
//   beforeEach(() => {
//     wrapper = shallow(<CounterApp />);
//   });
//   test('debe mostart <PrimerApp /> correctamente', () => {
//     const saludo = 'Hola, Soy Goku';
//     // const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
//     // expect(wrapper).toMachSnapshot();
//   });

//   test('debe de mostrar el subtitulo enviado por props', () => {
//     // const saludo = 'Hola, Soy Goku';
//     // const subTitulo = 'Soy un subtitulo';
//     // const wrapper = shallow(
//     //   <PrimeraApp saludo={saludo} subtitulo={subTitulo} />
//     // );
//     // const textoParrafo = wrapper.find('p').text(); // funciona como querySelector
//     // expect(textoParrafo).toBe(subTitulo);
//   });

//   // test('debe de mostrar el valor por defecto de 100', () => {
//   //   const wrapper = shallow(<CounterApp value={100} />);
//   //   // Se pone trim por que trae todo el texto de los elementos DOM
//   //   // Entonces a veces puede traer espacios.
//   //   const counterText = wrapper.find('h2').text().trim();
//   //   expect(counterText).toBe('100');
//   // });

//   // test('debe de incrementar con el boton + 1', () => {
//   //   const btn1 = wrapper.find('button').at(0).simulate('click');
//   //   const counterText = wrapper.find('h2').text().trim();
//   //   expect(counterText).toBe('11');
//   // });

//   // test('debe de reducir con el boton - 1', () => {
//   //   const btn1 = wrapper.find('button').at(2).simulate('click');
//   //   const counterText = wrapper.find('h2').text().trim();
//   //   expect(counterText).toBe('9');
//   // });

//   // test('debe de colocar el valor por defecto con el btn reset', () => {
//   //   const wrapper = shallow(<CounterApp value={105} />);
//   //   wrapper.find('button').at(0).simulate('click');
//   //   wrapper.find('button').at(0).simulate('click');
//   //   wrapper.find('button').at(1).simulate('click');

//   //   const counterText = wrapper.find('h2').text().trim();

//   //   expect(counterText).toBe('105');
//   // });
// });
