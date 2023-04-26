import PropTypes, { shape } from "prop-types";
import { StatisticsItemStyle } from "./StatisticsItem.styled";

function StatisticsItem( { listItems } ) {
  return (
    listItems.map( ( { id, label, percentage } ) => {
      return (
        <StatisticsItemStyle key={ id }>
          <span className="label">{ label }</span>
          <span className="percentage">{ percentage }%</span>
        </StatisticsItemStyle>
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
