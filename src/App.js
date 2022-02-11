import './Styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Auth from './Routes/Auth';
import Create from './Routes/Create';
import Detail from './Routes/Detail';
import ListView from './Routes/ListView';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path={'/'}>
          <Nav />
        </Route>
        <Route exact path={'/'}>
          <ListView />
        </Route>
        <Route exact path={'/auth'}>
          <Auth />
        </Route>
        <Route exact path={'/create'}>
          <Auth />
        </Route>
        <Route exact path={'/detail/:id'}>
          <Auth />
        </Route>
      </div>
      ;
    </Router>
  );
}

export default App;
