import React, { Component } from 'react';
import HomeComponent from './HomeComponent';
import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent';
import ServicesComponent from './ServicesComponent';
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from './NotFound';
import DocsComponent from './DocsComponent';
import Greeting from './HooksReactOfficial/Greeting';
import Pagination from './pagination/Pagination'
import FirstComponent from './react-pagination/FirstComponent';
import ReactHooks from './EventAndHooks/ReactHooks';
import ReactEvent from './EventAndHooks/ReactEvent';
import LiveSearch from './LiveSearchComponent/LiveSearch';
import ChartGraph from './ChartGraph/ChartGraph';
class RouterComponent extends Component {
    state = {}
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/about" component={AboutComponent} />
                <Route exact path="/contact" component={ContactComponent} />
                <Route exact path="/services" component={ServicesComponent} />
                <Route exact path="/docs" component={DocsComponent} />
                <Route exact path="/greet" component={Greeting} />
                <Route exact path="/page" component={Pagination} />
                <Route exact path="/react-hooks" component={ReactHooks} />
                <Route exact path="/react-event" component={ReactEvent} />
                <Route exact path="/live-search" component={LiveSearch} />
                <Route exact path="/chart-graph" component={ChartGraph} />

                <Route component={NotFound} />
                <Redirect to="/" />
            </Switch>
        );
    }
}

export default RouterComponent;
