import React from 'react'

const styles = {
  container:{
    height: 640,
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
  }
}

class Reserve extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name : '', guests : '', date: '', notes : '', seat : 'Indoor'}
  }
  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleGuests = (e) => {
    this.setState({
      guests: e.target.value
    })
  }
  handleDate = (e) => {
    this.setState({
      date: e.target.value
    })
  }
  handleNotes = (e) => {
    this.setState({
      notes: e.target.value
    })
  }
  handleSeat = (e) => {
    this.setState({
      seat: e.target.value
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
        	<select style={styles.select}>
				<option value="Indoor">Indoor</option>
				<option value="Veranda">Veranda</option>
				<option value="Roof">Roof</option>
			</select>
        </form>
        <button onClick={this.handleSubmit} style={styles.submit}> Submit Reservation </button>
      </div>
    )
  }
}

export default Reserve