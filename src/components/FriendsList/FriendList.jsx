import FriendListItem from "../FriendListItem/FriendListItem";
import { FriendListUl } from "./FriendList.styled";
import PropTypes from "prop-types";

function FriendList( { friends } ) {
  const result = friends.map( ( { avatar, name, isOnline, id } ) => {
    return (
      <FriendListItem friendAvatar={ avatar } friendName={ name } friendStatus={ isOnline } key={ id }/>
    )
  } )
  return (
    <FriendListUl>
      { result }
    </FriendListUl>
  )
}

export default FriendList;

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.string,
  id: PropTypes.string
}
