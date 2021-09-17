import React from 'react'
import SignUp from '../components/auth/SignUp'
import SignIn from '../components/auth/SignIn'
import {Route, Switch} from "react-router-dom"
import UserGuide from './UserGuide'

export default function Landing() {
    return (<div>
        <Switch>
            <Route path="/signin">
                <SignIn/>
            </Route>
            <Route path="/signup">
                <SignUp/>
            </Route>
            <Route path="/" exact>
                <SignIn/>
            </Route>
        </Switch>
    </div>
    )
}
