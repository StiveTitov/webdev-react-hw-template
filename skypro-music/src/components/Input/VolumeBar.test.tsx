import renderer from "react-test-renderer";
import { VolumeBar } from ".";

describe('Компанент- полосы регулировки звука', () => {
    it('корректно отрисовывает разметку с начальными значениями', () => {
      // Тестовый код
      const component = renderer.create(<VolumeBar volume={50} handleVolume={10} />).toJSON();
  expect(component).toMatchSnapshot();
    });
   
    
   });