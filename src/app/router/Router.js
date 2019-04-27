import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Exercise from '../exercise/main';
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
                <Route path="/exercise" component={Exercise} />
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