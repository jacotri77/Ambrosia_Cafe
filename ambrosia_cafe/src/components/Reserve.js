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
  }
}

class Reserve extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.container}>
      	<form>
        	<label htmlFor="fullName" style={styles.label}>Full Name </label>
        	<input type="text" id="fullName" style={styles.inputLine} />
        	<label htmlFor="numGuests" style={styles.label}>Number of Guests </label>
        	<input type="text" id="numGuests" style={styles.inputLine} />
        	<label htmlFor="date" style={styles.label}>Date </label>
        	<input type="text" id="date" style={styles.inputLine} />
        	<label htmlFor="notes" style={styles.label}>Special Notes </label>
        	<textarea id="notes" style={styles.inputBox}></textarea>
        	<label htmlFor="seatPref" style={styles.label}>Seating Preference </label>
        	<select style={styles.select}>
				<option value="Indoor">Indoor</option>
				<option value="Veranda">Veranda</option>
				<option value="Roof">Roof</option>
			</select>
        </form>
      </div>
    )
  }
}

export default Reserve