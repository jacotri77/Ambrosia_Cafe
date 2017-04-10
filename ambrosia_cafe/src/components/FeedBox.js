import React from 'react'
import store from '../store'
import {getFeed} from '../api/feed'

const styles = {
	feedbox: {
	display:'inline-block',
	color:'white',
	backgroundColor:'rgb(35, 55, 67)',
	width:'33%',
    height:300,
    border:'1px solid black',
    textAlign:"center",
    margin:'auto',
    position:'relative'
   
	 },
	ul: {
	 fontSize:11,
    paddingLeft:10,
    paddingRight:10,
    listStyleType:'none'
   
	 },
	latestNews: {
	fontSize:15,
    borderBottom:'1px solid white',
    paddingBottom:5,
	 },
	 mid: {
 	fontSize:13,
	
	 },
	 readmore: {
	 border:'none',
    outline:'none',
    position:'absolute',
    marginTop:139,
    marginLeft:-58,
    backgroundColor:'rgba(0,0,0, 0)',
    color:'white',
    fontWeight:'bold',
	 }
}



export default React.createClass({
	getInitialState() {
		return{
			feed: {}
		}
	},
	componentWillMount() {
		this.unsubscribe = store.subscribe(()=>{
			const appState = store.getState().feedReducer.feed
			console.log('appState', appState)

			this.setState({
				feed: appState.feed
		})
	})
	getFeed()
},
	componentWillUnmount() {
		this.unsubscribe()
	},
  render() {
    return (
      <div style={styles.feedbox} id="feedbox">
      	<ul style={styles.ul}>
      		<p style={styles.latestNews}>Latest News</p>
      		<li>
      			<div>
      				<p style={styles.mid}>{this.state.feed.title}</p>
      				<p style={styles.mid}>{this.state.feed.date}</p>
      			</div>
      		</li>
      		<li>{this.state.feed.post}</li>
      	</ul>
      	<button style={styles.readmore}>read more</button>
      </div>
    )
  }
})