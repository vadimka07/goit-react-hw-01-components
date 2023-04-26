import StatisticsTitle from "../StatisticsTitle/StatisticsTitle";
import StatisticsItem from "../StatisticsItem/StatisticsItem";
import PropTypes from "prop-types";
import { StatisticsContainer, StatisticsContainerList } from "./Statistics.styled";

function Statistics( { title, stats } ) {
  return (
    <>
      <StatisticsContainer>
        <StatisticsTitle title={ title }/>
        <StatisticsContainerList>
          <StatisticsItem listItems={ stats }/>
        </StatisticsContainerList>
      </StatisticsContainer>
    </>
  )
}

export default Statistics;


Statistics.propTypes = {
  title: PropTypes.string
}
