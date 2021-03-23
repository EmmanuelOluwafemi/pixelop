import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;