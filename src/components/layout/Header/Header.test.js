import React from 'react';
import { shallow } from 'enzyme';
import { HeaderComponent } from './Header';

describe('Component Header', () => {
  it('should render without crashing', () => {
    const users = {
      isLogged: true,
    };
    const component = shallow(<HeaderComponent users={users}/>);
    expect(component).toBeTruthy();
  });
});
