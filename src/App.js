import Home from './Home';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Chart from './Chart/Chart';
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Chart' component={Chart} />
      </Switch>
    </Router>
  );
}

export default App;
