import React from 'react';
import { shallow } from 'enzyme';
import { HomepageComponent } from './Homepage';

describe('Component Homepage', () => {
  it('should render without crashing', () => {
    const posts = {
      data: [],
    };
    const component = shallow(<HomepageComponent posts={posts} />);
    expect(component).toBeTruthy();
  });
});
