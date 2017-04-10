import React from 'react'
import db from '../../db.json'
import store from '../store'
import {getMenu} from '../api/menu'

const styles = {
  container:{
    height: 660,
    width: 840,
    padding : ' 20px 0 0 40px'
  },
  inputLine:{
  	height: 35,
  	width: 340,
  	fontFamily: 'Questrial',
  	color: 'black',
  	float:'left',
  	clear: 'left',
  	margin: 10,
  },
  inputBox:{
  	height: 100,
  	width: 340,
  	fontFamily: 'Questrial',
  	color: 'black',
  	float: 'left',
  	clear: 'left',
  	margin: 10,
  },
  label:{
  	fontFamily: 'Questrial',
  	color: 'black',
  	float: 'left',
  	clear: 'left',
  	margin: 10,
  	fontSize: 22
  },
  select:{
  	fontFamily: 'Questrial',
  	color: 'black',
  	float: 'left',
  	clear: 'left',
  	margin: 10,
  	fontSize: 18,
  	height: 35,
  	width: 200
  },
  submit:{
  	height: 60,
  	width: 230,
  	fontSize: 24,
  	float: 'left',
  	background: '#6CB519',
  	borderRadius: '5px',
  	fontFamily: 'Questrial',
  	marginLeft: 20
  },
  verifyOn:{
  	fontFamily: 'Questrial',
  	color: 'black',
  	float: 'left',
  	clear: 'right',
  	margin: 10,
  	fontSize: 20,
  	border: 'solid 2px black',
  	padding: 5
  },
  verifyOff:{
  	display: 'none'
  }
}

class Reserve extends React.Component {
  constructor(props) {
    super(props)
    this.state = { displayBox : false, name : '', guests : '', date: '', notes : '', seat : 'MainFloor', reservations: {}}
  }
  componentWillMount() {
      this.unsubscribe = store.subscribe(()=>{
          const appState = store.getState().menuReducer.res
      this.setState({
            reservations : appState
          })
      })
      getMenu()
    }
    componentWillUnmount() {
      this.unsubscribe()
    }
  handleName = (e) => {
    this.setState({
      name: e.target.value,
      displayBox: false
    })
  }
  handleGuests = (e) => {
    this.setState({
      guests: e.target.value,
      displayBox: false
    })
  }
  handleDate = (e) => {
    this.setState({
      date: e.target.value,
      displayBox: false
    })
  }
  handleNotes = (e) => {
    this.setState({
      notes: e.target.value,
      displayBox: false
    })
  }
  handleSeat = (e) => {
    this.setState({
      seat: e.target.value,
      displayBox: false
    })
  }
  handleSubmit = (e) => {
	this.setState({
        displayBox: true
   	}) 
  }

  render() {
    return (
      <div style={styles.container}>
      	<form>
        	<label htmlFor="fullName" style={styles.label}>Full Name </label>
        	<input type="text" onChange={this.handleName} value={this.state.name} id="fullName" style={styles.inputLine} />
        	<label htmlFor="numGuests" style={styles.label}>Number of Guests </label>
        	<input type="text" onChange={this.handleGuests} value={this.state.guests} id="numGuests" style={styles.inputLine} />
        	<label htmlFor="date" style={styles.label}>Date </label>
        	<input type="text" onChange={this.handleDate} value={this.state.date} id="date" style={styles.inputLine} />
        	<label htmlFor="notes" style={styles.label}>Special Notes </label>
        	<textarea id="notes" onChange={this.handleNotes} value={this.state.notes}style={styles.inputBox}></textarea>
        	<label htmlFor="seatPref" style={styles.label}>Seating Preference </label>
        	<select onChange={this.handleSeat} style={styles.select}>
				<option value="Indoor">Main Floor</option>
				<option value="Veranda">Veranda</option>
				<option value="Balcony">Balcony</option>
				<option value="Chaos Dimension">Chaos Dimension</option>
			</select>
        </form>
        <button onClick={this.handleSubmit} style={styles.submit}> Submit Reservation </button>
       	<p style={this.state.displayBox === true ? styles.verifyOn : styles.verifyOff }> Thank you {this.state.name} your table for {this.state.guests} guests is confirmed on the date of {this.state.date} in the [ {this.state.seat} ] section.</p> 	
      </div>
    )
  }
}

export default Reserve