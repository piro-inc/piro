import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import App from '../components/App';

test('<App />', (t) => {
  const wrapper = shallow(<App />);
  t.equal(wrapper.find('div').length, 1, 'has a div');
  t.end();
});