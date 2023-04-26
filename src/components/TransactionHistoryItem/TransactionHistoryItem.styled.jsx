import styled from "styled-components";


const TransactionHistoryTd = styled.td`
  text-align: center;
  color: #a0a0a8;
  padding: 10px 20px;
`;

const TransactionHistoryTr =styled.tr`
  &:nth-child(odd) {
    & ${ TransactionHistoryTd } {
      background-color: #c5cede;
    }
  }
`;
export { TransactionHistoryTd, TransactionHistoryTr };
