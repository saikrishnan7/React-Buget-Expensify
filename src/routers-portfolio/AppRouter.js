import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from '../components-portfolio/Contact';
import NotFound from '../components-portfolio/NotFound';
import Header from '../components-portfolio/Header';
import CurrentPortfolio from '../components-portfolio/CurrentPortfolio'
import Portfolio from '../components-portfolio/Portfolio'
import Dashboard from '../components-portfolio/Dashboard'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Dashboard} exact={true}/>
                <Route path="/portfolio/:id" component={CurrentPortfolio} />
                <Route path="/portfolio" component={Portfolio} exact={true}/>
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
            </Switch>  
        </div>
    </BrowserRouter>
);

export default AppRouter;