import renderer from "react-test-renderer";
import { ProgressBar } from ".";

describe('Компанент- полосы прогресса', () => {
    it('корректно отрисовывает разметку с начальными значениями', () => {
      // Тестовый код
      const component = renderer.create(<ProgressBar duration={100} currentTime={0} handleSeek={50} />).toJSON();
  expect(component).toMatchSnapshot();
    });
   
    
   });