import styled from "styled-components";

const StatisticsContainer = styled.div`
  margin: 20px auto;
  padding: 0;
  max-width: 400px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.37) 0px 5px 20px;
`;

const StatisticsContainerList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
`;

export { StatisticsContainer, StatisticsContainerList };
