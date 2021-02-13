import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home'
import YourMood from '../components/YourMood'
import About from '../components/About'
import NotFound from '../components/NotFound'
import RedirectPage from '../components/RedirectPage'

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main">
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/redirect" component={RedirectPage}/>
                        <Route path="/yourmood" component={YourMood}/>
                        <Route path="/about" component={About} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default AppRouter;