import {createAction} from '@reduxjs/toolkit';
import {USER} from './constant';

const fetchUsers = createAction(USER.actions.fecthUsers);
const saveUsers = createAction<SaveUser>(USER.actions.saveUsers);

const userActions = {
  fetchUsers,
  saveUsers,
};

export default userActions;
