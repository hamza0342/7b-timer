import React, { ReactElement } from 'react';
import {shallow, ShallowWrapper } from 'enzyme'
import Timer from './Timer';

describe('Timer', () => {
  let container : ShallowWrapper;

  beforeEach(() => (container = shallow(<Timer />)))
  
  it('should render a <div />', () => {
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  });

  it("Should render timer buttons", () => {
      expect(container.find("TimerButton").length).toEqual(3)
  })

});