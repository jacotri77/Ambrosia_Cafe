import React from 'react'
import  '../index.css'

class Comments extends React.Component{

render(){
	return (
		<div className="commentsDiv">
		<form>
			<input type="text" placeholder="Name" id="textBox"/>
			<input type="email" placeholder="Email" id="textBox"/>
			<input type="textarea" placeholder="Comments" id="commentBox"/>
		</form>
		</div>

	)
}

}

export default Comments