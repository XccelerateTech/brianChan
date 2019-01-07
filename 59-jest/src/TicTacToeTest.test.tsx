import { configure, shallow } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Board, Square} from './TicTacToeTest';

import * as Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

configure({ adapter: new Adapter() });

describe('<App />', () => {
    it('renders a <Board /> components', () => {
      const wrapper = shallow(<Board />);
      expect(wrapper.find(Square).length).toEqual(9);
    });
    it('fill X in respond to a click', () => {
        const wrapper = shallow(<Board />);
        const board = wrapper.instance() as Board;
        board.handleClick(0);
        expect(board.state.squares).toEqual(['X', null, null,
                                            null, null, null,
                                            null, null, null]);
      });
  });