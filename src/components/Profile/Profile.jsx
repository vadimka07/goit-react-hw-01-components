import ProfileStatisticsList from "../ProfileStatisticsList/ProfileStatisticsList";
import { ProfileContainer, ThumbnailAvatarContainer, Tag, Name, Location } from "./Profile.styled";
import PropTypes from "prop-types";

function Profile( { username, location, tag, avatar, stats } ) {

  return (
    <ProfileContainer>
      <div className="description">
        <ThumbnailAvatarContainer>
          <img
            src={ avatar }
            alt={ tag }
            className="avatar"
          />
        </ThumbnailAvatarContainer>
        <Name>{ username }</Name>
        <Tag>{ tag }</Tag>
        <Location>
          { location }
        </Location>
      </div>
      <ProfileStatisticsList stats={ stats }/>
    </ProfileContainer>
  )
}

export default Profile;


Profile.propTypes ={
  username:PropTypes.string.isRequired,
  location:PropTypes.string,
  tag:PropTypes.string,
  avatar:PropTypes.string,
  stats:PropTypes.object
}
