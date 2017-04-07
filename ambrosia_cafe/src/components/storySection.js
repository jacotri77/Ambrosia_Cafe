import React from 'react'
import store from '../store'
import {getMenu} from '../api/menu'

const styles = { 
  storyText:{
  	width: 840,
    height: 300,
    display:'inline-block',
    padding:'20px 25px 10px 25px',
    textOverflow: 'initial',
    whiteSpace: 'normal',
    overflow: 'auto',
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
      <div>
        <div className="leftPhotos">IMAGES STACK IN HERE</div>
      		<div style={styles.storyText}>{this.state.story} </div>
      	<div className="rightPhotos">IMAGES STACK IN HERE</div>
      </div>
    )
  }
}

export default StorySection 