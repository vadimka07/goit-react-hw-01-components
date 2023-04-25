import PropTypes, { shape } from "prop-types";


function FriendListItem( { friendsList } ) {
  return (
    friendsList.map( ( { avatar, name, isOnline, id } ) => {
      return (
        <li className="item" key={ id }>
          <span className="status">{ isOnline }</span>
          <img className="avatar" src={ avatar } alt="User avatar" width="48"/>
          <p className="name">{ name }</p>
        </li>
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


