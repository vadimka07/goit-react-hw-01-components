import styled from "styled-components";

const TransactionHistoryTable = styled.table`
  max-width: 760px;
  margin: 0 auto;
  border: 1px solid rgb(197, 206, 222);
`;

const TransactionHistoryThead = styled.thead`
  background-color: #748dbe;
`;

const TransactionHistoryTh = styled.th`
  font-size: 16px;
  font-weight: 600;
  width: 186px;
  padding:10px 20px;
  text-transform: uppercase;
  color: #fff;
`;

export { TransactionHistoryTable, TransactionHistoryTh, TransactionHistoryThead };
