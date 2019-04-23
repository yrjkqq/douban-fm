import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Exercise from '../exercise/main';
import CSS3 from '../exercise/css3/main';
import OfficialDoc from '../exercise/official-doc/main';
import Html5 from '../exercise/html5/main';
import FM from '../fm/main';
import NoMatch from '../common/NoMatch';
import TestRouter from '../common/Test';

class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact render={() => (
                    <Redirect to="/exercise" />
                )} />
                <Route path="/exercise" exact component={Exercise} />
                <Route path="/exercise/css3" component={CSS3} />
                <Route path="/exercise/official-doc" component={OfficialDoc} />
                <Route path="/exercise/html5" component={Html5} />
                <Route path="/fm" component={FM} />
                {/* 需要传入其他参数时使用 render 属性 */}
                <Route path="/test" render={props => <TestRouter extra="test" {...props} />} />
                {/* 重定向 */}
                <Redirect from="/404" to="/" />
                {/* when none of the above match, <NoMatch> will be rendered */}
                <Route component={NoMatch} />
            </Switch>
        );
    }
}

export default Router;