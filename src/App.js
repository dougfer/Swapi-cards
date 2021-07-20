import { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import './App.scss';
import Films from './pages/Films';
import Home from './pages/Home';
import People from './pages/People';
import Planets from './pages/Planets';
import Species from './pages/Species';
import Starships from './pages/Starships';
import Vehicles from './pages/Vehicles';

function App() {

  useEffect(() => {
    document.title = "Swapi Cards"
  }, [])

  return(
    <div className="main">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/people" component={ People } />
        <Route exact path="/films" component={ Films } />
        <Route exact path="/starships" component={ Starships } />
        <Route exact path="/vehicles" component={ Vehicles } />
        <Route exact path="/species" component={ Species } />
        <Route exact path="/planets" component={ Planets } />
      </Switch>
    </div>
  )
}

export default App;
