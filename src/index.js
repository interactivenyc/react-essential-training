import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import './stylesheets/index.scss'
import { App } from './components/App'
import { Whoops404 } from './components/Whoops404'
import { Route, Router, BrowserRouter, Switch  } from 'react-router-dom'


window.React = React

render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App}/>
			// <Route path="/list-days:filter" component={App} />
			<Route path="/list-days" component={App}/>
			<Route path="/add-day" component={App}/>
			<Route path="*" component={Whoops404}/>
		</Switch>
	</BrowserRouter>,
	document.getElementById('react-container')
)
