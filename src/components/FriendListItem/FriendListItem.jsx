import PropTypes, { shape } from "prop-types";
import { FriendListItemStyle, Status, FriendListItemThumbImage } from "./FriendListItem.styled";

function FriendListItem( { friendsList } ) {
  return (
    friendsList.map( ( { avatar, name, isOnline, id } ) => {
      return (
        <FriendListItemStyle key={ id }>
          <Status isOnline={ isOnline }></Status>
          <FriendListItemThumbImage isOnline={ isOnline }>
            <img className="avatar" src={ avatar } alt="User avatar" width="48"/>
          </FriendListItemThumbImage>
          <p className="name">{ name }</p>
        </FriendListItemStyle>
      )

    } )
  )
}

export default FriendListItem;

FriendListItem.propTypes = {
  friendsList: PropTypes.arrayOf(
    shape( {
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    } )
  )
}


