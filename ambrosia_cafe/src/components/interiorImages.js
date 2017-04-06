import React from 'react'
import  '../index.css'
import Carousel from 'nuka-carousel'


class InteriorImages extends React.Component{

render(){
	return (
		<div className="interiorDiv">
		<Carousel>
        <img src={require("../images/cakeRestaurant.jpg")}  alt="#"/>
        <img src={require("../images/cake1.jpg")} alt="#"/>
        <img src={require("../images/cake2.jpg")}  alt="#"/>
        <img src={require("../images/cake3.jpg")}  alt="#"/>
        <img src={require("../images/cake4.jpg")}  alt="#"/>
        <img src={require("../images/cake5.jpg")}  alt="#"/>
      </Carousel>
      </div>
    )
  }
}

export default InteriorImages