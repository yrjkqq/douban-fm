import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../common/nav-bar';
import { Switch, Route } from 'react-router-dom';
import TodoList from './redux/index';
import CSS3 from './css3/main';
import OfficialDoc from './official-doc/main';
import Html5 from './html5/main';
import ReduxAsync from './redux-async/index';

export default function Exercise(props) {
    return (
        <div>
            <NavBar />
            <h3>练习</h3>
            <ol>
                <li>
                    <Link to="/exercise/official-doc">official doc</Link>
                </li>
                <li>
                    <Link to="/exercise/css3">css3</Link>
                </li>
                <li>
                    <Link to="/exercise/html5">html5</Link>
                </li>
                <li>
                    <Link to="/exercise/redux">TodoList-redux</Link>
                </li>
                <li>
                    <Link to="/exercise/redux-async">Async-redux</Link>
                </li>
            </ol>
            <Switch>
                <Route path="/exercise/redux" component={TodoList} />
                <Route path="/exercise/redux-async" component={ReduxAsync} />
                <Route path="/exercise/css3" component={CSS3} />
                <Route path="/exercise/official-doc" component={OfficialDoc} />
                <Route path="/exercise/html5" component={Html5} />
            </Switch>
        </div>
    )
}