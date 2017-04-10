import React from 'react';
import FeedBox from './FeedBox'
import Special from './Special'
import GoogleMap from './GoogleMap'


const styles = {
  container: {
    display: 'flex',
    listStyleType:'none',
    marginTop:20,
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