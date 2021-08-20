import React from 'react'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import {Route, Switch} from "react-router-dom"

export default function Landing() {
    return (<div>
        <Switch>
            <Route path="/signin">
                <SignIn/>
            </Route>
            <Route path="/signup">
                <SignUp/>
            </Route>
            <Route path="*">
                <SignIn/>
            </Route>
        </Switch>
    </div>
    )
}
