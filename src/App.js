import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Header from './common/header';
import Home from '../src/pages/home';
import Detail from '../src/pages/detail/loadable';
import Login from '../src/pages/login';
import Write from '../src/pages/write/';
import RecommendWrite from '../src/pages/recommendWriter';

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
              <Route path='/recommendwriter' exact component={RecommendWrite}></Route>
    	       </div>
          </BrowserRouter>
            
      </Provider>
    );
  }
}

export default App;
