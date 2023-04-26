import styled from "styled-components";

const ProfileStatisticsListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style-type: none;
  background: #f4eded;
  padding: 20px;
  width: 100%;
`;

const ProfileStatisticsListItemLi = styled.li`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #dcb4b4;

  :last-child {
    border-right: none;
  }

  .label {
    color: #ca9191;
  }

  .quantity {
    margin-top: 10px;
    font-weight: bold;
  }
`;

export { ProfileStatisticsListUl, ProfileStatisticsListItemLi };
