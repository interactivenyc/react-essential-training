import { Component } from 'react'
import PropTypes from 'prop-types'

const tahoeResorts = [
	"Alpine Meadows",
	"Boreal",
	"Diamond Peak",
	"Donner Ski Ranch",
	"Heavenly",
	"Homewood",
	"Kirkwood",
	"Mt. Rose",
	"Northstar",
	"Squaw Valley",
	"Sugar Bowl"
]

class Autocomplete extends Component {

	get value() {
		return this.refs.inputResort.value
	}

	set value(inputValue) {
		this.refs.inputResort.value = inputValue
	}

	render() {
		return (
			<div>
				<input ref="inputResort"
					   type="text"
					   list="tahoe-resorts" />
				<datalist id="tahoe-resorts">
					{this.props.options.map(
						(opt, i) =>
						<option key={i}>{opt}</option>)}
				</datalist>
			</div>
		)
	}
}

export class AddDayForm extends Component {

	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)
		console.log('props: ', props);
	}

	submit = (e) => {
		e.preventDefault()
		console.log('submit: ', this.refs.inputResort.value);
		this.props.onNewDay({
			resort: this.refs.inputResort.value,
			date: date.value,
			powder: powder.checked,
			backcountry: backcountry.checked
		})
		this.refs.inputResort.value = ''
		date.value = ''
		powder.checked = false
		backcountry.checked = false

	}

	render() {

		const { resort, date, powder, backcountry } = this.props

		return (
			<form onSubmit={this.submit} className="add-day-form">

				<label htmlFor="resort">Resort Name</label>
					<Autocomplete options={tahoeResorts}
						   		  ref="inputResort"/>

				<label htmlFor="date">Date</label>
				<input id="date"
					   type="date"
					   required
					   defaultValue={date}
					   ref="date"/>

				<div>
					<input id="powder"
						   type="checkbox"
						   defaultChecked={powder}
						   ref="powder"/>
					<label htmlFor="powder">Powder Day</label>
				</div>

				<div>
					<input id="backcountry"
						   type="checkbox"
						   defaultChecked={backcountry}
						   ref="backcountry"/>
					<label htmlFor="backcountry">
						Backcountry Day
					</label>
				</div>
				<button>Add Day</button>
			</form>
		)
	}
}

AddDayForm.defaultProps = {
	resort: "Kirkwood",
	date: "2017-02-12",
	powder: true,
	backcountry: false
}


AddDayForm.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	powder: PropTypes.bool.isRequired,
	backcountry: PropTypes.bool.isRequired,
	onNewDay: PropTypes.func.isRequired
}
