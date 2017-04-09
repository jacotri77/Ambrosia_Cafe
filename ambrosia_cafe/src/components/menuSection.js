import React from 'react'
import store from '../store'
import {getMenu} from '../api/menu'
import '../../node_modules/font-awesome/css/font-awesome.css'

const styles = {
  container:{
    height:1660
  },
  menuBlock:{
    width: 840,
    height: 300,
    display:'inline-block',
    padding:'20px 25px 10px 25px',
  },
  menuDescription:{
    width: 800,
    height: 70,
    margin: '10px 0 5px 5px',
    overflow: 'visible'
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
  },
  beforeIcons:{
    width:'85%',
    display: 'inline-block',fontSize: 12,
    fontFamily: 'Rock Salt',
    color: '#233743',
    textOverflow: 'initial',
    whiteSpace: 'normal',
    overflow: 'auto',
    padding: ' 5px 10px 0 0'
  },
  icons:{
    width:'15%',
    height:'100%',
    float:'right',
    display: 'inline-block',
    border: 'solid 1px #B1051D',
    borderWidth: '0 0 0 2px',
    color: '#233743',
    overflow: 'visible'
  },
  icon:{                  //for applicable icons, red
    color: '#B1051D',
    fontSize: 23,
    marginLeft: 7
  },                       //for non applicable grey
  iconOff:{
    color: '#666666',
    fontsize: 23,
    marginLeft: 7,
  },
  ttTextHeader:{
    textAlign: 'left',
    background: '#233743',
    fontFamily: 'sans serif',
    fontSize: 20,
    margin: '0 0 5px 0',
    width:220,
    border: '2px solid #B1051D',
    borderWidth: '0 0 2px 0'
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
                  <li style={styles.menuDescription}><div style={styles.beforeIcons}>{cake.description}</div><div style={styles.icons}><i style={styles.icon} className="fa fa-exclamation fa-4x" aria-hidden="true"><span style={styles.ttText} className="tooltiptext"><span style={styles.ttTextHeader}>Allergy Information</span>{cake.allergies}</span></i><i style={styles.icon} className="fa fa-star fa-4x" aria-hidden="true"><span style={styles.ttText} className="tooltiptext"><span style={styles.ttTextHeader}>This is a Cafe Favorite</span>{cake.favorite}</span></i><i style={styles.icon} className="fa fa-snowflake-o fa-4x" aria-hidden="true"><span style={styles.ttText} className="tooltiptext"><span style={styles.ttTextHeader}>Comes with Ice Cream</span>{cake.spicy}</span></i><i style={styles.icon} className="fa fa-vimeo fa-4x" aria-hidden="true"><span style={styles.ttText} className="tooltiptext"><span style={styles.ttTextHeader}> Dairy/Egg Substitutes</span>{cake.vegan}</span></i></div></li>
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
                  <li style={styles.menuDescription}><div style={styles.beforeIcons}>{cake.description}</div><div style={styles.icons}><i style={styles.icon} className="fa fa-exclamation fa-4x" aria-hidden="true"><span style={styles.ttText} className="tooltiptext"><span style={styles.ttTextHeader}>Allergy Information</span>Allergy Information Allergy Information Allergy Information Allergy Information</span></i><i style={styles.icon} className="fa fa-star fa-4x" aria-hidden="true"><span style={styles.ttText} className="tooltiptext"><span style={styles.ttTextHeader}>This is a Cafe Favorite</span>Description applicable to this items favorite status</span></i><i style={styles.icon} className="fa fa-snowflake-o fa-4x" aria-hidden="true"><span style={styles.ttText} className="tooltiptext"><span style={styles.ttTextHeader}>Comes with Ice Cream</span>Information about recommended ice cream accompanient to this dish</span></i><i style={styles.icon} className="fa fa-vimeo fa-4x" aria-hidden="true"><span style={styles.ttText} className="tooltiptext"><span style={styles.ttTextHeader}> Dairy/Egg Substitutes</span>Information about the possible substitutes for milk and eggs</span></i></div></li>
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
                  <li style={styles.menuDescription}><div style={styles.beforeIcons}>{cake.description}</div><div style={styles.icons}><i style={styles.icon} className="fa fa-exclamation fa-4x" aria-hidden="true"><span style={styles.ttText} className="tooltiptext"><span style={styles.ttTextHeader}>Allergy Information</span>Allergy Information Allergy Information Allergy Information Allergy Information</span></i><i style={styles.icon} className="fa fa-star fa-4x" aria-hidden="true"><span style={styles.ttText} className="tooltiptext"><span style={styles.ttTextHeader}>This is a Cafe Favorite</span>Description applicable to this items favorite status</span></i><i style={styles.icon} className="fa fa-snowflake-o fa-4x" aria-hidden="true"><span style={styles.ttText} className="tooltiptext"><span style={styles.ttTextHeader}>Comes with Ice Cream</span>Information about recommended ice cream accompanient to this dish</span></i><i style={styles.icon} className="fa fa-vimeo fa-4x" aria-hidden="true"><span style={styles.ttText} className="tooltiptext"><span style={styles.ttTextHeader}> Dairy/Egg Substitutes</span>Information about the possible substitutes for milk and eggs</span></i></div></li>
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

