import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";
import { TransactionHistoryTable, TransactionHistoryTh, TransactionHistoryThead } from "./TransactionHistory.styled";
import PropTypes from "prop-types";
function TransactionHistory( { items } ) {
  const result = items.map( ( { id, type, amount, currency } ) => {
    return (
      <TransactionHistoryItem transactionsId={ id } transactionsType={ type } transactionsAmount={ amount }
                              transactionsCurrency={ currency } key={ id }/>
    )
  } )
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
      { result }
      </tbody>
    </TransactionHistoryTable>
  )
}

export default TransactionHistory;


TransactionHistory.propTypes = {
  items: PropTypes.array
}
