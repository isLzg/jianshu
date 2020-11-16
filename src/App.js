import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { GlobalIcon } from './statics/iconfont/iconfont.js';
import store from './store/index'
import { BrowserRouter, Route } from 'react-router-dom'


import Header from './common/header/index'
import Home from './pages/home'
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Write from './pages/writer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
          </div>
        </BrowserRouter>
        <GlobalIcon />
      </Provider>
    )
  }
}

export default App;
