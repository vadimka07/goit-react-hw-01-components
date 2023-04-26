import PropTypes from "prop-types";
import { ProfileStatisticsListUl, ProfileStatisticsListItemLi } from "./ProfileStatisticsList.styled";

function ProfileStatisticsList( { stats } ) {
  const statsKey = Object.keys( stats );
  const result = statsKey.map( ( key ) => {
    return (
      <ProfileStatisticsListItemLi key={ key }>
        <span className="label">{ key }</span>
        <span className="quantity">{ stats[key] }</span>
      </ProfileStatisticsListItemLi>
    )
  } )
  return (
    <ProfileStatisticsListUl>
      { result }
    </ProfileStatisticsListUl>
  )
}

export default ProfileStatisticsList;

ProfileStatisticsList.propTypes = {
  stats: PropTypes.object
}
