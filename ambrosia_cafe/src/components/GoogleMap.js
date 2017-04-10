import React from 'react'

const styles = {

  find: {
    fontSize:15,
    borderBottom:'1px solid white',
    paddingBottom:5,
    textAlign:'left'
  },
  map: {
    height:130,
    width:260
  }
}



export default React.createClass({
  render() {
    return (
      <div className="indvBox">
      <p style={styles.find}>Where to find us</p>
      <div>
        <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ1V9dsprDyIAREIN3z3ildoo&key=AIzaSyDsjkzI6hQT3mjLdxh-9b78pXxyzNsxQYY" style={styles.map}></iframe>
      </div>
      <p>1112 S Casino Center Blvd, Las Vegas, NV 89104</p> 
      </div>
    )
  }
})