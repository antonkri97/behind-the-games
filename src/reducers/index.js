import { INSERT_USER, UPDATE_USER, REMOVE_USER, SELECT_USER } from '../actions';
const uuidv4 = require('uuid/v4')

const initialState = {
  users: [
    {
      id: uuidv4(),
      name: "Anton",
      birth: {
        year: "1997",
        month: "1",
        day: "10"
      },
      address: "Larina",
      city: "Sertolovo",
      tel: "+7 (921) 863-91-58"
    },
    {
      id: uuidv4(),
      name: "Yana",
      birth: {
        year: "1997",
        month: "1",
        day: "30"
      },
      address: "Kom",
      city: "Saint-Petersburg",
      tel: "+7 (921) 222-33-44"
    }
  ],
  selectedUser: -1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INSERT_USER:
      return Object.assign({}, state, {
        users: [...state.users, action.user ]
      })
    case UPDATE_USER:
      return state;
    case REMOVE_USER: 
      return Object.assign({}, state, {
        users: state.users.filter(u => u.id !== action.id)
      });
    case SELECT_USER:
      return Object.assign({}, state, {
        selectedUser: action.id
      });
    default:
      return state;
  }
}