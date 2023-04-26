import FriendListItem from "../FriendListItem/FriendListItem";
import { FriendListContainer } from "./FriendList.styled";
function FriendList( { friends } ) {
return (
  <FriendListContainer>
    <FriendListItem friendsList={ friends }/>
  </FriendListContainer>
)
}

export default FriendList;
