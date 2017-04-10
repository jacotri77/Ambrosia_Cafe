import React from 'react';

import store from '../store'
import {getSpecial} from '../api/feed'

const styles = {
  specialbox: {
    display:'inline-block',
    color:'white',
    backgroundColor:'rgb(35, 55, 67)',
    width:'33%',
    height:300,
    border:'1px solid black',
    textAlign:"center",
    margin:'auto'

    },
    crepe: {
      width:'auto',
      height:235,
     
    },
    Special: {
    fontSize:15,
    borderBottom:'1px solid white',
    paddingBottom:5,
   },
   ul: {
    fontSize:11,
    paddingLeft:10,
    paddingRight:10,
    listStyleType:'none'
  },
  classic: {
    fontSize:13,
    fontWeight:'bold',
    marginTop:5,
  },
  description: {
    marginTop:10,
  },
}



export default React.createClass({
  getInitialState() {
    return{
      special: []
    }
  },
  componentWillMount() {
    this.unsubscribe = store.subscribe(()=>{
      const appState = store.getState()
      console.log('appState', appState)

      this.setState({
        special: appState.special
    })
  })
  getSpecial()
},
  componentWillUnmount() {
    this.unsubscribe()
  },
  render() {
    return (
      <div style={styles.specialbox}>
        <ul style={styles.ul}>
          <p style={styles.Special}>Special</p>
          <img style={styles.crepe} src={require("../images/crepes1.jpg")}  alt="crepe"/>
          <li style={styles.classic}>{this.state.special.id}</li>
          <li style={styles.description}>{this.state.special.menu_item_id}</li>
        </ul>
      </div>
    )
  }
})