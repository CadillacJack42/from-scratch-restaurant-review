import './Styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav';
import Auth from './Routes/Auth';
import Create from './Routes/Create';
import Detail from './Routes/Detail';
import ListView from './Routes/ListView';
import Logout from './Components/Logout';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* <Route path={'/'}>
        </Route> */}
        <Switch>
          <Route exact path={'/'}>
            <ListView />
          </Route>
          <Route exact path={'/auth'}>
            <Auth />
          </Route>
          <Route exact path={'/create'}>
            <Create />
          </Route>
          <Route exact path={'/detail/:id'}>
            <Detail />
          </Route>
          <Route exact path={'/logout'}>
            <Logout />
          </Route>
        </Switch>
      </div>
      ;
    </Router>
  );
}

export default App;
