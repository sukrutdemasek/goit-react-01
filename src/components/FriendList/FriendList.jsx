import FriendListItem from "../FriendListItem/FriendListItem";
import "./FriendList.css";
export default function FriendList({ friends }) {
  return (
    <div>
      <ul className="friends-list">
        {friends.map((friend) => {
          return (
            <li>
              <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
