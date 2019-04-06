import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const ExpenseDashboardPage = () => (
    <div>
        this is from the future boyww
    </div>
)
const AddExpensePage = () => (
    <div>
        i will get your salary
    </div>
)
const EditExpensePage = () => (
    <div>
        I will edit uou
    </div>
)
const HelpPage = () => (
    <div>
        Thr lord of Helpers
    </div>
)
const NotFoundPage = () => (
    <div>
        404 here <a href="/">Home </a>
    </div>

)
const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ ExpenseDashboardPage } exact={true}/>
            <Route path ="/create" component={ AddExpensePage } exact={true}/>
            <Route path = "/edit" component={ EditExpensePage } />
            <Route path= "/help" component={ HelpPage } />
            <Route component={NotFoundPage}/>
        </Switch>

    </BrowserRouter>
)


ReactDOM.render((
    routes
), document.getElementById('app'))
