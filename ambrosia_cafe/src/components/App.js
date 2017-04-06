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
	menu:{
		height: 300,
		width: 1440,
		display: 'flex',
		justifyContent: 'space-between',
		padding: 0
	},
	reservations:{
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
  		if (this.refs[e.target.value].className.indexOf("w3-show") === -1){
			this.refs.storyOpener.className = this.refs.storyOpener.className.replace (" w3-show", "")
			this.refs.menuOpener.className = this.refs.storyOpener.className.replace (" w3-show", "")
			this.refs.reservationsOpener.className = this.refs.storyOpener.className.replace (" w3-show", "")
			this.refs[e.target.value].className += " w3-show"
		}
		else{
			this.refs[e.target.value].className = this.refs.storyOpener.className.replace (" w3-show", "")
		}
	}
  	render() {
    	return (
      		<div  style={styles.acc}>
      			<button type="button" className='accSection' onClick={this.handleAcc} value={"storyOpener"}> Story</button>
      			<div style={styles.story} className="w3-hide w3-btn w3-block" ref="storyOpener">
      				<div style={styles.leftPhotos}></div>
      				<p style={styles.storyText}>Block of Text from API for Story |  Block of Text from API for Story </p>
      				<div style={styles.rightPhotos}></div>
      			</div>
      			<button type="button" className='accSection' onClick={this.handleAcc} value={"menuOpener"}> Menu</button>
      			<div className="w3-hide w3-btn w3-block" style={styles.menu} ref="menuOpener">
      				<div style={styles.leftPhotos}></div>
      				<p style={styles.storyText}>Menu items from API | Menu items from API | Menu Items from API </p>
      				<div style={styles.rightPhotos}></div>
      			</div>
      			<button type="button" className='accSection' onClick={this.handleAcc} value={"reservationsOpener"}> Reservations</button>
      			<div className="w3-hide w3-btn w3-block" style={styles.reservations} ref="reservationsOpener"> 
      				<div style={styles.leftPhotos}></div>
      				<p style={styles.storyText}> Rervations Form | Reservations Form | Reservations Form </p>
      				<div style={styles.rightPhotos}></div>
      			</div>
      		</div>
    	)
  	}
}

export default App