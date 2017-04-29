import React from 'react'
import {Match, Miss} from 'react-router'

import About from '../About/About'
import Home from '../Home/Home'
import PostDetail from '../PostDetail/PostDetail'
import NotFound from '../NotFound/NotFound'

import posts from '../../../blog-posts.json'

const Routes = () => (
	<div>
		<Match exactly pattern='/' component={Home} />
		<Match exactly pattern='/about' component={About} />
		<Match exactly pattern='/post/:slug' component={props => {
			const post = posts.posts.filter(post => props.params.slug === post.slug)
			return <PostDetail post={post[0]} />
		}} />
		<Miss component={NotFound} />
	</div>
)

export default Routes