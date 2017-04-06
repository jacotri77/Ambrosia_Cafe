import React from 'react'
import  '../index.css'
import Carousel from 'nuka-carousel'


class InteriorImages extends React.Component{

render(){
	return (
		<div className="interiorDiv">
		<Carousel>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" alt="#"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" alt="#"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" alt="#"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" alt="#"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" alt="#"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" alt="#"/>
      </Carousel>
      </div>
    )
  }
}

export default InteriorImages