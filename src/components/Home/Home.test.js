import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import Home from './Home'
import Post from '../Post/Post'

test('Home component should render as expected', () => {
	const posts = [{
		"title": "How to build a progressive web app with React",
    "slug": "how-to-build-a-progressive-web-app-with-react",
    "excerpt": "One of the easiest...",
    "content": "One of the easiest ways to get a job in the early GitHub days was to blah."
	}]
	const component = shallow(<Home posts={posts} />)
	const tree = toJson(component)
	expect(component.find(Post).length).toBe(1)
	expect(tree).toMatchSnapshot()
})

test('Home component should render as expected', () => {
	const posts = [{
		"title": "How to build a progressive web app with React",
    "slug": "how-to-build-a-progressive-web-app-with-react",
    "excerpt": "One of the easiest...",
    "content": "One of the easiest ways to get a job in the early GitHub days was to blah."
	},
	{
		"title": "How to build a progressive web app with React",
    "slug": "how-to-build-a-progressive-web-app-with-react",
    "excerpt": "One of the easiest...",
    "content": "One of the easiest ways to get a job in the early GitHub days was to blah."
	}]
	const component = shallow(<Home posts={posts} />)
	const tree = toJson(component)
	expect(component.find(Post).length).toBe(2)
	expect(tree).toMatchSnapshot()
})

test('Home component should render as expected', () => {
	const component = shallow(<Home posts={[]} />)
	const tree = toJson(component)
	expect(component.find(Post).length).toBe(0)
	expect(tree).toMatchSnapshot()
})



















