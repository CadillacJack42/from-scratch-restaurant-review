import './Styles/App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Nav from './Components/Nav';
import Auth from './Routes/Auth';
import Create from './Routes/Create';
import Detail from './Routes/Detail';
import ListView from './Routes/ListView';
import Logout from './Components/Logout';
import { useEffect, useState } from 'react';
import { fetchUser } from './services/fetch-utils';

function App() {
  const [user, setUser] = useState('');
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    let unmounted = false;
    const currentUser = fetchUser();
    currentUser && setUser(currentUser);
    return () => {
      unmounted = true;
    };
  }, [user]);

  return (
    <Router>
      <div className="App">
        <h1>Cadillac Jacks Restaurant Reviewer</h1>
        <div>
          <Link to={'/'}>Home</Link> {' | '}
          {!user && <Link to={'/auth'}>SignIn/SignUp</Link>}
          {user && <Link to={'/create'}>Create New Resaurant</Link>}
          {user && ' | '}
          {user && <Link to={'/logout'}>Logout</Link>}
        </div>
        {/* <Route>
          <Nav user={user} />
        </Route> */}
        <Switch>
          <Route exact path={'/'}>
            <ListView setRestaurant={setRestaurant} restaurant={restaurant} />
          </Route>
          <Route exact path={'/auth'}>
            <Auth setUser={setUser} />
          </Route>
          <Route exact path={'/create'}>
            <Create user={user} />
          </Route>
          <Route exact path={'/detail/:id'}>
            <Detail user={user} />
          </Route>
          <Route exact path={'/logout'}>
            <Logout setUser={setUser} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
