import React from 'react'

const styles = {
	acc:{
		width: 1440,
	},
	story:{
		height: 300,
		width: 1440,
		display: 'flex',
		justifyContent: 'space-between'
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
		padding: '0px 40px 0px 40px'
	}
}
class App extends React.Component {
  render() {
    return (
      <div  style={styles.acc}>
      	<div className='accSection'> Story
      	</div>
      		<div style={styles.story}>
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