import { Component } from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'

export class App extends Component {
	constructor(props) {
		super(props)
		console.log("props", props);
		this.state = {
			allSkiDays: [
				{
					resort: "Squaw Valley",
					date: "2016-01-02",
					powder: true,
					backcountry: false
				}
			]
		}
		this.addDay = this.addDay.bind(this)
	}

	countDays(filter) {
		const { allSkiDays } = this.state
		return allSkiDays.filter(
			(day) => (filter) ? day[filter] : day).length
	}

	addDay(newDay) {
		console.log('addDay: ', newDay);
		this.setState({
			allSkiDays: [
				...this.state.allSkiDays,
				newDay
			]
		})
	}

	getFilter(){
		var url = window.location.pathname;
		var filter = '';
		if (url.indexOf('list-days/') > 0) {
			filter = url.split('/').pop()
			console.log('filter=', filter);
		}
		return filter;
	}

	render() {
		return (
			<div className="app">
				<Menu />
			{(this.props.location.pathname === "/") ?
			  <SkiDayCount total={this.countDays()}
							 powder={this.countDays(
							 		"powder"
							 	)}
							 backcountry={this.countDays(
							 		"backcountry"
							 	)}/> :
			 (this.props.location.pathname === "/add-day") ?
			 	<AddDayForm onNewDay={this.addDay}/> :
					<SkiDayList days={this.state.allSkiDays}
				 				filter={this.getFilter()}/>
							//filter={this.props.params.filter}/>
			}

			</div>
		)
	}
}
