import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home'
import YourMood from '../pages/YourMood'
import YourMoodDemo from '../pages/YourMoodDemo'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import SpotifyRedirect from '../pages/SpotifyRedirect'

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main">
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/redirect" component={SpotifyRedirect}/>
                        <Route path="/yourmood" component={YourMood}/>
                        <Route path="/about" component={About} />
                        <Route path="/demo" component={YourMoodDemo} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default AppRouter;