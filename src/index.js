import React from 'react'
import { render } from 'react-dom'
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(rootReducer)

render(
    <Provider store = {store}>
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component = {About} />
        <Route path='/Contact' component={Contact} />
      </BrowserRouter>
      <App />
    </Provider>,
  document.getElementById('root')
)

