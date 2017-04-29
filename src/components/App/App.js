import React from 'react'
import { BrowserRouter } from 'react-router'
import 'normalize.css'
import styles from './App.css'
import Header from '../Header/Header'
import Routes from '../Routes/Routes'

const App = () => (
	<BrowserRouter>
		<div>
			<Header />
			<div className={styles.container}>
				<Routes />
			</div>
		</div>
	</BrowserRouter>
)

export default App