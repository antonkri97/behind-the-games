export const INSERT_USER = 'INSERT_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const SELECT_USER = 'SELECT_USER';

export const insert = (user) => ({
  type: INSERT_USER,
  user
});

export const update = (user) => ({
  type: UPDATE_USER,
  user
});

export const remove = (id) => ({
  type: REMOVE_USER,
  id
});

export const select = (id) => ({
  type: SELECT_USER,
  id
});
