import React from 'react'
import  '../index.css'

class Logo extends React.Component{

render(){
	return (
		<div className="logoDiv">
		<span className="logoSpan">Ambrosia Cafe</span>
		<div className="social">
			<ul>
				<li><img src={require("../images/noun_258111_cc.png")} alt="#" className="socialIcon"/></li>
				<li><img src={require("../images/noun_467225_cc.png")} alt="#" className="socialIcon"/></li>
				<li><img src={require("../images/noun_202408_cc.png")} alt="#" className="socialIcon"/></li>
				<li><img src={require("../images/2000px-Yelp.png")} alt="#" className="socialIcon"/></li>
			</ul>
		</div>
		</div>


	)
}

}

export default Logo