import React from 'react';
import Search from './Search'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';

const movieList = [{
  id: 2,
  poster_path: '/sdakldjfal',
  title: 'batman',
  vote_average: 9,
  overview: 'batman and robin'
},
{
  id: 4,
  poster_path: '/2asad',
  title: 'tarzan',
  vote_average: 12,
  overview: 'tarzan and jane'
}]
const setVoteColor = jest.fn

const searchedMovs = [
  { title: 'batman', id: '3' },
  { title: 'spiderman', id: '9' }]

describe('Search component', () => {
  it('matches the snapshot', () => {
    const wrapper = renderer.create(<Search
      moviesSearch={movieList}
      ratingColours={setVoteColor} />).toJSON();
    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly when items are passed in', () => {
    const wrapper = shallow(<Search
      moviesSearch={searchedMovs}
      ratingColours={setVoteColor} />)
    expect(wrapper).toMatchSnapshot()
  })
})
