type User = {
  id: string;
  name: string;
  avatar?: string;
  title?: string;
};

type UserState = {
  userList: User[];
};

type SaveUser = {
  users: User[];
};

type UserConstant = {
  reducer: string;
  screen: string;
  actions: {
    fecthUsers: string;
    saveUsers: string;
  };
};
