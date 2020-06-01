import React from 'react';
import './App.css';
import Nav from './components/shared/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import DashBoard from './components/dashboard/DashBoard';
import CreateWatch from './components/dashboard/dashboardoperations/CreateWatch';
import NotFound from './components/shared/NotFound';
import {Provider} from 'react-redux';
import store from './Store';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Route path="/" component={Nav} />
    <Switch>
    <Route path="/" exact component={Welcome} />
    <Route path="/dashboard" exact component={DashBoard} />
    <Route path="/createwatch" exact component={CreateWatch} />
    <Route path="/" component={NotFound} />
    </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
