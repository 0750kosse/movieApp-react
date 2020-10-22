import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';


describe('App component', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })

  it('title should be in the component', () => {
    const { getByText } = render(<App />);
    const wrapper = getByText('NETFAILX');
    expect(wrapper).toBeInTheDocument();
  })

  it('should call componentDidMount', () => {
    jest.spyOn(App.prototype, 'componentDidMount')
    const wrapper = shallow(<App />)
    expect(App.prototype.componentDidMount.mock.calls.length).toBe(1)
  })
});
