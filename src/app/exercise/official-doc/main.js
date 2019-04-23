import React from 'react';
import * as combine from './combine';
import { LoginControl, Mailbox, messages, Page } from './condition';
import { ActionLink, Toggle } from './event';
import { FlavorForm, NameForm, Reservation, SimpleForm } from './form';
import { Blog, doubled, listItems, NumberList, posts } from './list';
import * as search from './search';
import * as searchV1 from './search-v1';
import * as stateLift from './state-lift';
import ScrollToTop from '../../common/ScrollToTop';


function OfficialDoc() {
    return (
        <div>
            <h2>官方文档-核心概念</h2>
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
            <ScrollToTop />
        </div>
    )
}

export default OfficialDoc;