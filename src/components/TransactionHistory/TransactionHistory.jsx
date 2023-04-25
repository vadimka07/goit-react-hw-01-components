import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";

function TransactionHistory( { items } ) {
  return (

    <table className="transaction-history">
      <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
      </thead>

      <tbody>
      <TransactionHistoryItem transactions={ items }/>
      </tbody>
    </table>
  )
}

export default TransactionHistory;


