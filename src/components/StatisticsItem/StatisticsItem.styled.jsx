import styled from "styled-components";
import GetRandomHexColor from "../utils/GetRandomColor";

const StatisticsItemLi = styled.li`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  background-color: ${ GetRandomHexColor };
  width: 20%;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
  color: rgb(171 162 162);
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.37) 3px 1px 5px;
    color: currentColor;
  }
  .label {
    font-size: 16px;
  }

  .percentage {
    font-size: 24px;
  }
`;


export { StatisticsItemLi };
