import { styled } from "styled-components";

type FilterMenuType = {
  top: number,
  left: number,

  list: Array<{ id: number, name: string }>;
}

export const WindowPosition = styled.div<{ top: number, left: number }>`
display: block;
  position: absolute;
  
   top: ${props => props.top}px;
  left: ${props => props.left}%;
  
  z-index: 2;
  
  width: auto;
  height: 205px;
  border-radius: 12px;
  background: #313131;
  padding: 34px;
  text-align: left;
`;

export default function FilterMenu({ top, left, list }: FilterMenuType) {
  return (
    <>
      <WindowPosition top={top} left={left}>
        <ul>

          {list.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </WindowPosition>
    </>
  );
}
