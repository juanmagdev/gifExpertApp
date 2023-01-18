import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe('Pruebas en <AddCategory/>', () => {

  const inputValue = 'Saitama';

  test('Debe de cambiar el valor de la caja de texto', () => {

    render(<AddCategory onNewCategory={() => { }} />);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe('Saitama');

  });

  test('Debe de llamar onNewCategory si el input tiene un valor', () => {
    //todo

    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug();

    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue); //la funcion ha sido llamada con el valor de la caja de texto
  });

  test('No debe de llamar onNewCategory si el input es vacio', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole('form');

    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
  })


})