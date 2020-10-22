import React from 'react';
import Header from '../Header/Header';
import { render } from '@testing-library/react';

describe('Header component', () => {

  it('should render Header', () => {
    const wrapper = render(<Header />);
    expect(wrapper).toMatchSnapshot();
  })

  it('title should be', () => {
    const wrapper = 'NETFAILX'
    expect(wrapper).toEqual('NETFAILX');
  })
})



