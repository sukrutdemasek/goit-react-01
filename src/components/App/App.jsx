import Profile from "../Profile/Profile";
import userdata from "../userdata.json";
import FriendList from "../FriendList/FriendList";
import friends from "../friends.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../transactions.json";
export default function App() {
  return (
    <div>
      <Profile
        name={userdata.username}
        tag={userdata.tag}
        location={userdata.location}
        image={userdata.avatar}
        stats={userdata.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
