import PropTypes from "prop-types";
import {StatisticsTitleH2} from "./StatisticsTitleH2.styled";

function StatisticsTitle( { title } ) {
  return (
    <StatisticsTitleH2>{ title }</StatisticsTitleH2>
  )
}

export default StatisticsTitle;

StatisticsTitle.propTypes = {
  title: PropTypes.string
}
