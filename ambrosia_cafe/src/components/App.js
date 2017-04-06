import React from 'react'
import Logo from './Logo'
import InteriorImages from './interiorImages'
import Accordion from './Accordion'
import TripleBox from './TripleBox'
import Comments from './Comments'
import backgroundImage from '../images/backgroundImage.jpg'

var styles= {
	backgroundImage: `url(${backgroundImage})`
}

export default React.createClass({
  render() {
    return (
    	 <div style={styles}>
      	<Logo />
      	<InteriorImages />
      	<Accordion />
      	<TripleBox />
      	<Comments />
      </div>
    )
  }
})