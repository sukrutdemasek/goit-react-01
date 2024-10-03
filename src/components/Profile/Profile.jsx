import "./Profile.css";
export default function Profile(props) {
  return (
    <div className="profile-div">
      <div className="profile-description">
        <img
          className="profile-image"
          src={props.image}
          alt="user image"
          width={256}
          height={256}
        ></img>
        <p className="profile-name">{props.name}</p>
        <p className="profile-tag">@{props.tag}</p>
        <p className="profile-location">{props.location}</p>
      </div>
      <ul className="profile-stats">
        <li>
          <span>Followers</span>
          <span className="stats-number">{props.stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className="stats-number">{props.stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className="stats-number">{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
