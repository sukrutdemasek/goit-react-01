import "./FriendListItem.css";

export default function FriendListItem(props) {
  return (
    <div className="friendlist-item">
      <img src={props.avatar} alt="Avatar" width="48" />
      <p className="friendList-name">{props.name}</p>
      <p
        className={`friendList-isOnline ${
          props.isOnline ? "online" : "offline"
        }`}
      >
        {props.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
