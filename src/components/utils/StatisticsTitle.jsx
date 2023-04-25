import PropTypes from "prop-types";

function StatisticsTitle( { title } ) {
  return (
    <h2 className="title">{ title }</h2>
  )
}

export default StatisticsTitle;

StatisticsTitle.propTypes = {
  title: PropTypes.string
}
