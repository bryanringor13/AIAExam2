import {createReducer} from '@reduxjs/toolkit';
import update from 'immutability-helper';
import userActions from './actions';

const initialState: UserState = {
  userList: [],
};

export const userInitialState = initialState;
export default createReducer(initialState, builder => {
  builder.addCase(userActions.saveUsers, (state, action) => {
    console.log('Users: saved!');
    return update(state, {userList: {$set: action.payload.users}});
  });
});
