import React from 'react'
import Logo from './Logo'
import InteriorImages from './interiorImages'
import Accordion from './Accordion'
import TripleBox from './TripleBox'
import Comments from './Comments'

export default React.createClass({
  render() {
    return (
    	 <div>
      	<Logo />
      	<InteriorImages />
      	<Accordion />
      	<TripleBox />
      	<Comments />
      </div>
    )
  }
})