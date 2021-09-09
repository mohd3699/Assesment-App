import './App.css';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import FirstAssesment from './Pages/FirstAssesment';
import { pagePaths } from '../src/utils/constent';
import Header from './Component/Header';
import Result from './Pages/Result/Result';
import Login from './Pages/Login-page/indes';
import FirstAssesmentselect from './Pages/Select-an-assesment';



function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Redirect exact path={pagePaths.root} to={pagePaths.login} />

          <Route path={pagePaths.login} component={Login} />

          <Route path={pagePaths.firstassesmentselect} component={FirstAssesmentselect} />
          <Route path={pagePaths.firstassesment} component={FirstAssesment} />
          <Route path={pagePaths.header} component={Header} />
          
          <Route path={pagePaths.result} component={Result} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
