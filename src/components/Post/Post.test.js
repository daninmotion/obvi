import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import Post from './Post'

test('Post component should render as expected', () => {
	const component = shallow(<Post title='My post'/>)
	const tree = toJson(component)
	expect(tree).toMatchSnapshot()
})