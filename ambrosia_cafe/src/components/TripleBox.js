import  '../index.css'
import React from 'react'
import FeedBox from './FeedBox'
import Special from './Special'
import GoogleMap from './GoogleMap'

const styles = {
  container: {
    display: 'flex',
    listStyleType:'none',
   
  }
}

class TripleBox extends React.Component{



render(){
	return (
		<div className="tripleBoxDiv">
		<FeedBox />
		<Special  />
		<GoogleMap  />
		</div>

	)
}

}

export default TripleBox
