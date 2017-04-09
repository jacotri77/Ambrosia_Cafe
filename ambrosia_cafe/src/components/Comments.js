import React from 'react'
import  '../index.css'
import '../../node_modules/font-awesome/css/font-awesome.css'

class Comments extends React.Component{

render(){
	return (
		<div className="commentsDiv">
			<form id="reservationsForm">
				<div id="inputTextDiv">
					<input type="text" name="Name" placeholder="Name" id="textBox"/>
					<input type="email" placeholder="Email" id="textBox"/>
					<input type="tel" placeholder="Phone" id="textBox" />
					<input type="date" id="textBox"/>
				</div>
				<div id="commentBoxDiv">
					<input type="textarea" placeholder="Comments" id="commentBox"/>
				
				<button id="subButton">Submit</button>	
			</div>
			</form>
			<div className="social">
				<i className="fa fa-facebook-official fa-4x" aria-hidden="true"></i>
				<i className="fa fa-twitter-square fa-4x" aria-hidden="true"></i>
				<i className="fa fa-instagram fa-4x" aria-hidden="true"></i>
				<i className="fa fa-yelp fa-4x" aria-hidden="true"></i>
			</div>
		</div>

	)
}

}

export default Comments
