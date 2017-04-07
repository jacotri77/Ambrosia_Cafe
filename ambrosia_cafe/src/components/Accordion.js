import React from 'react'
import MenuSection from './MenuSection'
import StorySection from './StorySection'

const styles = {
	acc:{
		width: 1440,
	},
  opener:{
    padding: 0
  }
}
class Accordion extends React.Component {
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
      		<div style={styles.acc}>
      			
            <button type="button" className='accSection' onClick={this.handleAcc} value={"storyOpener"}> Story</button>
      			<div className="w3-hide w3-btn w3-block" style={styles.opener} ref="storyOpener">
              <StorySection/>
      			</div>
      			
            <button type="button" className='accSection' onClick={this.handleAcc} value={"menuOpener"}> Menu</button>
            <div className="w3-hide w3-btn w3-block" style={styles.opener} ref="menuOpener">
      			 <MenuSection/>
             </div>

            <button type="button" className='accSection' onClick={this.handleAcc} value={"reservationsOpener"}> Reservations</button>
      			<div className="w3-hide w3-btn w3-block" style={styles.opener} ref="reservationsOpener"> 
      				<div className="leftPhotos"></div>
      				<p > Rervations Form | Reservations Form | Reservations Form </p>
      				<div className="rightPhotos"></div>
      			</div>
      		</div>
    	)
  	}
}

export default Accordion