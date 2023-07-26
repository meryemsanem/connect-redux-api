import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './redux/users/usersSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log('State', state);

  if (state.user.isLoading) {
    return <h1>Loading users..</h1>;
  }

  return (
    <div className="app">
      <button onClick={(e) => dispatch(fetchUsers())}> Users</button>
      {state.user.data &&
        state.user.data.results.map((e) => (
          <li>
            {e.name.title} {e.name.first} {e.name.last} {e.name.gender} {e.name.location} {e.gender} {e.email}
          </li>
        ))}
    </div>
  );
}

export default App;
