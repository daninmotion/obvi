import React from 'react'
import Post from '../Post/Post'

//Stateless functional component with arrow function
//Another way to write this
/* 
function PostDetail({props}) {
	return <div></div>
}
*/
const PostDetial = (props) => (
	<div>
		<Post {...props.post} /> 
		{/* Instead of writing out all of your props (for example title={title}
			slug={slug}) you can just bring in all of your props with {...props}
		*/}
	</div>
)

export default PostDetial