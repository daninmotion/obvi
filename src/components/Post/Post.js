import React from 'react'
import {Link} from 'react-router'
import styles from './Post.css'

//We're passing props down into this Post function.
const Post = (props) => (
	<div>
		<h2 className={styles.title}>
			<Link className={styles.link} to={`/post/${props.slug}`}>{props.title}</Link>
		</h2>
		<p className={styles.content}>{props.excerpt}</p>
	</div>
)

export default Post