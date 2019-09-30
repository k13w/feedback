import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Components */
import Home from './components/Home';
import About from './components/About';
import Continue from './components/Continue';
import Warning from './components/Warning';
import UserVerification from './components/UserVerification';
import Welcome from './components/Welcome';
import School from './components/School';
import Email from './components/Email';
import Parents from './components/Parents';
import Phone from './components/Phone';
import history from './services/history';

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/about' component={About} />
            <Route path='/warning' component={Warning} />
            <Route path='/continue'component={Continue}/>
            <Route path='/user' component={UserVerification} />
            <Route path='/welcome' component={Welcome} />
            <Route path='/email' component={Email} />
            <Route path='/parents' component={Parents} />
            <Route path='/school' component={School} />
            <Route path='/phone' component={Phone} />

        </Switch>
    </Router>
)

export default Routes;