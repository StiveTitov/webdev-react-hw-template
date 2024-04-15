import renderer from "react-test-renderer";
import { Input } from ".";
import styles from './Search.module.css'

describe('Компанент- полосы регулировки звука', () => {
    it('корректно отрисовывает разметку с начальными значениями', () => {
      // Тестовый код
      const mockonChange= jest.fn();
      const mocksearchValue= jest.fn();
      const component = renderer.create(<Input 
        className={styles.search__text}
        type={"search"}
        placeholder={"Поиск"}
        name={"search"}
        value={mocksearchValue}
        min={50}
        max={90}
        onChange={mockonChange} />).toJSON();
  expect(component).toMatchSnapshot();
    });
   
    
   });