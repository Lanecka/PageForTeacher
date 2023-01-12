// import { v4 as uuidv4 } from 'uuid';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGLE_IS_FETCHING = 'TOGLE-IS-FETCHING';

/**
 * Почемучка X>10 вопросов;
 * Цветик 5<X=<10 вопросов;
 * Знайка 0<Х=<5 вопросов;
 * Нeзнайка 0 вопросов 
 */
let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count
      };
    case TOGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    default:
      return state;
  }
}

// Функции Action Creation возвращают actoin-объeкт с определенным типом данных, 
// и через диспатч мы вызываем этот объeкт:
/** Подписчик */
export const follow = (userId) => ({ type: FOLLOW, userId });
/**Не подписан */
export const unFollow = (userId) => ({ type: UNFOLLOW, userId });
/** Загрузить пользователей еще */
export const setUsers = (users) => ({ type: SET_USERS, users });
/** Загрузить текущую страницу */
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
/** Загрузить пользователей с сервака */
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
/** Preloader - Картинка загрузки при медленном соединении */
export const togleISFetching = (isFetching) => ({ type: TOGLE_IS_FETCHING, isFetching });

export default usersReduser;