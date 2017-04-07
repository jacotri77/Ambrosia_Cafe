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
		padding: 0,
		backgroundColor: '#233743'
	},
	menu:{
		height: 1440,
		width: 1440,
		padding: 0,
		//backgroundColor:'#233743',
	},
	reservations:{
		height: 300,
		width: 1440,
		padding: 0,
		backgroundColor: '#233743'
	},
	leftPhotos:{
		height:"100%",
		width:300,
		background: 'purple',
		display: 'inline-block',
		float: 'left'
	},
	rightPhotos:{
		height:"100%",
		width:300,
		background: 'pink',
		display: 'inline-block',
		float: 'right'
	},
	storyText:{
		fontSize: 14,
		display: 'inline-block',
		fontFamily: 'Rock Salt',
    	color: 'white',
    	width: 840
	},
	menuBlock:{
		width: 840,
		height:300,
		display:'inline-block',
		padding:'20px 25px 10px 25px',
	},
	menuDescription:{
		fontSize: 12,
		fontFamily: 'Rock Salt',
    	width: 750,
    	margin: '10px',
    	textOverflow: 'initial',
    	whiteSpace: 'normal',
    	overflow: 'auto'
	},
	menuItem:{
		fontSize: 16,
		fontFamily: 'Rock Salt',
    	width: 400,
    	margin: '10px'
	},
	reservationForm:{
		fontSize: 14,
		display: 'inline-block',
		fontFamily: 'Rock Salt',
    	color: 'white',
    	width: 840
	},
	menuCategory:{
		fontSize: 22,
		fontFamily: 'Rock Salt',
		border: 'solid black 2px',
		width: '100%',
		display: 'inline-block',
		borderWidth: '0 0 2px 0',
		paddingBottom: 4,
		textAlign: 'left'
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
      				<div style={styles.leftPhotos}><img src="../assets/cakes/RedVelvet540w800h.jpg"/></div>
      				<div style={styles.menuBlock}>
      					<span style={styles.menuCategory}> Our Delectable Array of Cakes </span>
      					<ul>
      					{this.state.menu.map(function(cake){
      						return (
      							<div>
      								<li>
     									<div className='dots' key={'item' + cake.id} ></div>    
    									 <label>{cake.item}</label><span>{cake.price}</span>
									</li>
									<li key={cake.id} style={styles.menuDescription}>{cake.description}</li>
								</div>
							)
      					})}
      					</ul>
      					<span style={styles.menuCategory}> Our Heavenly Crepe Collection </span>
      					<ul>
      					{this.state.menu.map(function(cake){
      						return (
      							<div>
      								<li>
     									<div className='dots' key={'item' + cake.id} ></div>    
    									 <label>{cake.item}</label><span>{cake.price}</span>
									</li>
									<li key={cake.id} style={styles.menuDescription}>{cake.description}</li>
								</div>
							)
      					})}
      					</ul>
      					<span style={styles.menuCategory}> Our Exquisite Selection of Brownies </span>
      					<ul>
      					{this.state.menu.map(function(cake){
      						return (
      							<div>
      								<li>
     									<div className='dots' key={'item' + cake.id} ></div>    
    									 <label>{cake.item}</label><span>{cake.price}</span>
									</li>
									<li key={cake.id} style={styles.menuDescription}>{cake.description}</li>
								</div>
							)
      					})}
      					</ul>
      				</div>
      				<div style={styles.rightPhotos}><img src="../assets/cakes/PBCheesecake600w800h.jpg"/></div>
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