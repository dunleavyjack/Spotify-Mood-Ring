import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import RedirectPage from '../components/RedirectPage';
import Dashboard from '../components/Dashboard';
import NotFound from '../components/NotFound';
import AnalysisPage from '../components/AnalysisPage'

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main">
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/redirect" component={RedirectPage}/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/analysis" component={AnalysisPage}/>
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default AppRouter;