import React from 'react'
import Post from '../Post/Post'

const Home = ({posts}) => (
	<div>
		{posts.length
		? posts.map(post => <Post {...post} key={post.slug} titleLink={true} />) : <p>Awating posts!</p>}
	</div>
)

export default Home