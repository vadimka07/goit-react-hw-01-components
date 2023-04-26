import PropTypes from "prop-types";
import { FriendListItemLi, Status, FriendListItemThumbImage } from "./FriendListItem.styled";

function FriendListItem( { friendStatus, friendAvatar, friendName } ) {
  return (
    <FriendListItemLi>
      <Status isOnline={ friendStatus }></Status>
      <FriendListItemThumbImage isOnline={ friendStatus }>
        <img className="avatar" src={ friendAvatar } alt="User avatar" width="48"/>
      </FriendListItemThumbImage>
      <p className="name">{ friendName }</p>
    </FriendListItemLi>
  )
}

export default FriendListItem;

FriendListItem.propTypes = {
  friendStatus: PropTypes.bool,
  friendAvatar: PropTypes.string,
  friendName: PropTypes.string,
}


