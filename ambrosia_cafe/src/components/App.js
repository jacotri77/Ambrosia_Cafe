import React from 'react'
import store from '../store'
import {getMenu} from '../api/menu'

const styles = {
	acc:{
		width: 1440,
	},
	story:{
		height: 300,
		width: 1440,
		display: 'flex',
		justifyContent: 'space-between',
		padding: 0,
		backgroundColor: '#233743'
	},
	menu:{
		height: 300,
		width: 1440,
		display: 'flex',
		justifyContent: 'space-between',
		padding: 0,
		backgroundColor: '#233743'
	},
	reservations:{
		height: 300,
		width: 1440,
		display: 'flex',
		justifyContent: 'space-between',
		padding: 0,
		backgroundColor: '#233743'
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
		float: 'right',
		clear:' right'
	},
	storyText:{
		fontSize: 14,
		padding: '0px 40px 0px 40px',
		display: 'inline-block',
		fontFamily: 'Rock Salt',
    	color: 'white',
    	width: 840
	},
	menuBlock:{
		width: 840,
		display:'inline-block',
		padding:'10px, 20px',
		float: 'left'
	},
	menuText:{
		fontSize: 14,
		fontFamily: 'Rock Salt',
    	color: 'white',
    	width: 840,
    	margin: '10px'
	},
	reservationForm:{
		fontSize: 14,
		padding: '0px 40px 0px 40px',
		display: 'inline-block',
		fontFamily: 'Rock Salt',
    	color: 'white',
    	width: 840
	},
	menuCategory:{
		fontSize: 20,
		fontFamily: 'Rock Salt',
    	color: 'white'
	}
}
class App extends React.Component {
		constructor() {
    	super();
    	this.state = {menu: []}
  	}
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
	componentWillMount() {
    	this.unsubscribe = store.subscribe(()=>{
      		const appState = store.getState().menuReducer.menu
		
			this.setState({
        		menu: appState
      		})
    	})
    	getMenu()
  	}
  	componentWillUnmount() {
    	this.unsubscribe()
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
      				<div style={styles.menuBlock}>
      					<span style={styles.menuCategory}> Our Delectable Array of Cakes </span>
      					{this.state.menu.map(function(cake){
      						return (
							<div key={cake.id} style={styles.menuText}>{cake.description}</div>
							)
      					})}
      				</div>
      				<div style={styles.rightPhotos}></div>
      			</div>
      			<button type="button" className='accSection' onClick={this.handleAcc} value={"reservationsOpener"}> Reservations</button>
      			<div className="w3-hide w3-btn w3-block" style={styles.reservations} ref="reservationsOpener"> 
      				<div style={styles.leftPhotos}></div>
      				<p style={styles.reservationForm}> Rervations Form | Reservations Form | Reservations Form </p>
      				<div style={styles.rightPhotos}></div>
      			</div>
      		</div>
    	)
  	}
}

export default App