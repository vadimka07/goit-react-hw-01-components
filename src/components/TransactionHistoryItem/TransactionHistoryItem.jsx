import PropTypes, { shape } from "prop-types";
import { TransactionHistoryTd, TransactionHistoryTr } from "./TransactionHistoryItem.styled";

function TransactionHistoryItem( { transactions } ) {
  return (
    transactions.map( ( { id, type, amount, currency } ) => {
      return (
        <TransactionHistoryTr key={ id }>
          <TransactionHistoryTd>{ type }</TransactionHistoryTd>
          <TransactionHistoryTd>{ amount }</TransactionHistoryTd>
          <TransactionHistoryTd>{ currency }</TransactionHistoryTd>
        </TransactionHistoryTr>

      )
    } )
  )
}

export default TransactionHistoryItem;


TransactionHistoryItem.propTypes = {
  transactions: PropTypes.arrayOf(
    shape( {
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string
    } )
  ),
}
