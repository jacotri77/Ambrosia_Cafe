import React from 'react'
import  '../index.css'
import '../../node_modules/font-awesome/css/font-awesome.css'

class Comments extends React.Component{

render(){
	return (
		<div className="commentsDiv">
		<form>
			<input type="text" placeholder="Name" id="textBox"/>
			<input type="email" placeholder="Email" id="textBox"/>
			<input type="textarea" placeholder="Comments" id="commentBox"/>
		<div className="social">
			<i className="fa fa-facebook-official fa-4x" aria-hidden="true"></i>
			<i className="fa fa-twitter-square fa-4x" aria-hidden="true"></i>
			<i className="fa fa-instagram fa-4x" aria-hidden="true"></i>
			<i className="fa fa-yelp fa-4x" aria-hidden="true"></i>
		</div>
		</form>
		</div>

	)
}

}

export default Comments