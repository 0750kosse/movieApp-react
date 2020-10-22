import React from 'react';
import Navbar from './Navbar'
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Navbar component', () => {

  it('matches the snapshot', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  })

  it('latest should be in the component', () => {
    const { getByText } = render(<Router>
      <Navbar />
    </Router>)
    const wrapper = getByText('Latest');
    expect(wrapper).toBeInTheDocument();
  })

  it('search should be in the component', () => {
    const { getByText } = render(<Router>
      <Navbar />
    </Router>)
    const wrapper = getByText('Search');
    expect(wrapper).toBeInTheDocument();
  })
})
