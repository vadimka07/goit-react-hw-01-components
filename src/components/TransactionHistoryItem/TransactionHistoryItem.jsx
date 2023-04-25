import PropTypes, { shape } from "prop-types";

function TransactionHistoryItem( { transactions } ) {
  return (
    transactions.map( ( { id, type, amount, currency } ) => {
      return (
        <tr key={ id }>
          <td>{ type }</td>
          <td>{ amount }</td>
          <td>{ currency }</td>
        </tr>

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
