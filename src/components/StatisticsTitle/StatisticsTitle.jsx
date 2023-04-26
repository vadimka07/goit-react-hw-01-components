import PropTypes from "prop-types";
import {StatisticsTitleH2} from "./StatisticsTitleH2";

function StatisticsTitle( { title } ) {
  return (
     title  ? <StatisticsTitleH2>{ title }</StatisticsTitleH2> : ''

  )
}

export default StatisticsTitle;

StatisticsTitle.propTypes = {
  title: PropTypes.string
}
