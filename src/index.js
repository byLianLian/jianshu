import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Globalstyle } from './style';
import { Globalicon } from './static/iconfont/iconfont';
import App from './App';

const APP = (
	<Fragment>
		<Globalstyle />
		<Globalicon />
		<App />
	</Fragment>
)
ReactDOM.render(APP, document.getElementById('root'));
