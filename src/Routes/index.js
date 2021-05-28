import {Switch} from 'react-router-dom';
import Router from './Router'
import SignIn from '../pages/SignIn'
import Dashboard from '../pages/Dashboard'

export default function Routes() {
    return (
        <Switch>
            <Router exact path="/" component={SignIn}/>
            <Router exact path="/dashboard" component={Dashboard} isPrivate/>
        </Switch>
    );
}