import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import Cart from './components/Cart'
import ShoppingList from './components/ShoppingList'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/Cart' component={Cart} />
        <Route exact path='/ShoppingList' component={ShoppingList} />
        <Route exact path='/SignIn' component={SignIn} />
        <Route exact path='/SignUp' component={SignUp} />
    </Switch>
)

export default Router