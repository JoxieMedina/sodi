import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import store from './store'
import registerServiceWorker from './registerServiceWorker'
import {fetchFaq} from './actions/faqActions'
import Donations from './containers/donations'
import './index.css'

store.dispatch(fetchFaq())

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={App}/>
            <Route path='/donations' exact component={Donations}/>
        </Switch>
    </BrowserRouter>
</Provider>, document.getElementById('root'))
registerServiceWorker()
