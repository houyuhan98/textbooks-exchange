import React, { Suspense } from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import LoginPage from "./views/LoginPage/LoginPage"
import RegisterPage from "./views/RegisterPage/RegisterPage"
import NavBar from "./views/NavBar/NavBar"
import Auth from "./auth"
import Footer from "./views/Footer/Footer"



const App = () => {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/Home" component={Auth(Home, null)} />
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route component={NotFound}/>
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
