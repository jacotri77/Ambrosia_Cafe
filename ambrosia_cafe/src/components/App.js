import React from 'react'

const styles = {
	acc:{
		width: 1440,
	},
	story:{
		height: 300,
		width: 1440,
		display: 'flex',
		justifyContent: 'space-between',
		padding: 0
	},
	leftPhotos:{
		height:300,
		width:300,
		background: 'purple',
		float: 'left'
	},
	rightPhotos:{
		height:300,
		width:300,
		background: 'pink',
		float: 'right'
	},
	storyText:{
		fontSize: 18,
		padding: '0px 40px 0px 40px',
		display: 'inline-block'
	}
}
class App extends React.Component {
  	handleAcc = (e) => {
  		console.log(this.refs.storyOpener.className)
  		if (this.refs.storyOpener.className.indexOf("w3-show") === -1){
			this.refs.storyOpener.className += " w3-show"
		}
		else{
			this.refs.storyOpener.className = this.refs.storyOpener.className.replace (" w3-show", "")
			console.log(this.refs.storyOpener.className)
		}
	}
  	render() {
    	return (
      		<div  style={styles.acc}>
      			<button type="button" className='accSection' onClick={this.handleAcc} value={"storyOpener"}> Story</button>
      			<div style={styles.story} className="w3-hide w3-btn w3-block w3-black w3-left-align" ref="storyOpener">
      				<div style={styles.leftPhotos}></div>
      				<p style={styles.storyText}>Block of Text from API for Story |  Block of Text from API for Story </p>
      				<div style={styles.rightPhotos}></div>
      			</div>
      			<div className='accSection' style={styles.menu}> Menu
      			</div>
      			<div className='accSection' style={styles.reservations}> Reservations
      			</div>
      		</div>
    	)
  	}
}

export default App