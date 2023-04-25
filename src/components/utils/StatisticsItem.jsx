import PropTypes, { shape } from "prop-types";

function StatisticsItem( { listItems } ) {
  return (
    listItems.map( ( { id, label, percentage } ) => {
      return (
        <li className="item" key={ id }>
          <span className="label">{ label }</span>
          <span className="percentage">{ percentage }</span>
        </li>
      )
    } )

  )
}

export default StatisticsItem;

StatisticsItem.propTypes = {
  listItems: PropTypes.arrayOf(
    shape( {
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number
    } )
  )
}
