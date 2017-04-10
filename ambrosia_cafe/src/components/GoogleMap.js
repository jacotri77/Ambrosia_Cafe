import React from 'react';



const styles = {
  googleBox: {
    display:'inline-block',
    color:'white',
    backgroundColor:'rgb(35, 55, 67)',
    width:'33%',
    height:300,
    border:'1px solid black',
    fontSize:11,
    margin:'auto',
    paddingLeft:10,
    paddingRight:10,

  

  },
  find: {
    fontSize:15,
    borderBottom:'1px solid white',
    paddingBottom:5,
    textAlign:'left'
    
  
  },
  map: {
    height:200,
    width: 'auto',
    textAlign:'center',
    alignItems:'center'

  },
  extraDiv: {
    textAlign:'center'
  }
}



export default React.createClass({
  render() {
    return (
      <div style={styles.googleBox}>
      <div style={styles.extraDiv}>
      <p style={styles.find}>Where to find us</p>
        <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ1V9dsprDyIAREIN3z3ildoo&key=AIzaSyDsjkzI6hQT3mjLdxh-9b78pXxyzNsxQYY" style={styles.map}></iframe>
      <p>1112 S Casino Center Blvd, Las Vegas, NV 89104</p> 
      </div>
      </div>
    )
  }
})