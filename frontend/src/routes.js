import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Components */
import Home from './components/Home';
import About from './components/About';
import Continue from './components/Continue';
import Warning from './components/Warning';
import UserVerification from './components/UserVerification';
import Welcome from './components/Welcome';
import IsBR from './components/IsBR';
import Gender from './components/Gender';
import Ethnic from './components/Ethnic';
import Disability from './components/Disability';
import School from './components/School';
import Location from './components/Location';
import Email from './components/Email';
import Parents from './components/Parents';
import Phone from './components/Phone';
import Course from './components/Course';
import MoreCourses from './components/MoreCourses';
import QuantCourses from './components/QuantCourses';
import Modality from './components/Modality';
import Pole from './components/Pole';
import CourseRating from './components/CourseRating';
import SameArea from './components/SameArea';
import Studying from './components/Studying';
import Campus from './components/Campus';
import CourseLevel from './components/CourseLevel';
import Demanding from './components/Demanding';
import Finally from './components/Finally';
import Hello from './components/Hello';
import Thankyou from './components/Thankyou';
import OurHistory from './components/OurHistory';
import End from './components/End';
import Reason from './components/Reason';
import Know from './components/Know';
import Feedback from './components/Feedback';


import history from './services/history';

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/about' component={About} />
            <Route path='/warning' component={Warning} />
            <Route path='/continue'component={Continue}/>
            <Route path='/user' component={UserVerification} />
            <Route path='/isbr' component={IsBR} />
           <Route path='/gender' component={Gender} />
            <Route path='/Ethnic' component={Ethnic} />
            <Route path='/welcome' component={Welcome} />
            <Route path='/email' component={Email} />
            <Route path='/parents' component={Parents} />
            <Route path='/school' component={School} />
            <Route path='/location' component={Location} />
            <Route path='/phone' component={Phone} />
            <Route path='/course' component={Course} />
            <Route path='/moreCourses' component={MoreCourses} />
            <Route path='/quantcourses' component={QuantCourses} />
            <Route path='/modality' component={Modality} />
            <Route path='/pole' component={Pole} />
            <Route path="/courserating" component={CourseRating} />
            <Route path="/samearea" component={SameArea} />
            <Route path="/studying" component={Studying} />
            <Route path="/courselevel" component={CourseLevel} />
            <Route path="/campus" component={Campus} />
            <Route path="/demanding" component={Demanding} />
            <Route path="/finally" component={Finally} />
            <Route path="/hello" component={Hello} />
            <Route path="/thankyou" component={Thankyou} />
            <Route path="/ourhistory" component={OurHistory} />
            <Route path="/end" component={End} />
            <Route path="/reason" component={Reason} />
            <Route path="/know" component={Know} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/disability" component={Disability} />


        </Switch>
    </Router>
)

export default Routes;