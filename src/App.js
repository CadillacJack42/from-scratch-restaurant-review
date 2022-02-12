import './Styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav';
import Auth from './Routes/Auth';
import Create from './Routes/Create';
import Detail from './Routes/Detail';
import ListView from './Routes/ListView';
import Logout from './Components/Logout';
import { useEffect, useState } from 'react';
import { fetchUser } from './services/fetch-utils';

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const currentUser = fetchUser();
    currentUser && setUser(currentUser);
  }, [user]);

  return (
    <Router>
      <div className="App">
        <Nav user={user} />
        <Switch>
          <Route exact path={'/'}>
            <ListView />
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
