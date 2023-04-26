import PropTypes, { shape } from "prop-types";
import { StatisticsItemLi } from "./StatisticsItem.styled";

function StatisticsItem( { listItemLabel, listItemPercentage } ) {
  return (
    <StatisticsItemLi>
      <span className="label">{ listItemLabel }</span>
      <span className="percentage">{ listItemPercentage }%</span>
    </StatisticsItemLi>
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

StatisticsItem.propTypes = {
  listItemLabel: PropTypes.string,
  listItemPercentage: PropTypes.number
}
