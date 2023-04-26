import StatisticsTitle from "../StatisticsTitle/StatisticsTitle";
import StatisticsItem from "../StatisticsItem/StatisticsItem";
import PropTypes from "prop-types";
import { StatisticsContainer, StatisticsListUl } from "./Statistics.styled";

function Statistics( { title, stats } ) {
  const result = stats.map( ( { id, label, percentage } ) => {
    return (
      <StatisticsItem listItemLabel={ label } listItemPercentage={ percentage } key={ id }/>
    )
  } )
  return (
    <>
      <StatisticsContainer>
        <StatisticsTitle title={ title }/>
        <StatisticsListUl>
          { result }
        </StatisticsListUl>
      </StatisticsContainer>
    </>
  )
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats:PropTypes.array
}
