import {INCREMENT} from './actions';
import {tassign} from 'tassign';

export interface IAppState {
  counter: number;
  // messaging?: {
  //   newMessages: number
  // };
}

export const INITIAL_STATE: IAppState = {
  counter: 0
  // messaging: {
  //   newMessages: 5
  // }
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case INCREMENT:
      // return Object.assign({}, state, {counter: state.counter + 1});
      return tassign(state, {counter: state.counter + 1});
  }
  return state;
}
