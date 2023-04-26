import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendsList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div style={{
      padding: '20px 0 20px',
    }}>
      <Profile username={ user.username } tag={ user.tag } location={ user.location } avatar={ user.avatar }
               stats={ user.stats }/>
      <Statistics title="Upload stats" stats={ data }/>
      <FriendList friends={ friends }/>
      <TransactionHistory items={ transactions }/>
    </div>
  );
};
