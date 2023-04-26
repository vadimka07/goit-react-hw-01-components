import PropTypes from "prop-types";
import {StatisticsTitleStyle} from "./StatisticsTitle.styled";

function StatisticsTitle( { title } ) {
  return (
    <StatisticsTitleStyle>{ title }</StatisticsTitleStyle>
  )
}

export default StatisticsTitle;

StatisticsTitle.propTypes = {
  title: PropTypes.string
}
