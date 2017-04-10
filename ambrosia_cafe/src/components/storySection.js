import React from 'react'
import store from '../store'
import {getMenu} from '../api/menu'

const styles = {
    container:{
      background: 'linear-gradient(  #031723 ,#233743)'
    }, 
  storyText:{
  		width: 640,
    	height: 475,
    	display:'inline-block',
    	padding: '0 20px',
    	textOverflow: 'initial',
    	whiteSpace: 'normal',
    	overflow: 'auto',
    	fontSize: 20,
      fontFamily: 'Questrial'
  	},
  	leftPhotos:{
  		float: 'left',
  		width: 400,
    	display: 'inline-block',
    	background: '#233743',
    },
    leftPhoto:{
    	maxWidth:'100%',
    	display:'flex',
  		flexWrap: 'wrap'
  	},
  	rightPhotos:{
    	width: 400,
    	display: 'inline-block',
    	background: 'white'
    },
    rightPhoto:{
    	float: 'left'
	}
}

class StorySection extends React.Component {
  constructor() {
    super()
    this.state = { story: "" }
  }
  componentWillMount() {
      this.unsubscribe = store.subscribe(()=>{
          const appState = store.getState().menuReducer.menu.story.text
      this.setState({
            story: appState
          })
      })
      getMenu()
    }
    componentWillUnmount() {
      this.unsubscribe()
    }
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.leftPhotos}><img src={require('../assets/cakes/DCFudgeWide.jpg')} alt="No Error"/><img style={styles.leftPhoto} src={require('../assets/cakes/RedVelvetSquare.jpeg')} alt="No Error"/></div>
      		<div style={styles.storyText}>{this.state.story} </div>
      	<div style={styles.rightPhotos}><img src={require('../assets/cakes/OreoCakeSquare.jpg')} alt="No Error"/></div>
      </div>
    )
  }
}

export default StorySection 