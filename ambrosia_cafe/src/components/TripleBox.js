import React from 'react';
import FeedBox from './FeedBox'
import Special from './Special'
import GoogleMap from './GoogleMap'


const styles = {
  container: {
    display: 'flex',
    width:1440,
    height:350,
    listStyleType:'none',
    margin:'auto'
  }
}



export default React.createClass({
  render() {
    return (
      <div>
      	<div style={styles.container}>
        <FeedBox/>
        <Special/>
        <GoogleMap/>
        </div>
      </div>
    )
  }
})