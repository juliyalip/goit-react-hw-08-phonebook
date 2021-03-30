import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import myStore from './redux/store';

console.log(myStore.store.getState());

ReactDOM.render(
	<React.StrictMode>
		<Provider store={myStore.store}>
			<PersistGate loading={null} persistor={myStore.persistor}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
