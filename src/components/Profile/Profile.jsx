import StatisticsList from "../StatisticsList/StatisticsList";

function Profile( { username, location, tag, avatar, stats } ) {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={ avatar }
          alt={ tag }
          className="avatar"
        />
        <p className="name">{ username }</p>
        <p className="tag">{ tag }</p>
        <p className="location">{ location }</p>
      </div>
      <StatisticsList stats={ stats }/>
    </div>
  )
}

export default Profile;
