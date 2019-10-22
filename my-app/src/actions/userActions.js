import { ADD_USER, UPDATE_USER, DELETE_USER, GET_USERS } from "./types";

// Add User
export const addUser = user => {
  return {
    type: ADD_USER,
    payload: user
  };
};

// Update User
export const updateUser = id => {
  return {
    type: UPDATE_USER,
    payload: id
  };
};

// Delete User
export const deleteUser = id => {
  return {
    type: DELETE_USER,
    payload: id
  };
};

// Get Users
export const getUsers = () => {
  return {
    type: GET_USERS
  };
};
