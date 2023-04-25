import FriendListItem from "../FriendListItem/FriendListItem";

function FriendList( { friends } ) {
return (
  <ul className="friend-list">
    <FriendListItem friendsList={friends}/>
  </ul>
)
}

export default FriendList;
