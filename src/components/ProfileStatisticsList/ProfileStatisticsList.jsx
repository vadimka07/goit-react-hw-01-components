import PropTypes from "prop-types";
import { ProfileStatisticsListContainer, ProfileStatisticsListItem } from "./ProfileStatisticsList.styled";

function ProfileStatisticsList( { stats:{followers, views, likes} } ) {

  return (
    <ProfileStatisticsListContainer>
      <ProfileStatisticsListItem>
        <span className="label">Followers</span>
        <span className="quantity">{ followers }</span>
      </ProfileStatisticsListItem>
      <ProfileStatisticsListItem>
        <span className="label">Views</span>
        <span className="quantity">{ views }</span>
      </ProfileStatisticsListItem>
      <ProfileStatisticsListItem>
        <span className="label">Likes</span>
        <span className="quantity">{ likes }</span>
      </ProfileStatisticsListItem>
    </ProfileStatisticsListContainer>
  )
}

export default ProfileStatisticsList;

ProfileStatisticsList.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number
}
