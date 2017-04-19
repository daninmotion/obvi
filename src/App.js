import React from 'react'
import { BrowserRouter, Match, Miss } from 'react-router'
import 'normalize.css'
import posts from '../blog-posts.json'
import styles from './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import PostDetail from './components/PostDetail/PostDetail'
import NotFound from './components/NotFound/NotFound'
// import Post from './components/Post/Post'

const App = () => (
	<BrowserRouter>
		<div>
			<Header />
			<div className={styles.container}>
			<Match exactly pattern='/' component={Home} />
				<Match exactly pattern='/about' component={About} />
				<Match exactly pattern='/post/:slug' component={props => {
					const post = posts.posts.filter(post => props.params.slug === post.slug)
					return <PostDetail post={post[0]} />
				}} />
				<Miss component={NotFound} />
			</div>
		</div>
	</BrowserRouter>
)

export default App