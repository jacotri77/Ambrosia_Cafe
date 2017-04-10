import React from 'react';
import store from '../store'
import {getFeed} from '../api/feed'

const styles = {
	
	ul: {
	 	fontSize:11,
    paddingLeft:10,
    paddingRight:20,
	 },
	 latestNews: {
	 	fontSize:15,
    borderBottom:'1px solid white',
    paddingBottom:5,
	 },
	 mid: {
	 	fontSize:13,
    fontWeight:'bold',
	 },
	 // readmore: {
	 // 	border:'none',
  //   outline:'none',
  //   position:'absolute',
  //   marginTop:-27,
  //   marginLeft:249,
  //   backgroundColor:'rgba(0,0,0, 0)',
  //   color:'white',
  //   fontWeight:'bold',
	 // }
}



export default React.createClass({
	getInitialState() {
		return{
			feed: {}
		}
	},
	componentWillMount() {
		this.unsubscribe = store.subscribe(()=>{
			const appState = store.getState()
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
      <div className="indvBox" id="feedbox">
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
      	<button >read more</button>

      </div>
    )
  }
})