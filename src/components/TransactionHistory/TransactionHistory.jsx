import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";
import { TransactionHistoryTable,TransactionHistoryTh, TransactionHistoryThead } from "./TransactionHistory.styled";
function TransactionHistory( { items } ) {
  return (

    <TransactionHistoryTable>
      <TransactionHistoryThead>
      <tr>
        <TransactionHistoryTh>Type</TransactionHistoryTh>
        <TransactionHistoryTh>Amount</TransactionHistoryTh>
        <TransactionHistoryTh>Currency</TransactionHistoryTh>
      </tr>
      </TransactionHistoryThead>

      <tbody>
      <TransactionHistoryItem transactions={ items }/>
      </tbody>
    </TransactionHistoryTable>
  )
}

export default TransactionHistory;


