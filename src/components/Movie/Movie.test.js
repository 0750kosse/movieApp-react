import React from 'react'
import Movie from './Movie'
import { shallow, mount } from 'enzyme';

describe('Movie component', () => {

  it('renders correctly', () => {
    let componentDidMountSpy = spyOn(Movie.prototype, 'componentDidMount')
    const wrapper = shallow(<Movie />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should call componentDidMount once', () => {
    let componentDidMountSpy = spyOn(Movie.prototype, 'componentDidMount')
    let wrapper = shallow(<Movie />)
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1)
  })
})