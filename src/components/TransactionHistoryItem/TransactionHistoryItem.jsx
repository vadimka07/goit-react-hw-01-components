import PropTypes, { shape } from "prop-types";
import { TransactionHistoryTd, TransactionHistoryTr } from "./TransactionHistoryItem.styled";

function TransactionHistoryItem( { transactionsType, transactionsAmount, transactionsCurrency } ) {
  return (
    <TransactionHistoryTr>
      <TransactionHistoryTd>{ transactionsType }</TransactionHistoryTd>
      <TransactionHistoryTd>{ transactionsAmount }</TransactionHistoryTd>
      <TransactionHistoryTd>{ transactionsCurrency }</TransactionHistoryTd>
    </TransactionHistoryTr>
  )
}

export default TransactionHistoryItem;


TransactionHistoryItem.propTypes = {
  transactionsType: PropTypes.string,
  transactionsAmount: PropTypes.string,
  transactionsCurrency: PropTypes.string
}
