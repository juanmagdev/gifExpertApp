import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => {

  const url = 'htpp://pruebas.com/fornite';
  const title = 'Fornite';

  test('Debe hacer match con el snapshoot ', () => {
    const {container} = render(<GifItem title={title} url = {url}/>);
    expect(container).toMatchSnapshot();
  });
  
})
