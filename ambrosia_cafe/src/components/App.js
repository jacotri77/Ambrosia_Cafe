import React from 'react'
import Logo from './Logo'
import InteriorImages from './interiorImages'
import Accordion from './Accordion'
import TripleBox from './TripleBox'
import Comments from './Comments'

class App extends React.Component {

// import backgroundImage from '../images/backgroundImage.jpg'

// var styles= {
// 	backgroundImage: `url(${backgroundImage})`
// }
  render() {
    return (
    	 <div >
      	<Logo />
      	<InteriorImages />
      	<Accordion />
      	<TripleBox />
      	<Comments />
      </div>
    )
  }
}

export default App
