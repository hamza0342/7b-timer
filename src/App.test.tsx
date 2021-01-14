import React, { ReactElement } from 'react';
import {shallow, ShallowWrapper } from 'enzyme'
import App from './App';
import Timer from './components/Timer/Timer';
import { ShallowRenderer } from 'react-dom/test-utils';

describe('App', () => {
  let container : ShallowWrapper;

  beforeEach(() => (container = shallow(<App />)))
  
  it('should render a <div />', () => {
    expect(container.find('div').length).toEqual(1);
  });

  it("Should render Timer component", () => {
    expect(container.containsMatchingElement(<Timer />)).toEqual(true)
  })

});