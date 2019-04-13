import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { element } from './app/exercise/jsx';
import { ActionLink, Toggle } from './app/exercise/event';
import { LoginControl, messages, Mailbox, Page } from './app/exercise/condition';
import { doubled, listItems, NumberList, posts, Blog } from './app/exercise/list';
import { SimpleForm, NameForm, FlavorForm, Reservation } from './app/exercise/form';
import * as stateLift from './app/exercise/state-lift';

import * as combine from './app/exercise/combine';
import * as search from './app/exercise/search';
import * as searchV1 from './app/exercise/search-v1';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<span role="img" aria-label="clap">👋</span>, document.getElementById('root'));

ReactDOM.render((
    <div>
        <div className="section">
            <h3>事件处理</h3>
            <div>
                <ActionLink />
            </div>
            <div>
                <Toggle />
            </div>
        </div>
        <div className="section">
            <h3>条件渲染</h3>
            <div>
                <LoginControl />
            </div>
            <div>
                <Mailbox unreadMessages={messages} />
            </div>
            <div>
                <Page />
            </div>
        </div>
        <div className="section">
            <h3>列表</h3>
            <div>
                <ul>{listItems}</ul>
            </div>
            <div>
                <NumberList numbers={doubled} />
            </div>
            <div>
                <Blog posts={posts} />
            </div>
        </div>
        <div className="section">
            <h3>表单</h3>
            <div>
                <SimpleForm />
            </div>
            <div>
                <NameForm></NameForm>
            </div>
            <div>
                <FlavorForm></FlavorForm>
            </div>
            <div>
                <Reservation></Reservation>
            </div>
        </div>
        <div className="section">
            <h3>状态提升</h3>
            <div>
                <stateLift.Calculator />
            </div>
        </div>
        <div className="section">
            <h3>组合vs继承</h3>
            <div>
                <combine.WelcomeDialog />
            </div>
            <div>
                <combine.App />
            </div>
            <div>
                <combine.SignUpDialog />
            </div>
        </div>
        <div className="section">
            <h3>React 哲学</h3>
            <div>
                <search.FilterableProductTable products={search.products} />
            </div>
            <div id="container">
                <searchV1.FilterableProductTable products={searchV1.PRODUCTS} />
            </div>
        </div>
    </div>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
