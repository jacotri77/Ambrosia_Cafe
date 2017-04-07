import React from 'react'
import store from '../store'
import {getMenu} from '../api/menu'

const styles = {
  menuBlock:{
    width: 840,
    height: 300,
    display:'inline-block',
    padding:'20px 25px 10px 25px',
  },
  menuDescription:{
    fontSize: 12,
    fontFamily: 'Rock Salt',
    color: '#233743',
    width: 750,
    margin: '10px',
    textOverflow: 'initial',
    whiteSpace: 'normal',
    overflow: 'auto',
  },
  menuItem:{
    fontSize: 16,
    fontFamily: 'Rock Salt',
    color: '#233743',
    width: 400,
    margin: '10px'
  },
  menuCategory:{
    fontSize: 22,
    fontFamily: 'Rock Salt',
    color: '#233743',
    border: 'solid black 2px',
    width: '100%',
    display: 'inline-block',
    borderWidth: '0 0 2px 0',
    paddingBottom: 4,
    textAlign: 'left'
  },
  lastUl:{
    marginBottom: 0
  },
  itemPrice:{
    fontFamily: 'serif',
    color: 'black'
  }
}
class MenuSection extends React.Component {
  constructor() {
    super()
    this.state = {menu: []}
  }
  componentWillMount() {
      this.unsubscribe = store.subscribe(()=>{
          const appState = store.getState().menuReducer.menu.cakes
    
      this.setState({
            menu: appState
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
        <div className="leftPhotos"><img className="menuLeftImage" src={require("../assets/cakes/RedVelvetTall2.jpeg")} alt="No Error"/><img className="menuLeftImage" src={require("../assets/cakes/OreoTall.jpeg")} alt="No Error"/></div>
          <div style={styles.menuBlock}>
            <span style={styles.menuCategory}> Our Delectable Array of Cakes </span>
            <ul>
            {this.state.menu.map(function(cake){
              return (
                <div key={cake.id} >
                  <li>
                    <div className='dots' key={'item' + cake.id} ></div>    
                    <label style={styles.itemPrice}>{cake.item}</label><span style={styles.itemPrice}>{cake.price}</span>
                  </li>
                  <li style={styles.menuDescription}>{cake.description}</li>
                </div>
              )
            })}
            </ul>
            <span style={styles.menuCategory}> Our Heavenly Crepe Collection </span>
            <ul>
              {this.state.menu.map(function(cake){
                return (
                  <div key={cake.id}>
                    <li>
                      <div className='dots' key={'item' + cake.id} ></div>    
                      <label style={styles.itemPrice} >{cake.item}</label><span style={styles.itemPrice}>{cake.price}</span>
                    </li>
                    <li  style={styles.menuDescription}>{cake.description}</li>
                  </div>
                )
              })}
              </ul>
              <span style={styles.menuCategory}> Our Exquisite Selection of Brownies </span>
              <ul style={styles.lastUl}>
                {this.state.menu.map(function(cake){
                  return (
                    <div key={cake.id}>
                      <li>
                        <div className='dots' key={'item' + cake.id} ></div>    
                        <label style={styles.itemPrice}>{cake.item}</label><span style={styles.itemPrice}>{cake.price}</span>
                      </li>
                      <li  style={styles.menuDescription}>{cake.description}</li>
                    </div>
                  )
                })}
              </ul>
          </div>
        <div className="rightPhotos" ><img className="menuRightImage" src={require('../assets/cakes/PBTall.jpeg')} alt="No Error"/><img className="menuRightImage" src={require('../assets/cakes/DCTall.jpeg')} alt="No Error"/></div>
      </div>
    )
  }
}

export default MenuSection

