const SET_USER_DATA = 'SET-USER-DATA';
// const TOGLE_IS_FETCHING = 'TOGLE-IS-FETCHING';

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }
}

// Функции Action Creationх, 
/** загрузить данные пользователя */
export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login} });

export default authReduser;