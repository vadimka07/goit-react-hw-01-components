import StatisticsTitle from "../utils/StatisticsTitle";
import StatisticsItem from "../utils/StatisticsItem";
import PropTypes from "prop-types";


function Statistics( { title, stats } ) {
  return (
    <>
      <StatisticsTitle title={ title }/>
      <ul className="stat-list">
        <StatisticsItem listItems={ stats }/>
      </ul>
    </>
  )
}

export default Statistics;


Statistics.propTypes = {
  title: PropTypes.string
}
